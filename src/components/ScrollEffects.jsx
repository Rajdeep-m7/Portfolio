"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function countUp(element) {
  const finalText = element.textContent.trim();
  const target = parseFloat(element.dataset.count);
  if (Number.isNaN(target)) return;
  const decimals = (element.dataset.count.split(".")[1] || "").length;
  const duration = 1400;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    element.textContent = (target * easeOutCubic(progress)).toFixed(decimals);
    if (progress < 1) requestAnimationFrame(step);
    else element.textContent = finalText;
  };
  requestAnimationFrame(step);
}

// Scroll-linked behaviour: reveal-on-scroll, count-up numbers and the top
// progress bar. Content is server-rendered and fully visible without JS; the
// "js" class (set before first paint) is what enables the hidden start state.
export default function ScrollEffects() {
  const barRef = useRef(null);
  const pathname = usePathname();

  // Re-run on every route change so the new page's .reveal / [data-count] nodes get observed.
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add("is-visible");
          reveal.unobserve(el);
          // Let the entrance finish, then switch to the snappy hover transitions.
          window.setTimeout(() => el.classList.add("reveal-done"), 1500);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

    const counters = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          counters.unobserve(entry.target);
          if (!reduceMotion) countUp(entry.target);
        });
      },
      { threshold: 0.6 },
    );
    document.querySelectorAll("[data-count]").forEach((el) => counters.observe(el));

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      barRef.current?.style.setProperty("--progress", progress.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      reveal.disconnect();
      counters.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}
