import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-slate-900/90 backdrop-blur-md border-b border-green-500/20" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-green-500 font-mono text-xl font-bold">
            &gt; het_patel.exe
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-300 hover:text-green-500 transition-colors font-mono">
              &gt; home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-green-500 transition-colors font-mono">
              &gt; about
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-gray-300 hover:text-green-500 transition-colors font-mono">
              &gt; experience
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-gray-300 hover:text-green-500 transition-colors font-mono">
              &gt; skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-gray-300 hover:text-green-500 transition-colors font-mono">
              &gt; projects
            </button>
            <button onClick={() => scrollToSection("medium")} className="text-gray-300 hover:text-green-500 transition-colors font-mono">
              &gt; medium
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-green-500 transition-colors font-mono">
              &gt; contact
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-500 text-xl"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-green-500/20">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("home")} className="text-gray-300 hover:text-green-500 transition-colors font-mono text-left">
                &gt; home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-green-500 transition-colors font-mono text-left">
                &gt; about
              </button>
              <button onClick={() => scrollToSection("experience")} className="text-gray-300 hover:text-green-500 transition-colors font-mono text-left">
                &gt; experience
              </button>
              <button onClick={() => scrollToSection("skills")} className="text-gray-300 hover:text-green-500 transition-colors font-mono text-left">
                &gt; skills
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-gray-300 hover:text-green-500 transition-colors font-mono text-left">
                &gt; projects
              </button>
              <button onClick={() => scrollToSection("medium")} className="text-gray-300 hover:text-green-500 transition-colors font-mono text-left">
                &gt; medium
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-green-500 transition-colors font-mono text-left">
                &gt; contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
