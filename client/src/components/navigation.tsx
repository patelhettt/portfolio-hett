import { useState, useEffect } from "react";
import { Menu, X, Shield, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "experience", "skills", "projects", "medium", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: "home", label: "home", icon: Terminal },
    { id: "about", label: "about", icon: Shield },
    { id: "experience", label: "experience", icon: Terminal },
    { id: "skills", label: "skills", icon: Shield },
    { id: "projects", label: "projects", icon: Terminal },
    { id: "medium", label: "medium", icon: Shield },
    { id: "contact", label: "contact", icon: Terminal }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-green-500/30 shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-green-500 font-mono text-xl font-bold flex items-center gap-2 hover:text-green-400 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("home")}
          >
            <Shield className="w-6 h-6" />
            &gt; het_patel.exe
          </motion.div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 relative group ${
                  activeSection === item.id 
                    ? "text-green-500 bg-green-500/20 border border-green-500/30" 
                    : "text-gray-300 hover:text-green-500 hover:bg-green-500/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  &gt; {item.label}
                </span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-green-500/20 border border-green-500/30 rounded-lg -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-green-500 text-xl p-2 rounded-lg hover:bg-green-500/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 py-4 border-t border-green-500/20 bg-slate-800/50 backdrop-blur-sm rounded-lg"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-3 rounded-lg font-mono transition-all duration-300 flex items-center gap-3 ${
                      activeSection === item.id 
                        ? "text-green-500 bg-green-500/20 border border-green-500/30" 
                        : "text-gray-300 hover:text-green-500 hover:bg-green-500/10"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon className="w-4 h-4" />
                    &gt; {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
