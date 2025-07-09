import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, Shield, Smartphone } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
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
            <span className="text-white"> Experience</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </motion.div>
        
        <div className="space-y-8">
          {/* Experience Item 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/80 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-green-500 mb-2 flex items-center">
                      <Shield className="w-6 h-6 mr-2" />
                      VAPT Intern & Cybersecurity Researcher
                    </h3>
                    <h4 className="text-xl text-cyan-400 font-semibold flex items-center">
                      <Building2 className="w-5 h-5 mr-2" />
                      Hacker4Help
                    </h4>
                  </div>
                  <div className="text-gray-400 font-mono flex items-center mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="bg-slate-700 px-3 py-1 rounded">1 Month</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-green-500 font-mono text-sm mb-3">$ cat responsibilities.log</div>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">▶</span>
                        Conducted vulnerability assessments and penetration testing
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">▶</span>
                        Performed security research on web applications
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">▶</span>
                        Documented security findings and recommendations
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">▶</span>
                        Collaborated with development teams on security improvements
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="rounded-lg border border-green-500/30 w-full h-full bg-gradient-to-br from-green-900/20 to-green-700/20 flex items-center justify-center">
                      <div className="text-center">
                        <Shield className="w-16 h-16 text-green-500 mx-auto mb-2" />
                        <div className="text-white font-mono text-sm">Security Analysis</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Experience Item 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/80 border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2 flex items-center">
                      <Smartphone className="w-6 h-6 mr-2" />
                      Flutter Developer Intern
                    </h3>
                    <h4 className="text-xl text-green-500 font-semibold flex items-center">
                      <Building2 className="w-5 h-5 mr-2" />
                      Datanitiv Services
                    </h4>
                  </div>
                  <div className="text-gray-400 font-mono flex items-center mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="bg-slate-700 px-3 py-1 rounded">1 Month</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-cyan-400 font-mono text-sm mb-3">$ git log --oneline</div>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">▶</span>
                        Developed cross-platform mobile applications
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">▶</span>
                        Implemented secure authentication mechanisms
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">▶</span>
                        Worked with REST APIs and state management
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">▶</span>
                        Applied security best practices in mobile development
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="rounded-lg border border-cyan-400/30 w-full h-full bg-gradient-to-br from-cyan-900/20 to-cyan-700/20 flex items-center justify-center">
                      <div className="text-center">
                        <Smartphone className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                        <div className="text-white font-mono text-sm">Mobile Development</div>
                      </div>
                    </div>
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
