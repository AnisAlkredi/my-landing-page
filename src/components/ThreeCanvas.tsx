import React from "react";
import { Canvas } from "@react-three/fiber";
import LogoPattern from "@/components/LogoPattern";

export default function ThreeCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} />
      <LogoPattern scale={1.4} position={[3, 1, 0]} />
    </Canvas>
  );
}
