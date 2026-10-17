"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function ChromeCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.25;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = -t * 0.1;
      wireRef.current.rotation.y = -t * 0.18;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.08;
    }
  });

  return (
    <group>
      {/* Central Reflective Metallic Icosahedron */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial
            color="#D9DDE4"
            metalness={0.96}
            roughness={0.12}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Outer Chrome Wireframe Cage */}
      <Float speed={1.5} rotationIntensity={0.7} floatIntensity={0.5}>
        <mesh ref={wireRef}>
          <dodecahedronGeometry args={[2.1, 0]} />
          <meshStandardMaterial
            color="#FFFFFF"
            metalness={0.9}
            roughness={0.2}
            wireframe={true}
            transparent
            opacity={0.35}
          />
        </mesh>
      </Float>

      {/* Orbiting Tech Rings */}
      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[2.6, 2.62, 64]} />
          <meshBasicMaterial color="#777B84" side={THREE.DoubleSide} transparent opacity={0.4} />
        </mesh>
        <mesh rotation={[-Math.PI / 4, 0, 0]}>
          <ringGeometry args={[3.1, 3.12, 64]} />
          <meshBasicMaterial color="#D9DDE4" side={THREE.DoubleSide} transparent opacity={0.25} />
        </mesh>
      </group>
    </group>
  );
}

function FloatingParticles({ count = 350 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 4.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  });

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.03;
      pointsRef.current.rotation.x -= delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#D9DDE4"
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[6, 8, 4]} intensity={2.2} color="#FFFFFF" />
      <directionalLight position={[-6, -4, -4]} intensity={1.5} color="#777B84" />
      <pointLight position={[0, 3, 2]} intensity={1.8} color="#D9DDE4" distance={8} />
      <spotLight
        position={[0, 10, 0]}
        intensity={1.2}
        angle={0.6}
        penumbra={0.8}
        color="#FFFFFF"
      />

      <ChromeCore />
      <FloatingParticles />
    </>
  );
}

export default function CyberCore3D() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-[#D9DDE4]/20 animate-pulse" />
      </div>
    );
  }

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="w-64 h-64 rounded-full border border-[#D9DDE4]/30 animate-spin" style={{ animationDuration: "25s" }} />
        <div className="absolute w-44 h-44 rounded-full border border-[#777B84]/40 animate-ping opacity-30" />
        <div className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-[#111318] via-[#D9DDE4]/20 to-[#050505] border border-[#D9DDE4]/50 shadow-[0_0_50px_rgba(217,221,228,0.2)]" />
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[520px]">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
