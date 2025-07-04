// ✅ LogoPattern.tsx (نسخة متوافقة مع Vercel بدون أخطاء)
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

type HatchLineProps = {
  start: THREE.Vector3;
  end: THREE.Vector3;
  delay: number;
};

function HatchLine({ start, end, delay }: HatchLineProps) {
  const ref = useRef<THREE.Line>(null);

  useEffect(() => {
    if (!ref.current) return;
    const line = ref.current;
    const material = line.material as THREE.LineBasicMaterial;
    material.opacity = 0;
    const timeout = setTimeout(() => {
      material.opacity = 0.6;
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useFrame(() => {
    if (ref.current) {
      const mat = ref.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.4 + 0.4 * Math.sin((Date.now() + delay) * 0.001);
    }
  });

  const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);

  return (
    <>
      {/* الخط الأساسي */}
      {/* @ts-ignore */}
      <line ref={ref} geometry={geometry}>
        <lineBasicMaterial
          attach="material"
          color="#00e4ff"
          transparent
          opacity={0.6}
          linewidth={2.4}
        />
      </line>

      {/* توهج خلف الخط */}
      {/* @ts-ignore */}
      <line geometry={geometry}>
        <lineBasicMaterial
          attach="material"
          color="#00ffff"
          transparent
          opacity={0.1}
          linewidth={6.0}
        />
      </line>
    </>
  );
}

export default function LogoPattern({
  scale = 1,
  position = [0, 0, 0],
}: {
  scale?: number;
  position?: [number, number, number];
}) {
  const lines = [];
  const spacing = 0.3;
  const rows = 12;
  const cols = 12;
  const angle = Math.PI / 4;
  const length = 1.2;

  for (let y = -rows / 2; y < rows / 2; y++) {
    for (let x = -cols / 2; x < cols / 2; x++) {
      const offset = new THREE.Vector3(x * spacing, y * spacing, 0);
      const start = offset
        .clone()
        .add(
          new THREE.Vector3(
            (-Math.cos(angle) * length) / 2,
            (-Math.sin(angle) * length) / 2,
            0
          )
        );
      const end = offset
        .clone()
        .add(
          new THREE.Vector3(
            (Math.cos(angle) * length) / 2,
            (Math.sin(angle) * length) / 2,
            0
          )
        );
      const delay = (x + cols / 2 + y + rows / 2) * 40;
      lines.push(
        <HatchLine key={`${x},${y}`} start={start} end={end} delay={delay} />
      );
    }
  }

  return (
    <group scale={[scale, scale, scale]} position={position}>
      {/* توهج ناعم داخل المربع */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[cols * spacing, rows * spacing]} />
        <meshBasicMaterial color="#00ffff" opacity={0.03} transparent />
      </mesh>

      {/* الحرف A */}
      <Text
        position={[-0.5, 0, 0.02]}
        fontSize={3.2}
        color="#fefefe"
        anchorX="center"
        anchorY="middle"
      >
        A
      </Text>

      {lines}
    </group>
  );
}
