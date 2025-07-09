import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "$ whoami";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 rounded-full mx-auto border-4 border-green-500 shadow-lg animate-glow bg-gradient-to-br from-green-900/50 to-green-700/50 overflow-hidden">
            <img 
              src="https://raw.githubusercontent.com/patelhettt/patelhettt/main/me.jpeg" 
              alt="Het Patel" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="w-full h-full flex items-center justify-center" style={{ display: 'none' }}>
              <Shield className="w-16 h-16 text-green-500" />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-mono text-green-500 text-lg mb-4"
        >
          <span className="typing-cursor">{typedText}</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-white">Het</span>
          <span className="text-green-500"> Patel</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 font-mono"
        >
          <span className="text-cyan-400">[</span>
          Cybersecurity Researcher
          <span className="text-cyan-400">]</span>
          <br />
          <span className="text-cyan-400">[</span>
          VAPT Specialist
          <span className="text-cyan-400">]</span>
          <br />
          <span className="text-cyan-400">[</span>
          Top 5% TryHackMe
          <span className="text-cyan-400">]</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-lg text-gray-400 mb-8"
        >
          BTech IT Final Year Student @ BVM Anand
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-green-500/20 border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg font-mono hover:bg-green-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
          >
            &gt; View Projects
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-mono hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
          >
            &gt; Contact Me
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-green-500 font-mono text-lg animate-pulse mb-8">
            Currently Open for Job Opportunities
          </p>
          
          <button 
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-green-500 transition-colors animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </div>
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 left-10 text-green-500/30 text-6xl"
      >
        <Terminal />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-20 right-10 text-cyan-400/30 text-6xl"
      >
        <Shield />
      </motion.div>
    </section>
  );
}
