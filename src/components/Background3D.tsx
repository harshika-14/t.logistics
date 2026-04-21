import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const FloatingShapes = () => {
  const groupRef = useRef<any>(null);
  
  useFrame((state, delta) => {
    // Objects go UP relative to camera as we scroll down to simulate vertical drop
    const scrollY = window.scrollY;
    if (groupRef.current) {
      // parallax: objects go down slowly as we scroll down
      groupRef.current.position.y = -scrollY * 0.005; 
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-4, 2, -5]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshBasicMaterial color="#EE3F2C" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh position={[5, -3, -8]}>
        <icosahedronGeometry args={[3, 1]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.05} />
      </mesh>
      <mesh position={[-3, -8, -10]}>
        <octahedronGeometry args={[4, 0]} />
        <meshBasicMaterial color="#EE3F2C" wireframe transparent opacity={0.1} />
      </mesh>
      <mesh position={[6, 8, -12]}>
        <torusKnotGeometry args={[3, 0.1, 100, 16]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.08} />
      </mesh>
    </group>
  );
};

const Particles = () => {
  const ref = useRef<any>(null);
  const sphere = useMemo(() => {
    const points = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = Math.cbrt(Math.random()) * 30; 
      points[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      points[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      points[i * 3 + 2] = radius * Math.cos(phi);
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta / 40;
      ref.current.position.y = -window.scrollY * 0.01; // particles fall down
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#EE3F2C" size={0.06} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
    </Points>
  );
};

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none" style={{ backgroundColor: '#000000' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Particles />
        <FloatingShapes />
        <fog attach="fog" args={['#000000', 5, 30]} />
      </Canvas>
    </div>
  );
}
