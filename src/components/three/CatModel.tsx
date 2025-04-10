
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { CatData } from "@/data/cats";

interface CatModelProps {
  position: [number, number, number];
  onClick: () => void;
  cat: CatData;
}

// Simplified cat model since we don't have actual 3D assets yet
const CatModel = ({ position, onClick, cat }: CatModelProps) => {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Random movement and rotation
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Gentle floating motion
    const time = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(time * 0.5 + position[0]) * 0.1 + 0.1;
    
    // Gentle rotation when hovered
    if (hovered) {
      groupRef.current.rotation.y += 0.01;
    }
  });
  
  // Get color from cat data or use default
  const catColor = cat.color || "#FFB6C1"; // Default to light pink
  
  return (
    <group
      ref={groupRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Cat body */}
      <mesh castShadow receiveShadow scale={hovered ? 1.1 : 1}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color={catColor} />
      </mesh>
      
      {/* Cat head */}
      <mesh castShadow position={[0, 0.8, 0.6]} scale={hovered ? 0.7 : 0.65}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color={catColor} />
      </mesh>
      
      {/* Cat ears */}
      <mesh castShadow position={[0.4, 1.3, 0.6]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.2, 0.5, 16]} />
        <meshStandardMaterial color={catColor} />
      </mesh>
      <mesh castShadow position={[-0.4, 1.3, 0.6]} rotation={[0, 0, -Math.PI / 4]}>
        <coneGeometry args={[0.2, 0.5, 16]} />
        <meshStandardMaterial color={catColor} />
      </mesh>
      
      {/* Cat tail */}
      <mesh castShadow position={[0, 0, -1]} rotation={[Math.PI / 2.5, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.2, 1.5, 16]} />
        <meshStandardMaterial color={catColor} />
      </mesh>
      
      {/* Cat eyes */}
      <mesh position={[0.25, 0.9, 1]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-0.25, 0.9, 1]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* Cat nose */}
      <mesh position={[0, 0.7, 1.1]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="pink" />
      </mesh>
      
      {/* Hover indicator - ring around the cat */}
      {hovered && (
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <ringGeometry args={[1.5, 1.7, 32]} />
          <meshBasicMaterial color="#FFD166" transparent opacity={0.5} />
        </mesh>
      )}
      
      {/* Cat name floating above */}
      <group position={[0, 2, 0]}>
        <mesh>
          <planeGeometry args={[2, 0.5]} />
          <meshBasicMaterial
            color="#118AB2"
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
    </group>
  );
};

export default CatModel;
