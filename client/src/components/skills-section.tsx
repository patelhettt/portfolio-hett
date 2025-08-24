import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Code, Server, Star, Zap, Target, Database, Smartphone } from "lucide-react";

export default function SkillsSection() {
  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < count ? "text-yellow-500 fill-current" : "text-gray-600"}`}
      />
    ));
  };

  const skillCategories = [
    {
      id: 1,
      title: "Cybersecurity",
      icon: Shield,
      color: "green",
      command: "$ ls security_tools/",
      skills: [
        { name: "Kali Linux", level: 5, description: "Advanced penetration testing" },
        { name: "VAPT", level: 5, description: "Vulnerability assessment" },
        { name: "Burp Suite", level: 4, description: "Web application security" },
        { name: "Nmap", level: 5, description: "Network reconnaissance" },
        { name: "Metasploit", level: 4, description: "Exploitation framework" },
        { name: "SQLmap", level: 4, description: "SQL injection testing" }
      ]
    },
    {
      id: 2,
      title: "Development",
      icon: Code,
      color: "cyan",
      command: "$ which languages",
      skills: [
        { name: "Flutter/Dart", level: 4, description: "Mobile development" },
        { name: "Python", level: 5, description: "Security scripting" },
        { name: "JavaScript", level: 3, description: "Web development" },
        { name: "HTML/CSS", level: 4, description: "Frontend development" },
        { name: "SQL", level: 4, description: "Database management" },
        { name: "Bash/Shell", level: 4, description: "System administration" }
      ]
    },
    {
      id: 3,
      title: "Platforms & Tools",
      icon: Server,
      color: "yellow",
      command: "$ uname -a",
      skills: [
        { name: "Linux", level: 5, description: "System administration" },
        { name: "Windows", level: 4, description: "Desktop security" },
        { name: "TryHackMe", level: 5, description: "Top 5% ranking" },
        { name: "Git/GitHub", level: 4, description: "Version control" },
        { name: "Docker", level: 3, description: "Containerization" },
        { name: "VMware", level: 4, description: "Virtualization" }
      ]
    }
  ];

  const additionalSkills = [
    {
      icon: Target,
      title: "Attack Vectors",
      skills: ["SQL Injection", "XSS", "CSRF", "RCE", "Privilege Escalation"]
    },
    {
      icon: Database,
      title: "Security Tools",
      skills: ["Wireshark", "John the Ripper", "Hashcat", "Aircrack-ng", "Hydra"]
    },
    {
      icon: Smartphone,
      title: "Mobile Security",
      skills: ["Android Security", "iOS Security", "APK Analysis", "Mobile Forensics"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-cyber">
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
          <div className="w-24 h-1 bg-green-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive expertise in cybersecurity, development, and security tools
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-slate-800/80 border-${category.color}-500/20 hover:border-${category.color}-500/40 transition-all duration-300 card-hover h-full`}>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`text-${category.color}-500 text-4xl mb-4`}>
                      <category.icon className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className={`text-xl font-bold text-${category.color}-500 mb-2`}>{category.title}</h3>
                    <div className={`text-${category.color}-500 font-mono text-sm`}>{category.command}</div>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <div className="flex">{renderStars(skill.level)}</div>
                        </div>
                        <div className="text-gray-500 text-xs mb-2">
                          {skill.description}
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-1 rounded-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-400`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            <span className="text-green-500 font-mono">&gt;</span>
            <span> Additional Expertise</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalSkills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/80 border-green-500/20 hover:border-green-500/40 transition-all duration-300 card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <skillGroup.icon className="w-6 h-6 text-green-500 mr-3" />
                      <h4 className="text-lg font-bold text-white">{skillGroup.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30 hover:bg-green-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-green border border-green-500/30 rounded-lg p-8 max-w-4xl mx-auto">
            <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning & Growth</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm constantly expanding my skillset through hands-on practice, certifications, and staying updated with the latest cybersecurity trends and tools.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="text-green-500 font-bold text-2xl mb-2">5+</div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-green-500 font-bold text-2xl mb-2">50+</div>
                <div className="text-gray-300">Security Tools</div>
              </div>
              <div className="text-center">
                <div className="text-green-500 font-bold text-2xl mb-2">100+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
