
import { useState } from "react";
import CatScene from "@/components/three/CatScene";
import CatDetailsModal from "@/components/ui/CatDetailsModal";
import { CatData, cats } from "@/data/cats";
import { motion } from "framer-motion";

const Index = () => {
  const [selectedCat, setSelectedCat] = useState<CatData | null>(null);
  
  const handleCatSelect = (cat: CatData) => {
    setSelectedCat(cat);
  };
  
  return (
    <div className="relative h-full">
      {/* 3D Scene */}
      <CatScene onCatSelect={handleCatSelect} cats={cats} />
      
      {/* Overlay Instructions */}
      <div className="absolute inset-x-0 top-4 flex justify-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-panel px-6 py-3"
        >
          <p className="text-sm font-medium">Click on cats to view details | Drag to rotate | Scroll to zoom</p>
        </motion.div>
      </div>
      
      {/* Welcome Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-8 left-8 max-w-md pointer-events-none"
      >
        <div className="glass-panel p-6">
          <h1 className="text-3xl font-bold mb-2 text-cat-primary">Welcome to Kitty-Verse</h1>
          <p className="mb-4">
            Explore our interactive 3D cat world! Navigate around the space to discover
            various cat companions, each with their own unique personality and traits.
          </p>
          <p className="text-sm text-muted-foreground">
            Created with React Three Fiber and modern UI design
          </p>
        </div>
      </motion.div>
      
      {/* Cat Details Modal */}
      <CatDetailsModal 
        cat={selectedCat} 
        isOpen={!!selectedCat} 
        onClose={() => setSelectedCat(null)} 
      />
    </div>
  );
};

export default Index;
