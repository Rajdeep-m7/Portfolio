import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotsRef = useRef([]);

  useEffect(() => {
    const dots = dotsRef.current;
    const totalDots = 8;

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let positions = Array.from({ length: totalDots }, () => ({ x: mouse.x, y: mouse.y }));

    const moveCursor = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      positions[0].x += (mouse.x - positions[0].x) * 0.4;
      positions[0].y += (mouse.y - positions[0].y) * 0.4;

      for (let i = 1; i < totalDots; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.4;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.4;
      }

      dots.forEach((dot, index) => {
        if (dot) {
          dot.style.transform = `translate(${positions[index].x}px, ${positions[index].y}px) scale(${1 - index * 0.08})`;
        }
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 12px rgba(255,255,255,0.8)",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;