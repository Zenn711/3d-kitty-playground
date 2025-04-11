
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";
import { CatData } from "@/data/cats";

interface CatModelProps {
  position: [number, number, number];
  onClick: () => void;
  cat: CatData;
}

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
      {/* Cat body - more elongated and realistic */}
      <mesh castShadow receiveShadow position={[0, 0.2, 0]} scale={[1.2, 0.8, 1.5]}>
        <capsuleGeometry args={[0.8, 1.6, 16, 16]} />
        <meshStandardMaterial color={catColor} roughness={0.7} metalness={0.1} />
      </mesh>
      
      {/* Cat head - more realistic proportions */}
      <mesh castShadow position={[0, 0.5, 1.2]} scale={0.8}>
        <sphereGeometry args={[0.9, 24, 24]} />
        <meshStandardMaterial color={catColor} roughness={0.6} metalness={0.1} />
      </mesh>
      
      {/* Cat ears - properly oriented */}
      <mesh castShadow position={[0.4, 1.1, 1.2]} rotation={[Math.PI * 0.25, 0, Math.PI * 0.25]}>
        <coneGeometry args={[0.2, 0.4, 16]} />
        <meshStandardMaterial color={highlightColor} roughness={0.6} />
      </mesh>
      <mesh castShadow position={[-0.4, 1.1, 1.2]} rotation={[Math.PI * 0.25, 0, -Math.PI * 0.25]}>
        <coneGeometry args={[0.2, 0.4, 16]} />
        <meshStandardMaterial color={highlightColor} roughness={0.6} />
      </mesh>
      
      {/* Cat legs */}
      {/* Front legs */}
      <mesh castShadow position={[0.5, -0.5, 0.8]} rotation={[0, 0, 0]} scale={[0.25, 0.6, 0.25]}>
        <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
        <meshStandardMaterial color={catColor} roughness={0.7} />
      </mesh>
      <mesh castShadow position={[-0.5, -0.5, 0.8]} rotation={[0, 0, 0]} scale={[0.25, 0.6, 0.25]}>
        <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
        <meshStandardMaterial color={catColor} roughness={0.7} />
      </mesh>
      
      {/* Back legs */}
      <mesh castShadow position={[0.5, -0.5, -0.8]} rotation={[0, 0, 0]} scale={[0.25, 0.6, 0.25]}>
        <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
        <meshStandardMaterial color={catColor} roughness={0.7} />
      </mesh>
      <mesh castShadow position={[-0.5, -0.5, -0.8]} rotation={[0, 0, 0]} scale={[0.25, 0.6, 0.25]}>
        <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
        <meshStandardMaterial color={catColor} roughness={0.7} />
      </mesh>
      
      {/* Cat tail - curved and more realistic */}
      <mesh castShadow position={[0, 0.2, -1.5]} rotation={[0, 0, Math.PI * 0.5]} scale={[0.2, 1.5, 0.2]}>
        <torusGeometry args={[0.6, 0.1, 16, 16, Math.PI * 0.8]} />
        <meshStandardMaterial color={catColor} roughness={0.7} />
      </mesh>
      
      {/* Cat eyes */}
      <mesh position={[0.25, 0.6, 1.9]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
        <mesh position={[0, 0, 0.05]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </mesh>
      <mesh position={[-0.25, 0.6, 1.9]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
        <mesh position={[0, 0, 0.05]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </mesh>
      
      {/* Cat nose */}
      <mesh position={[0, 0.3, 2]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FF9D9D" roughness={0.3} />
      </mesh>
      
      {/* Whiskers */}
      {[0.1, 0, -0.1].map((y, i) => (
        <>
          <mesh key={`whisker-right-${i}`} position={[0.3, 0.3 + y, 2]} rotation={[0, -Math.PI / 8, 0]} scale={[0.8, 0.02, 0.02]}>
            <boxGeometry args={[1, 0.05, 0.05]} />
            <meshStandardMaterial color="#FFFFFF" transparent opacity={0.7} />
          </mesh>
          <mesh key={`whisker-left-${i}`} position={[-0.3, 0.3 + y, 2]} rotation={[0, Math.PI / 8, 0]} scale={[0.8, 0.02, 0.02]}>
            <boxGeometry args={[1, 0.05, 0.05]} />
            <meshStandardMaterial color="#FFFFFF" transparent opacity={0.7} />
          </mesh>
        </>
      ))}
      
      {/* Cat mouth - simple curved line */}
      <mesh position={[0, 0.15, 2]} rotation={[Math.PI / 2, 0, 0]} scale={[0.2, 0.1, 0.1]}>
        <torusGeometry args={[0.3, 0.05, 8, 8, Math.PI]} />
        <meshStandardMaterial color="#AA7777" />
      </mesh>
      
      {/* Enhanced hover indicator */}
      {hovered && (
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <ringGeometry args={[1.5, 1.7, 32]} />
          <meshBasicMaterial color="#FFD166" transparent opacity={0.7} />
        </mesh>
      )}
      
      {/* Cat name floating above */}
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
