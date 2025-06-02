import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

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

  const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);

  useFrame(() => {
    if (ref.current) {
      const mat = ref.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.5 + 0.3 * Math.sin(Date.now() * 0.001 + delay / 100);
    }
  });

  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial attach="material" color="#00ffff" transparent opacity={0.6} />
    </line>
  );
}

type LogoPatternProps = {
  scale?: number;
  position?: [number, number, number];
};

export default function LogoPattern({ scale = 1, position = [0, 0, 0] }: LogoPatternProps) {
  const lines = [];
  const spacing = 0.3;
  const rows = 12;
  const cols = 12;
  const angle = Math.PI / 4;
  const length = 1.2;

  for (let y = -rows / 2; y < rows / 2; y++) {
    for (let x = -cols / 2; x < cols / 2; x++) {
      const offset = new THREE.Vector3(x * spacing, y * spacing, 0);
      const start = offset.clone().add(
        new THREE.Vector3(-Math.cos(angle) * length / 2, -Math.sin(angle) * length / 2, 0)
      );
      const end = offset.clone().add(
        new THREE.Vector3(Math.cos(angle) * length / 2, Math.sin(angle) * length / 2, 0)
      );
      const delay = (x + cols / 2 + y + rows / 2) * 40;
      lines.push(<HatchLine key={`${x},${y}`} start={start} end={end} delay={delay} />);
    }
  }

  return (
    <group scale={[scale, scale, scale]} position={position}>
      {lines}
    </group>
  );
}
