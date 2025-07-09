import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy, Shield, Smartphone, FileText } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
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
            <span className="text-white"> Projects & Research</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/80 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 h-full">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-green-900/50 to-green-700/50 rounded-lg border border-green-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="w-16 h-16 text-green-500 mx-auto mb-2" />
                      <div className="text-white font-mono text-sm">Penetration Testing</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-green-500 font-mono text-sm mb-2">$ cat project_1.md</div>
                <h3 className="text-xl font-bold text-white mb-3">LaPinoz VAPT Assessment</h3>
                <p className="text-gray-300 mb-4">
                  Conducted comprehensive vulnerability assessment and penetration testing on LaPinoz website, 
                  identifying critical security vulnerabilities and providing detailed remediation recommendations.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm font-mono">VAPT</span>
                  <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm font-mono">Web Security</span>
                  <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm font-mono">Reporting</span>
                </div>
                
                <div className="flex space-x-4">
                  <Button className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-2 rounded font-mono text-sm hover:bg-green-500 hover:text-black transition-all duration-300">
                    <FileText className="w-4 h-4 mr-2" />
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/80 border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 h-full">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-green-900/50 to-green-700/50 rounded-lg border border-green-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <Trophy className="w-16 h-16 text-green-500 mx-auto mb-2" />
                      <div className="text-white font-bold text-2xl">Top 5%</div>
                      <div className="text-green-500 font-mono">TryHackMe</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-cyan-400 font-mono text-sm mb-2">$ curl tryhackme.com/p/hett</div>
                <h3 className="text-xl font-bold text-white mb-3">TryHackMe Achievements</h3>
                <p className="text-gray-300 mb-4">
                  Ranked in the top 5% of TryHackMe users globally, completing numerous cybersecurity challenges 
                  and demonstrating expertise in various attack vectors and defensive techniques.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono">Ethical Hacking</span>
                  <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono">CTF</span>
                  <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono">Top 5%</span>
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    onClick={() => window.open("https://tryhackme.com/p/hett", "_blank")}
                    className="bg-cyan-400/20 border border-cyan-400 text-cyan-400 px-4 py-2 rounded font-mono text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Project 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/80 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 h-full">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-yellow-900/50 to-yellow-700/50 rounded-lg border border-yellow-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="w-16 h-16 text-yellow-500 mx-auto mb-2" />
                      <div className="text-white font-mono text-sm">Security Assessment</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-yellow-500 font-mono text-sm mb-2">$ ls security_assessments/</div>
                <h3 className="text-xl font-bold text-white mb-3">Multiple VAPT Projects</h3>
                <p className="text-gray-300 mb-4">
                  Successfully conducted vulnerability assessments on various web applications, identifying 
                  SQL injection, XSS, CSRF, and other OWASP Top 10 vulnerabilities across different platforms.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-sm font-mono">OWASP Top 10</span>
                  <span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-sm font-mono">SQL Injection</span>
                  <span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-sm font-mono">XSS</span>
                </div>
                
                <div className="flex space-x-4">
                  <Button className="bg-yellow-500/20 border border-yellow-500 text-yellow-500 px-4 py-2 rounded font-mono text-sm hover:bg-yellow-500 hover:text-black transition-all duration-300">
                    <FileText className="w-4 h-4 mr-2" />
                    View Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Project 4 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/80 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 h-full">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-900/50 to-purple-700/50 rounded-lg border border-purple-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="w-16 h-16 text-purple-400 mx-auto mb-2" />
                      <div className="text-white font-bold text-xl">Flutter</div>
                      <div className="text-purple-400 font-mono">Security Dev</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-purple-400 font-mono text-sm mb-2">$ flutter doctor</div>
                <h3 className="text-xl font-bold text-white mb-3">Secure Flutter Applications</h3>
                <p className="text-gray-300 mb-4">
                  Developed secure mobile applications using Flutter with focus on secure authentication, 
                  data encryption, and implementing security best practices in mobile development.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono">Flutter</span>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono">Mobile Security</span>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono">Encryption</span>
                </div>
                
                <div className="flex space-x-4">
                  <Button className="bg-purple-500/20 border border-purple-500 text-purple-400 px-4 py-2 rounded font-mono text-sm hover:bg-purple-500 hover:text-black transition-all duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
