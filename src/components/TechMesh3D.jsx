import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function TechMeshGeometry({ count = 150, color = '#84cc16' }) {
  const meshRef = useRef(null);
  const linesRef = useRef(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  const lines = useMemo(() => {
    const linePositions = [];
    const threshold = 2.5;
    
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = particles[i * 3] - particles[j * 3];
        const dy = particles[i * 3 + 1] - particles[j * 3 + 1];
        const dz = particles[i * 3 + 2] - particles[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < threshold) {
          linePositions.push(
            particles[i * 3], particles[i * 3 + 1], particles[i * 3 + 2],
            particles[j * 3], particles[j * 3 + 1], particles[j * 3 + 2]
          );
        }
      }
    }
    return new Float32Array(linePositions);
  }, [particles, count]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
    if (linesRef.current) {
      linesRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <group>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial color={color} size={0.08} transparent opacity={0.9} sizeAttenuation />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
}

function FloatingParticles() {
  const particlesRef = useRef(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(50 * 3);
    for (let i = 0; i < 50; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < 50; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.002;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#84cc16" size={0.04} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export function TechMesh3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#84cc16" />
        <TechMeshGeometry />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}

export default TechMesh3D;
