import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Code, Server, Star } from "lucide-react";

export default function SkillsSection() {
  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < count ? "text-yellow-500 fill-current" : "text-gray-600"}`}
      />
    ));
  };

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-green-500 font-mono">&gt;</span>
            <span className="text-white"> Skills & Tools</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cybersecurity Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/80 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-green-500 text-4xl mb-4">
                    <Shield className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-green-500 mb-2">Cybersecurity</h3>
                  <div className="text-green-500 font-mono text-sm">$ ls security_tools/</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Kali Linux</span>
                    <div className="flex">{renderStars(5)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">VAPT</span>
                    <div className="flex">{renderStars(5)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Burp Suite</span>
                    <div className="flex">{renderStars(4)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Nmap</span>
                    <div className="flex">{renderStars(5)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Metasploit</span>
                    <div className="flex">{renderStars(4)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">SQLmap</span>
                    <div className="flex">{renderStars(4)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Development Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/80 border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-cyan-400 text-4xl mb-4">
                    <Code className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Development</h3>
                  <div className="text-cyan-400 font-mono text-sm">$ which languages</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Flutter/Dart</span>
                    <div className="flex">{renderStars(4)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Python</span>
                    <div className="flex">{renderStars(5)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">JavaScript</span>
                    <div className="flex">{renderStars(3)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">HTML/CSS</span>
                    <div className="flex">{renderStars(4)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">SQL</span>
                    <div className="flex">{renderStars(4)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Bash/Shell</span>
                    <div className="flex">{renderStars(4)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Platforms & OS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/80 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-yellow-500 text-4xl mb-4">
                    <Server className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">Platforms</h3>
                  <div className="text-yellow-500 font-mono text-sm">$ uname -a</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Linux</span>
                    <div className="flex">{renderStars(5)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Windows</span>
                    <div className="flex">{renderStars(4)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">TryHackMe</span>
                    <div className="flex">{renderStars(5)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Git/GitHub</span>
                    <div className="flex">{renderStars(4)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Docker</span>
                    <div className="flex">{renderStars(3)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">VMware</span>
                    <div className="flex">{renderStars(4)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
