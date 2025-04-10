
import { motion } from "framer-motion";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CatFact, catFacts } from "@/data/cats";
import CatFactCard from "@/components/ui/CatFactCard";

const CatFacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(catFacts.map(fact => fact.category)));
  
  // Filter facts based on search and category
  const filteredFacts = catFacts.filter(fact => {
    const matchesSearch = 
      fact.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fact.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !categoryFilter || fact.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl font-bold mb-2">Cat Facts</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover interesting and fun facts about our feline friends. Learn about their
          biology, behavior, and fascinating abilities.
        </p>
      </motion.div>
      
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="Search facts..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          <button
            className={`px-3 py-1 rounded-full text-sm ${
              !categoryFilter 
                ? "bg-cat-primary text-white" 
                : "bg-secondary text-foreground"
            }`}
            onClick={() => setCategoryFilter(null)}
          >
            All
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded-full text-sm ${
                categoryFilter === category 
                  ? "bg-cat-primary text-white" 
                  : "bg-secondary text-foreground"
              }`}
              onClick={() => setCategoryFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFacts.length > 0 ? (
          filteredFacts.map((fact, index) => (
            <CatFactCard key={fact.id} fact={fact} index={index} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No facts found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatFacts;
