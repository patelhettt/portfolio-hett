import { motion } from "framer-motion";
import { Shield, Heart, Code, Zap, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/patelhettt", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/hetpatel9/", icon: Linkedin },
    { name: "Email", href: "mailto:awesomehet1@gmail.com", icon: Mail }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 px-6 border-t border-green-500/20 bg-gradient-cyber"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-green-500" />
              <div className="text-green-500 font-mono text-xl font-bold">
                &gt; het_patel.exe
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Cybersecurity professional passionate about protecting digital assets through 
              vulnerability assessment, penetration testing, and security research.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Code className="w-4 h-4" />
              Built with React, TypeScript & Tailwind CSS
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(link.href.slice(1))}
                  className="block text-gray-300 hover:text-green-500 transition-colors font-mono text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  &gt; {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-sm">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-green-500/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm font-mono">
              &gt; het_patel.exe --version {currentYear}
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>and</span>
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>by Het Patel</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} All rights reserved
            </div>
          </div>
        </motion.div>

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
        >
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-500 font-mono">Status: Online</span>
            </div>
            <div className="text-gray-400 font-mono">
              Ready for new opportunities
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
