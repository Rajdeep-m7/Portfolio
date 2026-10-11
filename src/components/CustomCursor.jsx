"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = 'a, button, [role="button"], summary, label, select';
const TEXT_FIELD = 'input, textarea, [contenteditable="true"]';

const lerp = (from, to, amount) => from + (to - from) * amount;

// Smooth cursor: a precise dot, plus a ring that trails behind with spring-like
// easing, stretches with speed, is pulled toward buttons/links ("magnetic"),
// expands over interactive elements, squeezes + ripples on click and gets out
// of the way over text fields. Fine pointers only; off for reduced motion.
export default function CustomCursor() {
  const rootRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!canHover || reduceMotion || !root || !ring || !dot) return;

    const html = document.documentElement;
    html.classList.add("has-custom-cursor");

    const mouse = { x: -200, y: -200 };
    const ringPos = { x: -200, y: -200 };
    const dotPos = { x: -200, y: -200 };
    let angle = 0;
    let stretch = 0;
    let hoverEl = null;
    let pressed = false;
    let overText = false;
    let visible = false;
    let frame = 0;

    const setState = (state) => {
      if (root.dataset.state !== state) root.dataset.state = state;
    };

    const resolveState = () => {
      if (!visible) return setState("hidden");
      if (overText) return setState("text");
      if (pressed) return setState("press");
      setState(hoverEl ? "link" : "default");
    };

    const onMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      if (!visible) {
        visible = true;
        ringPos.x = dotPos.x = mouse.x;
        ringPos.y = dotPos.y = mouse.y;
        resolveState();
      }
    };

    const onOver = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      overText = Boolean(target?.closest(TEXT_FIELD));
      hoverEl = overText ? null : target?.closest(INTERACTIVE) ?? null;
      resolveState();
    };

    const onDown = () => {
      pressed = true;
      resolveState();
      const ripple = document.createElement("span");
      ripple.className = "cursor-ripple";
      // The ripple animates scale, so a positioned wrapper carries the translate.
      const holder = document.createElement("span");
      holder.style.cssText = `position:fixed;top:0;left:0;transform:translate(${mouse.x}px,${mouse.y}px);pointer-events:none`;
      holder.appendChild(ripple);
      root.appendChild(holder);
      ripple.addEventListener("animationend", () => holder.remove(), { once: true });
    };

    const onUp = () => {
      pressed = false;
      resolveState();
    };

    const onLeave = () => {
      visible = false;
      resolveState();
    };

    const onEnter = () => {
      visible = true;
      resolveState();
    };

    const tick = () => {
      // Magnetic pull toward small interactive elements.
      let targetX = mouse.x;
      let targetY = mouse.y;
      if (hoverEl && hoverEl.isConnected) {
        const rect = hoverEl.getBoundingClientRect();
        if (rect.width < 360 && rect.height < 120) {
          targetX = lerp(mouse.x, rect.left + rect.width / 2, 0.28);
          targetY = lerp(mouse.y, rect.top + rect.height / 2, 0.28);
        }
      }

      const prevX = ringPos.x;
      const prevY = ringPos.y;
      ringPos.x = lerp(ringPos.x, targetX, 0.16);
      ringPos.y = lerp(ringPos.y, targetY, 0.16);
      dotPos.x = lerp(dotPos.x, mouse.x, 0.55);
      dotPos.y = lerp(dotPos.y, mouse.y, 0.55);

      // Stretch the ring along the direction of travel, relaxing at rest.
      const vx = ringPos.x - prevX;
      const vy = ringPos.y - prevY;
      const speed = Math.min(Math.hypot(vx, vy) / 22, 1);
      if (speed > 0.02) angle = Math.atan2(vy, vx);
      stretch = lerp(stretch, speed, 0.2);

      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) rotate(${angle}rad) scale(${1 + stretch * 0.35}, ${1 - stretch * 0.18})`;
      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`;

      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      html.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      data-state="hidden"
      className="cursor-root hidden [@media(hover:hover)_and_(pointer:fine)]:block"
    >
      <div ref={ringRef} className="cursor-ring">
        <div className="cursor-ring-inner" />
      </div>
      <div ref={dotRef} className="cursor-dot">
        <div className="cursor-dot-inner" />
      </div>
    </div>
  );
}
