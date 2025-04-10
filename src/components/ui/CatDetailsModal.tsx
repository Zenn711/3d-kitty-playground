
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CatData } from "@/data/cats";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface CatDetailsModalProps {
  cat: CatData | null;
  isOpen: boolean;
  onClose: () => void;
}

const CatDetailsModal = ({ cat, isOpen, onClose }: CatDetailsModalProps) => {
  if (!cat) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl glass-panel border-none">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center">
            <span className="text-cat-primary">{cat.name}</span>
            <span className="ml-2 text-sm bg-cat-accent/20 text-cat-accent px-2 py-1 rounded-full">
              {cat.breed}
            </span>
          </DialogTitle>
          
          <Button 
            variant="ghost" 
            className="absolute right-4 top-4" 
            onClick={onClose}
          >
            <X size={18} />
          </Button>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <div className="cat-card overflow-hidden h-64 flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cat-primary/10 to-cat-secondary/10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-52 h-52 relative"
                >
                  {/* Placeholder cat image/animation */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-cat-primary to-cat-secondary flex items-center justify-center text-6xl animate-float">
                    😺
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {cat.traits.map((trait, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full text-xs bg-cat-tertiary/20 text-cat-tertiary"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <DialogDescription className="text-base">
              {cat.description}
            </DialogDescription>

            <div className="space-y-4">
              <div className="bg-background/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-medium">{cat.age} years</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Weight</p>
                    <p className="font-medium">{cat.weight} kg</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Playfulness</p>
                    <div className="flex items-center gap-1">
                      {Array(5).fill(0).map((_, i) => (
                        <span 
                          key={i} 
                          className={`w-4 h-4 rounded-full ${
                            i < cat.playfulness 
                              ? "bg-cat-accent" 
                              : "bg-muted"
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Friendliness</p>
                    <div className="flex items-center gap-1">
                      {Array(5).fill(0).map((_, i) => (
                        <span 
                          key={i} 
                          className={`w-4 h-4 rounded-full ${
                            i < cat.friendliness 
                              ? "bg-cat-primary" 
                              : "bg-muted"
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Fun Fact</h3>
                <p className="text-sm italic">{cat.funFact}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CatDetailsModal;
