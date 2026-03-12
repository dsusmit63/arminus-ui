import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";

/* Generate random particle positions */
const Particles = () => {
  const positions = useMemo(() => {
    const count = 800; // LOW count = safe
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      array[i] = (Math.random() - 0.5) * 10;
    }

    return array;
  }, []);

  return (
    <Points positions={positions}>
      <PointMaterial
        transparent
        color="#2563eb"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.25}
      />
    </Points>
  );
};

const ThreeBackground = () => {
  const [enabled, setEnabled] = useState(true);

  /* Respect reduced motion & mobile */
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isMobile = window.innerWidth < 768;

    if (reduceMotion || isMobile) {
      setEnabled(false);
    }
  }, []);

  if (!enabled) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      gl={{ antialias: true, alpha: true }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={0.5} />
      <Particles />
    </Canvas>
  );
};

export default ThreeBackground;
