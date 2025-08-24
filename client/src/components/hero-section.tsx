import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, ChevronDown, Zap, Target, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "$ whoami",
    "$ cat skills.txt",
    "$ ls achievements/",
    "$ echo $CURRENT_STATUS"
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const shouldDelete = isDeleting;
    
    const timeout = setTimeout(() => {
      if (!shouldDelete) {
        if (typedText === currentText) {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
        setTypedText(currentText.slice(0, typedText.length + 1));
      } else {
        if (typedText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          return;
        }
        setTypedText(currentText.slice(0, typedText.length - 1));
      }
    }, shouldDelete ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [typedText, currentTextIndex, isDeleting, texts]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 rounded-full mx-auto border-4 border-green-500 shadow-lg animate-glow bg-gradient-to-br from-green-900/50 to-green-700/50 flex items-center justify-center relative">
            <Shield className="w-16 h-16 text-green-500" />
            {/* Animated rings */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-green-500/30"
            />
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 rounded-full border-2 border-green-500/20"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-mono text-green-500 text-lg mb-4 min-h-[2rem] flex justify-center items-center"
        >
          <span className="typing-cursor bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30">
            {typedText}
          </span>
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
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-cyan-400">[</span>
              <Shield className="w-5 h-5 text-cyan-400" />
              <span>Cybersecurity Researcher</span>
              <span className="text-cyan-400">]</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-cyan-400">[</span>
              <Target className="w-5 h-5 text-cyan-400" />
              <span>VAPT Specialist</span>
              <span className="text-cyan-400">]</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-cyan-400">[</span>
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Top 5% TryHackMe</span>
              <span className="text-cyan-400">]</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-lg text-gray-400 mb-8 flex items-center justify-center gap-2"
        >
          <Code className="w-5 h-5 text-gray-400" />
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
            className="bg-green-500/20 border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg font-mono hover:bg-green-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 group"
          >
            <Terminal className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            &gt; View Projects
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-mono hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 group"
          >
            <Shield className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            &gt; Contact Me
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-8">
            <p className="text-green-500 font-mono text-lg animate-pulse">
              🚀 Currently Open for Job Opportunities
            </p>
          </div>
          
          <button 
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-green-500 transition-colors animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </div>
      
      {/* Enhanced floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-10 text-green-500/30 text-6xl"
      >
        <Terminal />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-20 right-10 text-cyan-400/30 text-6xl"
      >
        <Shield />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        className="absolute top-1/3 right-20 text-green-500/20 text-4xl"
      >
        <Code />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 3 }}
        className="absolute bottom-1/3 left-20 text-cyan-400/20 text-4xl"
      >
        <Target />
      </motion.div>
    </section>
  );
}
