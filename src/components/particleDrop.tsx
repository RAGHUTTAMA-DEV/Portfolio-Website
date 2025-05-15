import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const ParticleBackground = () => {
  const particleRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    particleRef.current.forEach((particle) => {
      if (!particle) return;

      gsap.set(particle, {
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        opacity: Math.random(),
        left: Math.random() * window.innerWidth,
        top: Math.random() * window.innerHeight,
        position: "absolute",
        borderRadius: "100%",
        background: "#111827",
      });

      gsap.to(particle, {
        y: window.innerHeight,
        duration: Math.random() * 10 + 10,
        opacity: 0,
        repeat: -1,
        ease:"none",
      });
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {Array.from({ length: 100 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            particleRef.current[index] = el;
          }}
          style={{ position: "absolute" }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
