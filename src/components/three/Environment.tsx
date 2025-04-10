
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

const Environment = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    // Slowly rotate the environment
    groupRef.current.rotation.y += 0.0005;
  });
  
  return (
    <group ref={groupRef}>
      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#06D6A0" />
      </mesh>
      
      {/* Decorative elements */}
      <Trees />
      <Clouds />
      <ToyBalls />
    </group>
  );
};

const Trees = () => {
  // Create some trees around the perimeter
  return (
    <group>
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        const radius = 15;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        const randomHeight = 2 + Math.random() * 3;
        
        return (
          <group key={i} position={[x, 0, z]}>
            {/* Tree trunk */}
            <mesh castShadow position={[0, randomHeight / 2 - 0.5, 0]}>
              <cylinderGeometry args={[0.3, 0.5, randomHeight, 8]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            
            {/* Tree top */}
            <mesh castShadow position={[0, randomHeight, 0]}>
              <coneGeometry args={[randomHeight / 2, randomHeight, 8]} />
              <meshStandardMaterial color="#228B22" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

const Clouds = () => {
  const cloudsRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (!cloudsRef.current) return;
    // Move clouds slightly
    cloudsRef.current.rotation.y += 0.0003;
  });
  
  return (
    <group ref={cloudsRef} position={[0, 10, 0]}>
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const radius = 20 + Math.random() * 5;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        const randomY = Math.random() * 5;
        
        return (
          <Cloud key={i} position={[x, randomY, z]} />
        );
      })}
    </group>
  );
};

const Cloud = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <mesh castShadow>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh castShadow position={[1, 0.3, 0]}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh castShadow position={[-1, 0.2, 0]}>
        <sphereGeometry args={[1.3, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh castShadow position={[0, 0.5, 1]}>
        <sphereGeometry args={[1.1, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
};

const ToyBalls = () => {
  // Add some toy balls scattered around
  return (
    <group>
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const radius = 4 + Math.random() * 5;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        
        const colors = ["#FF9D87", "#FFD166", "#06D6A0", "#118AB2", "#EF476F"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <mesh key={i} position={[x, 0.3, z]} castShadow>
            <sphereGeometry args={[0.4, 16, 16]} />
            <meshStandardMaterial color={randomColor} />
          </mesh>
        );
      })}
    </group>
  );
};

export default Environment;
