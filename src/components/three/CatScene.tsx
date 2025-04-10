
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Group, Vector3 } from "three";
import CatModel from "./CatModel";
import Environment from "./Environment";
import { CatData } from "@/data/cats";

interface CatSceneProps {
  onCatSelect: (cat: CatData) => void;
  cats: CatData[];
}

const CatScene = ({ onCatSelect, cats }: CatSceneProps) => {
  return (
    <div className="h-full w-full">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Scene onCatSelect={onCatSelect} cats={cats} />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Scene = ({ onCatSelect, cats }: CatSceneProps) => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[10, 10, 5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={0.2} />
      
      <PerspectiveCamera makeDefault position={[0, 6, 16]} fov={40} />
      
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        minDistance={8}
        maxDistance={25}
      />
      
      <Environment />
      
      {cats.map((cat, index) => (
        <CatModel
          key={cat.id}
          cat={cat}
          position={calculateCatPosition(index, cats.length)}
          onClick={() => onCatSelect(cat)}
        />
      ))}
    </>
  );
};

// Function to calculate positions in a circle
const calculateCatPosition = (index: number, total: number): [number, number, number] => {
  const radius = 7;
  const angle = (index / total) * Math.PI * 2; // radians
  
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;
  
  return [x, 0, z]; // y is 0 for ground level
};

export default CatScene;
