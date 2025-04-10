
import { useState } from "react";
import { motion } from "framer-motion";
import { CatData, cats } from "@/data/cats";
import CatDetailsModal from "@/components/ui/CatDetailsModal";

const Gallery = () => {
  const [selectedCat, setSelectedCat] = useState<CatData | null>(null);
  
  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl font-bold mb-2">Cat Gallery</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse our collection of adorable virtual cats. Click on a cat card to view
          more details about each of our feline friends.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cats.map((cat, index) => (
          <CatCard
            key={cat.id}
            cat={cat}
            index={index}
            onClick={() => setSelectedCat(cat)}
          />
        ))}
      </div>
      
      <CatDetailsModal 
        cat={selectedCat} 
        isOpen={!!selectedCat} 
        onClose={() => setSelectedCat(null)} 
      />
    </div>
  );
};

interface CatCardProps {
  cat: CatData;
  index: number;
  onClick: () => void;
}

const CatCard = ({ cat, index, onClick }: CatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="cat-card overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{cat.name}</h3>
          <span className="text-xs bg-cat-accent/20 text-cat-accent px-2 py-1 rounded-full">
            {cat.breed}
          </span>
        </div>
        
        <div className="h-48 flex items-center justify-center mb-4">
          <div 
            className="w-32 h-32 rounded-full flex items-center justify-center animate-float"
            style={{ backgroundColor: cat.color }}
          >
            <span className="text-5xl">😺</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {cat.traits.slice(0, 3).map((trait, index) => (
            <span 
              key={index}
              className="px-2 py-1 rounded-full text-xs bg-cat-tertiary/20 text-cat-tertiary"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
      
      <div className="bg-background/50 p-4 border-t border-border">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Age</p>
            <p className="font-medium">{cat.age} years</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Playfulness</p>
            <div className="flex items-center gap-1">
              {Array(5).fill(0).map((_, i) => (
                <span 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${
                    i < cat.playfulness 
                      ? "bg-cat-primary" 
                      : "bg-muted"
                  }`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
