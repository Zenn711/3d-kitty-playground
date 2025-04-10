
import { motion } from "framer-motion";
import { CatFact as ICatFact } from "@/data/cats";

interface CatFactCardProps {
  fact: ICatFact;
  index: number;
}

const CatFactCard = ({ fact, index }: CatFactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="cat-card p-6 flex flex-col h-full"
    >
      <div className="text-2xl mb-3">😺</div>
      <h3 className="text-lg font-semibold mb-2">{fact.title}</h3>
      <p className="text-muted-foreground flex-grow">{fact.content}</p>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground">Fact #{fact.id}</span>
        <span className="text-xs bg-cat-accent/20 text-cat-accent px-2 py-1 rounded-full">
          {fact.category}
        </span>
      </div>
    </motion.div>
  );
};

export default CatFactCard;
