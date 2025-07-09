import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Star, Shield } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900/50">
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
            <span className="text-white"> About Me</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg shadow-2xl border border-green-500/30 hover:border-green-500/60 transition-all duration-300 bg-gradient-to-br from-slate-800 to-slate-900 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-green-500 text-8xl mb-4">
                  <Shield />
                </div>
                <div className="text-white font-bold text-2xl">Cybersecurity</div>
                <div className="text-green-500 font-mono">Professional</div>
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/80 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-green-500 font-mono text-sm mb-2">$ cat about.txt</div>
                  <p className="text-gray-300 leading-relaxed">
                    I'm a passionate cybersecurity enthusiast and BTech IT final year student from BVM Anand. 
                    My journey in cybersecurity has led me through hands-on experiences in vulnerability assessment, 
                    penetration testing, and security research.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/80 border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-cyan-400 font-mono text-sm mb-2">$ ls achievements/</div>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Top 5% TryHackMe Ranking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      VAPT Specialist with Real-world Experience
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Cybersecurity Researcher
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Flutter Development Experience
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/80 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-yellow-500 font-mono text-sm mb-2">$ echo $CURRENT_STATUS</div>
                  <p className="text-gray-300">
                    <span className="text-yellow-500 font-semibold flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Actively seeking full-time opportunities
                    </span> 
                    in cybersecurity roles where I can contribute my skills in VAPT, security research, and my passion for protecting digital assets.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
