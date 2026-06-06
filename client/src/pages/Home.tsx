import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Shield, Target, AlertCircle, Code2, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WriteUp {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
}

const TypingText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-6 border-l-4 border-accent pl-4 flex flex-wrap gap-x-2 gap-y-1"
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-flex"
        >
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              variants={child}
              key={charIndex}
              className="text-accent font-mono italic text-lg md:text-2xl"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Home() {
  const [writeUps, setWriteUps] = useState<WriteUp[]>([
    {
      title: "CyberHaze - Phishing Investigation: Wallet Verification Scam",
      link: "https://medium.com/@abdullmst/cyberhaze-phishing-investigation-wallet-verification-scam-6b8e5bbb92e3",
      pubDate: "May 2026",
      thumbnail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663710495349/ThdPYYIuWeLWBJwB.jpg"
    },
    {
      title: "CyberHaze - Shadow RAT Investigation",
      link: "https://medium.com/@abdullmst/cyberhaze-shadow-rat-eb379c5abadc",
      pubDate: "May 2026",
      thumbnail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663710495349/ThdPYYIuWeLWBJwB.jpg"
    },
    {
      title: "CyberHaze - OSINT & MITRE ATT&CK Framework Part 2",
      link: "https://medium.com/@abdullmst/cyberhaze-osint-mitre-2-b56bd7467e9c",
      pubDate: "May 2026",
      thumbnail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663710495349/ThdPYYIuWeLWBJwB.jpg"
    }
  ]);

  const skills = {
    "Security & SOC Tools": ["IBM QRadar", "Splunk", "Wireshark", "MISP"],
    "Operating Systems": ["Windows Server 2019", "Active Directory", "Linux", "PowerShell"],
    "Networking & Security": ["TCP/IP", "Network Analysis", "Incident Response", "Threat Intelligence"],
    "Programming": ["Python", "PowerShell", "Bash"],
  };

  const projects = [
    {
      title: "Windows Host-Based Threat Investigation",
      description: "Investigated Windows Event Logs and Sysmon activity to identify suspicious behavior and reconstruct attack timelines.",
      techniques: ["Windows Event Logs", "Sysmon", "Timeline Analysis"],
      mitre: ["T1566", "T1566.002"],
      github: "https://github.com/Abdullah-Shawadfi/windows-sysmon-investigation"
    },
    {
      title: "Network Traffic Malware Investigation using Wireshark",
      description: "Analyzed malicious PCAP files using Wireshark and extracted Indicators of Compromise (IOCs) for threat intelligence.",
      techniques: ["PCAP Analysis", "IOC Extraction", "Network Forensics"],
      mitre: ["T1071", "T1041"],
      github: "https://github.com/Abdullah-Shawadfi/network-traffic-malware-investigation"
    },
    {
      title: "Splunk SIEM Investigation",
      description: "Performed event correlation and investigated suspicious authentication activity in Windows logs using Splunk.",
      techniques: ["SIEM", "Event Correlation", "Log Analysis"],
      mitre: ["T1110", "T1078"],
      github: "https://github.com/Abdullah-Shawadfi/Splunk_SIEM_THREAT_INVESTIGATION"
    },
    {
      title: "Windows Lateral Movement Incident Analysis",
      description: "Detected PsExec lateral movement and mapped findings to MITRE ATT&CK techniques for comprehensive threat analysis.",
      techniques: ["Lateral Movement", "PsExec", "MITRE ATT&CK"],
      mitre: ["T1570", "T1021.002"],
      github: "https://github.com/Abdullah-Shawadfi/Windows-Lateral-Movement-Incident-Analysis"
    },
    {
      title: "Brute Force Attack Detection",
      description: "Analyzed authentication events and reconstructed brute-force attack timelines in Windows environments.",
      techniques: ["Authentication Analysis", "Attack Timeline", "Event Correlation"],
      mitre: ["T1110", "T1110.001"],
      github: "https://github.com/Abdullah-Shawadfi/SOC-BruteForce-Detection-Windows"
    },
    {
      title: "Security Operation Centre App",
      description: "Developed a Security Operation Centre (SOC) application to simulate threat detection, incident analysis, and security monitoring processes.",
      techniques: ["SIEM", "Threat Detection", "Incident Response", "Log Analysis", "Security Monitoring"],
      mitre: ["T1059", "T1078", "T1562"],
      github: "https://github.com/Abdullah-Shawadfi/Security_Operation_Centre_App.git"
    },
    {
      title: "Network Analysis - Ransomware (BTLO)",
      link: "https://medium.com/@abdullmst/network-analysis-ransomware-btlo-85b5d65c2ade",
      pubDate: "June 2026",
      thumbnail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663710495349/ThdPYYIuWeLWBJwB.jpg"
    }
  ];

  const certifications = [
    { name: "Cisco Advanced Network", status: "Certified" },
    { name: "Certified Blue Team Practitioner (SecOps)", status: "Certified" },
    { name: "TryHackMe SOC Level 1 Learning Path", status: "Certified" },
    { name: "eCIR (Certified Incident Responder)", status: "Self-Study" },
    { name: "MCSA (Microsoft Certified Solutions Associate)", status: "Self-Study" },
    { name: "SANS Institute SEC450 – Blue Team Fundamentals", status: "Self-Study" },
    { name: "SANS Institute SEC504H – Incident Response & Threat Hunting", status: "Self-Study"     }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-accent" />
            <span className="font-mono font-bold text-lg text-primary">ArkhamHunter</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
            <a href="#writeups" className="text-sm hover:text-primary transition-colors">Write-ups</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663710495349/ThdPYYIuWeLWBJwB.jpg"
            alt="Bat Signal"
            className="w-full h-full object-cover grayscale opacity-30"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40"></div>
        
        <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TypingText text="Every alert hides a story worth investigating" />
            
            <div className="inline-block mb-4 px-2 py-0.5 bg-secondary border border-primary rounded-full">
              <span className="text-xs font-mono text-primary">SOC Analyst | Cybersecurity Trainee</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
              <span className="text-primary">ArkhamHunter</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Cybersecurity student and aspiring SOC Analyst with hands-on experience in security monitoring, log analysis, threat hunting, and incident response. Passionate about Blue Team operations and continuously developing expertise in threat detection.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-mono transition-transform hover:scale-105 active:scale-95"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 transition-transform hover:scale-105 active:scale-95"
                onClick={() => window.open("https://github.com/Abdullah-Shawadfi", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/50 shadow-2xl flex items-center justify-center bg-black group">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663710495349/ThdPYYIuWeLWBJwB.jpg"
                alt="Batman Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-lg blur-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border relative">
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold mb-12 font-mono">
            <span className="text-primary">&gt; </span>About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: AlertCircle, title: "Threat Detection", desc: "Skilled in identifying and analyzing security threats through SIEM technologies and log analysis." },
              { icon: Target, title: "Incident Response", desc: "Experience in investigating security incidents and reconstructing attack timelines." },
              { icon: Code2, title: "Blue Team Ops", desc: "Focused on defensive security operations and continuous threat hunting capabilities." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-card border-border p-6 hover:border-primary/50 transition-colors h-full">
                  <item.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-mono font-bold mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 p-6 bg-secondary border border-border rounded-lg font-mono text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary mb-2">$ whoami</div>
            <div className="text-muted-foreground">
              <div>Name: Abdullah Mohammed Ahmed</div>
              <div>Location: Nasr City, Cairo, Egypt</div>
              <div>Education: Faculty of Computers and Artificial Intelligence, Benha University</div>
              <div>Expected Graduation: 2027</div>
              <div>Languages: English, Arabic</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-border relative">
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold mb-12 font-mono">
            <span className="text-primary">&gt; </span>Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="bg-card border-border p-6">
                <h3 className="font-mono font-bold mb-4 text-accent">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary/50 border-primary/30 text-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-border relative">
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold mb-12 font-mono">
            <span className="text-primary">&gt; </span>SOC Projects
          </h2>
          
          <div className="space-y-4">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Card 
                  className="bg-card border-border p-6 cursor-pointer hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-mono font-bold text-lg mb-2 text-primary">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techniques.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-accent/50 text-accent text-[10px]">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary/50 flex-shrink-0 ml-4" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Write-ups Section */}
      <section id="writeups" className="py-20 border-t border-border relative">
        <div className="container relative z-10">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-4xl font-bold font-mono">
              <span className="text-primary">&gt; </span>Medium Write-ups
            </h2>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 font-mono text-xs"
              onClick={() => window.open("https://medium.com/@abdullmst", "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writeUps.map((writeUp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all group cursor-pointer h-full flex flex-col"
                  onClick={() => window.open(writeUp.link, "_blank")}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={writeUp.thumbnail} 
                      alt={writeUp.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="text-xs font-mono text-accent mb-2">{writeUp.pubDate}</div>
                    <h3 className="font-mono font-bold text-sm line-clamp-2 group-hover:text-primary transition-colors mb-4">
                      {writeUp.title}
                    </h3>
                    <div className="mt-auto flex items-center text-xs text-primary font-mono">
                      Read More <ExternalLink className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 font-mono">
            <span className="text-primary">&gt; </span>Certifications & Training
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02 }}>
                <Card className="bg-card border-border p-4 flex items-center justify-between h-full">
                  <span className="font-mono text-xs">{cert.name}</span>
                  <Badge 
                    variant={cert.status === "Certified" ? "default" : "secondary"}
                    className={cert.status === "Certified" ? "bg-accent text-accent-foreground text-[10px]" : "text-[10px]"}
                  >
                    {cert.status}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-border relative">
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold mb-12 font-mono">
            <span className="text-primary">&gt; </span>Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Email", value: "abdullmst@gmail.com", link: "mailto:abdullmst@gmail.com" },
              { icon: Linkedin, title: "LinkedIn", value: "Connect on LinkedIn", link: "https://linkedin.com/in/abdullah-mohammed-124993285" },
              { icon: Github, title: "GitHub", value: "Follow on GitHub", link: "https://github.com/Abdullah-Shawadfi" }
            ].map((contact, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, y: -5 }} 
                transition={{ type: "spring", stiffness: 400 }}
                onClick={() => window.open(contact.link, "_blank")}
                className="cursor-pointer"
              >
                <Card className="bg-card border-border p-8 text-center hover:border-primary/50 transition-colors h-full group">
                  <contact.icon className="w-8 h-8 text-accent mx-auto mb-4 group-hover:text-primary transition-colors" />
                  <h3 className="font-mono font-bold mb-2">{contact.title}</h3>
                  <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 relative">
        <div className="container text-center text-sm text-muted-foreground font-mono relative z-10">
          <p>&copy; 2026 ArkhamHunter. All Rights Reserved.</p>
          <p className="mt-2">Crafted with <span className="text-accent">█</span> for cybersecurity excellence</p>
        </div>
      </footer>
    </div>
  );
}
