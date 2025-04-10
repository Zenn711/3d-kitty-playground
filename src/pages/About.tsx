
import { motion } from "framer-motion";
import { Heart, Github, Code, PawPrint, Brush, Cpu } from "lucide-react";

const About = () => {
  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl font-bold mb-2">About Kitty-Verse</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The story behind our 3D cat adventure and the technology that powers it.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-6"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Heart className="mr-2 text-cat-primary" size={20} />
            The Project
          </h2>
          
          <p className="mb-4">
            Kitty-Verse was created as a passion project to explore the intersection of
            interactive 3D web experiences and modern UI design. We wanted to create
            something that was both visually engaging and technically impressive, while
            also being fun and approachable.
          </p>
          
          <p className="mb-4">
            The concept combines our love for cats with the power of modern web
            technologies, resulting in an immersive virtual cat world that users can
            explore and interact with.
          </p>
          
          <p>
            The project serves as a demonstration of how 3D graphics and interactive
            experiences can be seamlessly integrated into web applications, creating
            unique and memorable user experiences.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-panel p-6"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Code className="mr-2 text-cat-accent" size={20} />
            Technology Stack
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium flex items-center">
                <PawPrint className="mr-2 text-cat-tertiary" size={16} />
                Core Framework
              </h3>
              <p className="text-muted-foreground ml-6">
                Built with React, TypeScript, and Vite for a fast, type-safe development
                experience.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center">
                <Cpu className="mr-2 text-cat-tertiary" size={16} />
                3D Graphics
              </h3>
              <p className="text-muted-foreground ml-6">
                Powered by Three.js and React Three Fiber for seamless integration of 3D
                graphics within our React application. Drei is used for helpful utilities
                and components.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center">
                <Brush className="mr-2 text-cat-tertiary" size={16} />
                UI and Styling
              </h3>
              <p className="text-muted-foreground ml-6">
                Designed with Tailwind CSS for styling and shadcn/ui for beautiful,
                accessible UI components. Framer Motion adds fluid animations and
                transitions.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center">
                <Github className="mr-2 text-cat-tertiary" size={16} />
                Open Source
              </h3>
              <p className="text-muted-foreground ml-6">
                We believe in the power of open source software and have made our code
                available for others to learn from and build upon.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-panel p-6 mt-8"
      >
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Cpu className="mr-2 text-cat-primary" size={20} />
          Technical Challenges
        </h2>
        
        <p className="mb-4">
          Creating Kitty-Verse presented several interesting technical challenges:
        </p>
        
        <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
          <li>
            <span className="text-foreground font-medium">Performance Optimization:</span> Balancing
            detailed 3D models with smooth performance across different devices required
            careful optimization of geometry and materials.
          </li>
          <li>
            <span className="text-foreground font-medium">Interactive Elements:</span> Designing an
            intuitive way for users to interact with 3D elements while maintaining a clean,
            accessible user interface.
          </li>
          <li>
            <span className="text-foreground font-medium">Responsive Design:</span> Ensuring the 3D
            experience works well on various screen sizes while preserving the immersive
            quality of the application.
          </li>
          <li>
            <span className="text-foreground font-medium">State Management:</span> Coordinating state
            between the 3D scene and 2D UI components to create a cohesive user experience.
          </li>
        </ul>
        
        <p className="mt-4">
          These challenges were addressed through an iterative development process,
          continuous testing, and by leveraging modern web technologies that help bridge
          the gap between traditional web development and interactive 3D experiences.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
