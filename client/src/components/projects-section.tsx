import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy, Shield, Smartphone, FileText, Eye, Code, Zap } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "LaPinoz VAPT Assessment",
      description: "Conducted comprehensive vulnerability assessment and penetration testing on LaPinoz website, identifying critical security vulnerabilities and providing detailed remediation recommendations.",
      icon: Shield,
      color: "green",
      tags: ["VAPT", "Web Security", "Reporting"],
      action: "View Report",
      actionIcon: FileText,
      gradient: "from-green-900/50 to-green-700/50",
      borderColor: "border-green-500/30",
      hoverColor: "hover:border-green-500/60",
      shadowColor: "hover:shadow-green-500/10"
    },
    {
      id: 2,
      title: "TryHackMe Achievements",
      description: "Ranked in the top 5% of TryHackMe users globally, completing numerous cybersecurity challenges and demonstrating expertise in various attack vectors and defensive techniques.",
      icon: Trophy,
      color: "cyan",
      tags: ["Ethical Hacking", "CTF", "Top 5%"],
      action: "View Profile",
      actionIcon: ExternalLink,
      gradient: "from-cyan-900/50 to-cyan-700/50",
      borderColor: "border-cyan-400/30",
      hoverColor: "hover:border-cyan-400/60",
      shadowColor: "hover:shadow-cyan-400/10",
      externalLink: "https://tryhackme.com/p/hett"
    },
    {
      id: 3,
      title: "Multiple VAPT Projects",
      description: "Successfully conducted vulnerability assessments on various web applications, identifying SQL injection, XSS, CSRF, and other OWASP Top 10 vulnerabilities across different platforms.",
      icon: Shield,
      color: "yellow",
      tags: ["OWASP Top 10", "SQL Injection", "XSS"],
      action: "View Portfolio",
      actionIcon: FileText,
      gradient: "from-yellow-900/50 to-yellow-700/50",
      borderColor: "border-yellow-500/30",
      hoverColor: "hover:border-yellow-500/60",
      shadowColor: "hover:shadow-yellow-500/10"
    },
    {
      id: 4,
      title: "Secure Flutter Applications",
      description: "Developed secure mobile applications using Flutter with focus on secure authentication, data encryption, and implementing security best practices in mobile development.",
      icon: Smartphone,
      color: "purple",
      tags: ["Flutter", "Mobile Security", "Encryption"],
      action: "View Code",
      actionIcon: Code,
      gradient: "from-purple-900/50 to-purple-700/50",
      borderColor: "border-purple-500/30",
      hoverColor: "hover:border-purple-500/60",
      shadowColor: "hover:shadow-purple-500/10"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-cyber">
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
          <div className="w-24 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my cybersecurity projects, research work, and technical achievements
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-slate-800/80 ${project.borderColor} ${project.hoverColor} transition-all duration-300 ${project.shadowColor} h-full card-hover group`}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-lg ${project.borderColor} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                      <div className="text-center relative z-10">
                        <project.icon className={`w-16 h-16 mx-auto mb-2 text-${project.color}-500`} />
                        {project.id === 2 ? (
                          <>
                            <div className="text-white font-bold text-2xl">Top 5%</div>
                            <div className={`text-${project.color}-500 font-mono`}>TryHackMe</div>
                          </>
                        ) : (
                          <div className="text-white font-mono text-sm">
                            {project.id === 1 ? "Penetration Testing" : 
                             project.id === 3 ? "Security Assessment" : "Security Dev"}
                          </div>
                        )}
                      </div>
                      {/* Animated background elements */}
                      <div className="absolute inset-0 opacity-20">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute top-2 right-2 w-8 h-8 border border-current rounded-full"
                        />
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          className="absolute bottom-2 left-2 w-6 h-6 border border-current rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className={`text-${project.color}-500 font-mono text-sm mb-2`}>
                    {project.id === 1 ? "$ cat project_1.md" :
                     project.id === 2 ? "$ curl tryhackme.com/p/hett" :
                     project.id === 3 ? "$ ls security_assessments/" : "$ flutter doctor"}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`bg-${project.color}-500/20 text-${project.color}-500 px-3 py-1 rounded-full text-sm font-mono border border-${project.color}-500/30 hover:bg-${project.color}-500/30 transition-colors`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      onClick={() => project.externalLink ? window.open(project.externalLink, "_blank") : null}
                      className={`bg-${project.color}-500/20 border border-${project.color}-500 text-${project.color}-500 px-4 py-2 rounded font-mono text-sm hover:bg-${project.color}-500 hover:text-black transition-all duration-300 group/btn`}
                    >
                      <project.actionIcon className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                      {project.action}
                    </Button>
                    <Button 
                      className="bg-transparent border border-gray-600 text-gray-400 px-4 py-2 rounded font-mono text-sm hover:border-green-500 hover:text-green-500 transition-all duration-300"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 max-w-2xl mx-auto">
            <Zap className="w-8 h-8 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">More Projects Coming Soon</h3>
            <p className="text-gray-300 mb-4">
              I'm constantly working on new cybersecurity projects and research. Stay tuned for updates!
            </p>
            <Button 
              onClick={() => window.open("https://github.com/patelhettt", "_blank")}
              className="bg-green-500/20 border border-green-500 text-green-500 px-6 py-2 rounded-lg font-mono hover:bg-green-500 hover:text-black transition-all duration-300"
            >
              <Code className="w-4 h-4 mr-2" />
              View GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
