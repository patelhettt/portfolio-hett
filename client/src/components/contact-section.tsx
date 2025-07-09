import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Gamepad, Circle, BookOpen } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-green-500 font-mono">&gt;</span>
            <span className="text-white"> Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">
            Ready to secure your digital assets? Let's connect and discuss opportunities.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-slate-800/80 border-green-500/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-green-500 font-mono text-lg mb-6">$ contact_info --verbose</div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Mail className="text-green-500 text-xl" />
                      </div>
                      <div>
                        <div className="text-gray-300 font-mono text-sm">EMAIL</div>
                        <div className="text-white">
                          <a href="mailto:awesomehet1@gmail.com" className="hover:text-green-500 transition-colors">
                            awesomehet1@gmail.com
                          </a>
                          <br />
                          <a href="mailto:hetworkshard@gmail.com" className="hover:text-green-500 transition-colors">
                            hetworkshard@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                        <Linkedin className="text-cyan-400 text-xl" />
                      </div>
                      <div>
                        <div className="text-gray-300 font-mono text-sm">LINKEDIN</div>
                        <div className="text-white">
                          <a href="https://www.linkedin.com/in/hetpatel9/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                            linkedin.com/in/hetpatel9
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Github className="text-purple-400 text-xl" />
                      </div>
                      <div>
                        <div className="text-gray-300 font-mono text-sm">GITHUB</div>
                        <div className="text-white">
                          <a href="https://github.com/patelhettt" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                            github.com/patelhettt
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Gamepad className="text-green-400 text-xl" />
                      </div>
                      <div>
                        <div className="text-gray-300 font-mono text-sm">TRYHACKME</div>
                        <div className="text-white">
                          <a href="https://tryhackme.com/p/hett" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                            tryhackme.com/p/hett
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <BookOpen className="text-yellow-400 text-xl" />
                      </div>
                      <div>
                        <div className="text-gray-300 font-mono text-sm">MEDIUM</div>
                        <div className="text-white">
                          <a href="https://hettt.medium.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                            hettt.medium.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="text-green-500 font-mono text-sm mb-2">$ status</div>
                    <p className="text-white font-semibold flex items-center">
                      <Circle className="w-3 h-3 text-green-500 fill-current mr-2" />
                      Available for Full-time Opportunities
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      Actively seeking cybersecurity roles, internships, and freelance projects.
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-green-500/30 hover:border-green-500/60 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-green-500 text-8xl mb-4 flex justify-center">
                        <Mail className="w-20 h-20" />
                      </div>
                      <div className="text-white font-bold text-2xl">Let's Connect</div>
                      <div className="text-green-500 font-mono">Ready to Collaborate</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
