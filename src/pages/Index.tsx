
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
    <div className="relative h-full bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* 3D Scene */}
      <CatScene onCatSelect={handleCatSelect} cats={cats} />
      
      {/* Overlay Instructions */}
      <div className="absolute inset-x-0 top-4 flex justify-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
          className="glass-panel px-6 py-3 border-t-4 border-cat-primary shadow-lg"
        >
          <p className="text-sm font-medium">
            <span className="text-cat-primary">Click</span> on cats to view details | 
            <span className="text-cat-accent"> Drag</span> to rotate | 
            <span className="text-cat-tertiary"> Scroll</span> to zoom
          </p>
        </motion.div>
      </div>
      
      {/* Welcome Overlay */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: "spring", damping: 20 }}
        className="absolute bottom-8 left-8 max-w-md pointer-events-none"
      >
        <div className="glass-panel p-6 border-l-4 border-cat-accent shadow-xl">
          <motion.h1 
            className="text-3xl font-bold mb-2 bg-gradient-to-r from-cat-primary to-cat-accent bg-clip-text text-transparent"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to Kitty-Verse
          </motion.h1>
          <motion.p 
            className="mb-4 text-slate-700 dark:text-slate-300"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Explore our interactive 3D cat world! Navigate around the space to discover
            various cat companions, each with their own unique personality and traits.
          </motion.p>
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Created with React Three Fiber and modern UI design
          </motion.p>
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
