'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Rotating Bio-Medical Nucleus & Orbital Ring Structure
function MedicalCore() {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.35;
      coreRef.current.rotation.x += delta * 0.15;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.5;
      ring1Ref.current.rotation.y += delta * 0.25;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.4;
      ring2Ref.current.rotation.z += delta * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z += delta * 0.35;
      ring3Ref.current.rotation.x -= delta * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Pulsing Biomolecular Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.3, 2]} />
        <meshStandardMaterial
          color="#00bcd4"
          emissive="#004d61"
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>

      {/* Inner Glow Sphere */}
      <mesh>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color="#0c3b78"
          emissive="#104085"
          roughness={0.1}
          metalness={0.9}
          transparent={true}
          opacity={0.85}
        />
      </mesh>

      {/* Orbital Ring 1 - Precision Orthopaedics / Robotics */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.0, 0.035, 16, 100]} />
        <meshStandardMaterial
          color="#00a8b5"
          emissive="#005b63"
          roughness={0.25}
          metalness={0.9}
        />
      </mesh>

      {/* Orbital Ring 2 - Nursing & Care Sphere */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.4, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#164e87"
          emissive="#0b3366"
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>

      {/* Orbital Ring 3 - Allied Health & Science */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.8, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#00d2e0"
          emissive="#007a87"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
}

// Interactive Floating Medical Particles
function HealthParticles({ count = 120 }) {
  const pointsRef = useRef();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.08;
      pointsRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#38bdf8"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.85}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ThreeCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="three-canvas-container" aria-hidden="true" />;
  }

  return (
    <div className="three-canvas-container" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 6, 5]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-4, -3, -2]} intensity={1.8} color="#00bcd4" />
        <pointLight position={[3, -4, 2]} intensity={1.5} color="#e64626" />
        
        <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
          <MedicalCore />
          <HealthParticles count={140} />
        </Float>
      </Canvas>
    </div>
  );
}
