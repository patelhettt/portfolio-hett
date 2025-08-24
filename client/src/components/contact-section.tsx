import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Gamepad, Circle, BookOpen, Send, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL",
      primary: "awesomehet1@gmail.com",
      secondary: "hetworkshard@gmail.com",
      color: "green",
      link: "mailto:awesomehet1@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      primary: "linkedin.com/in/hetpatel9",
      color: "cyan",
      link: "https://www.linkedin.com/in/hetpatel9/"
    },
    {
      icon: Github,
      label: "GITHUB",
      primary: "github.com/patelhettt",
      color: "purple",
      link: "https://github.com/patelhettt"
    },
    {
      icon: Gamepad,
      label: "TRYHACKME",
      primary: "tryhackme.com/p/hett",
      color: "green",
      link: "https://tryhackme.com/p/hett"
    },
    {
      icon: BookOpen,
      label: "MEDIUM",
      primary: "hettt.medium.com",
      color: "yellow",
      link: "https://hettt.medium.com/"
    }
  ];

  const statusInfo = {
    status: "Available for Full-time Opportunities",
    description: "Actively seeking cybersecurity roles, internships, and freelance projects.",
    availability: "Open to new opportunities",
    responseTime: "Usually responds within 24 hours"
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-cyber">
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
            <span className="text-white"> Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to secure your digital assets? Let's connect and discuss opportunities for collaboration.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-slate-800/80 border-green-500/20 h-full">
              <CardContent className="p-8">
                <div className="text-green-500 font-mono text-lg mb-6">$ contact_info --verbose</div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center space-x-4 p-4 rounded-lg bg-slate-700/50 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300 hover:bg-slate-700/70">
                        <div className={`w-12 h-12 bg-${info.color}-500/20 rounded-lg flex items-center justify-center group-hover:bg-${info.color}-500/30 transition-colors`}>
                          <info.icon className={`text-${info.color}-500 text-xl group-hover:scale-110 transition-transform`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-300 font-mono text-sm mb-1">{info.label}</div>
                          <div className="text-white">
                            <a 
                              href={info.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className={`hover:text-${info.color}-500 transition-colors group-hover:underline`}
                            >
                              {info.primary}
                            </a>
                            {info.secondary && (
                              <>
                                <br />
                                <a 
                                  href={`mailto:${info.secondary}`}
                                  className={`hover:text-${info.color}-500 transition-colors group-hover:underline`}
                                >
                                  {info.secondary}
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Status Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                    <div className="text-green-500 font-mono text-sm mb-4">$ status</div>
                    <div className="space-y-3">
                      <p className="text-white font-semibold flex items-center">
                        <Circle className="w-3 h-3 text-green-500 fill-current mr-2 animate-pulse" />
                        {statusInfo.status}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {statusInfo.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center text-gray-400">
                          <Clock className="w-4 h-4 mr-2" />
                          {statusInfo.responseTime}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Circle className="w-2 h-2 text-green-500 fill-current mr-2" />
                          {statusInfo.availability}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/80 border-green-500/20 h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="text-green-500 text-6xl mb-4 flex justify-center">
                    <Mail className="w-16 h-16" />
                  </div>
                  <div className="text-white font-bold text-2xl mb-2">Let's Connect</div>
                  <div className="text-green-500 font-mono">Ready to Collaborate</div>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/30">
                      <div className="text-gray-400 text-sm mb-2">Subject</div>
                      <div className="text-white">Cybersecurity Collaboration</div>
                    </div>
                    
                    <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/30">
                      <div className="text-gray-400 text-sm mb-2">Message</div>
                      <div className="text-white text-sm">
                        Hi Het, I'd like to discuss a potential cybersecurity project...
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-green-500/20 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 group"
                    >
                      <Send className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      Send Message
                    </Button>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="text-gray-400 text-sm">
                    <div className="flex items-center justify-center mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      Based in India
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Available for remote work
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-green border border-green-500/30 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
            <p className="text-gray-300 mb-6">
              Whether you need a security assessment, penetration testing, or want to discuss cybersecurity opportunities, 
              I'm here to help secure your digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open("mailto:awesomehet1@gmail.com", "_blank")}
                className="bg-green-500/20 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              <Button 
                onClick={() => window.open("https://www.linkedin.com/in/hetpatel9/", "_blank")}
                className="bg-cyan-500/20 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
