
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { CatData } from "@/data/cats";

interface CatModelProps {
  position: [number, number, number];
  onClick: () => void;
  cat: CatData;
}

// Enhanced cat model with improved aesthetics
const CatModel = ({ position, onClick, cat }: CatModelProps) => {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Enhanced movement and rotation
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Improved floating motion with more natural movement
    const time = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(time * 0.5 + position[0]) * 0.15 + 0.15;
    
    // Smooth rotation when hovered
    if (hovered) {
      groupRef.current.rotation.y += 0.015;
    }
  });
  
  // Get color from cat data or use enhanced default
  const catColor = cat.color || "#FFB6C1"; 
  
  // Calculate secondary color for highlights (slightly lighter version of main color)
  const makeHighlightColor = (baseColor: string) => {
    // Simple way to lighten a hex color
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);
    
    // Lighten by 15%
    const lighter = [
      Math.min(255, r + 40),
      Math.min(255, g + 40),
      Math.min(255, b + 40)
    ];
    
    return `#${lighter.map(v => v.toString(16).padStart(2, '0')).join('')}`;
  };
  
  const highlightColor = makeHighlightColor(catColor);
  
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
      {/* Cat body - enhanced shape */}
      <mesh castShadow receiveShadow scale={hovered ? 1.1 : 1}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial color={catColor} roughness={0.7} metalness={0.1} />
      </mesh>
      
      {/* Cat head - improved proportions */}
      <mesh castShadow position={[0, 0.8, 0.6]} scale={hovered ? 0.72 : 0.68}>
        <sphereGeometry args={[0.7, 24, 24]} />
        <meshStandardMaterial color={catColor} roughness={0.6} metalness={0.1} />
      </mesh>
      
      {/* Cat ears - FIXED orientation and improved shape */}
      <mesh castShadow position={[0.4, 1.3, 0.6]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.2, 0.5, 16]} />
        <meshStandardMaterial color={highlightColor} roughness={0.6} />
      </mesh>
      <mesh castShadow position={[-0.4, 1.3, 0.6]} rotation={[0, 0, -Math.PI / 4]}>
        <coneGeometry args={[0.2, 0.5, 16]} />
        <meshStandardMaterial color={highlightColor} roughness={0.6} />
      </mesh>
      
      {/* Cat tail - enhanced with curve */}
      <mesh castShadow position={[0, 0, -1]} rotation={[Math.PI / 2.5, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.2, 1.7, 16]} />
        <meshStandardMaterial color={catColor} roughness={0.7} />
      </mesh>
      
      {/* Cat eyes - enhanced with glow effect */}
      <mesh position={[0.25, 0.9, 1]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#000000" emissive="#222222" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-0.25, 0.9, 1]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#000000" emissive="#222222" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Cat nose - improved shape */}
      <mesh position={[0, 0.7, 1.1]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#FF9D9D" roughness={0.3} />
      </mesh>
      
      {/* Whiskers (new) */}
      {[0.15, 0, -0.15].map((y, i) => (
        <>
          <mesh key={`whisker-right-${i}`} position={[0.3, 0.7 + y, 1]} rotation={[0, -Math.PI / 8, 0]} scale={[1, 0.05, 0.05]}>
            <boxGeometry args={[0.7, 0.05, 0.05]} />
            <meshStandardMaterial color="#FFFFFF" transparent opacity={0.7} />
          </mesh>
          <mesh key={`whisker-left-${i}`} position={[-0.3, 0.7 + y, 1]} rotation={[0, Math.PI / 8, 0]} scale={[1, 0.05, 0.05]}>
            <boxGeometry args={[0.7, 0.05, 0.05]} />
            <meshStandardMaterial color="#FFFFFF" transparent opacity={0.7} />
          </mesh>
        </>
      ))}
      
      {/* Enhanced hover indicator - pulse effect */}
      {hovered && (
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <ringGeometry args={[1.5, 1.7, 32]} />
          <meshBasicMaterial color="#FFD166" transparent opacity={0.7} />
        </mesh>
      )}
      
      {/* Cat name floating above with better visibility */}
      <group position={[0, 2, 0]}>
        <mesh>
          <planeGeometry args={[2, 0.5]} />
          <meshBasicMaterial
            color="#118AB2"
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>
    </group>
  );
};

export default CatModel;
