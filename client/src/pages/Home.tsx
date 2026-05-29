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

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [writeUps, setWriteUps] = useState<WriteUp[]>([]);
  const [loadingWriteUps, setLoadingWriteUps] = useState(true);

  useEffect(() => {
    async function fetchWriteUps() {
      try {
        const response = await fetch("/api/medium-feed");
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        const items = xmlDoc.querySelectorAll("item");
        
        const fetchedWriteUps: WriteUp[] = Array.from(items).slice(0, 3).map(item => {
          const content = item.querySelector("content\\:encoded")?.textContent || "";
          const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
          return {
            title: item.querySelector("title")?.textContent || "",
            link: item.querySelector("link")?.textContent || "",
            pubDate: new Date(item.querySelector("pubDate")?.textContent || "").toLocaleDateString(),
            thumbnail: imgMatch ? imgMatch[1] : "https://miro.medium.com/v2/resize:fill:320:214/1*xuP0Ch12kQPEOvldLHIV8A.jpeg"
          };
        });
        
        setWriteUps(fetchedWriteUps);
      } catch (error) {
        console.error("Error fetching write-ups:", error);
      } finally {
        setLoadingWriteUps(false);
      }
    }

    fetchWriteUps();
  }, []);

  const skills = {
    "Security & SOC Tools": [
      "IBM QRadar",
      "Splunk",
      "Wireshark",
      "MISP",
    ],
    "Operating Systems": [
      "Windows Server 2019",
      "Active Directory",
      "Linux",
      "PowerShell",
    ],
    "Networking & Security": [
      "TCP/IP",
      "Network Analysis",
      "Incident Response",
      "Threat Intelligence",
    ],
    "Programming": [
      "Python",
      "PowerShell",
      "Bash",
    ],
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
  ];

  const certifications = [
    { name: "Cisco Advanced Network", status: "Certified" },
    { name: "Certified Blue Team Practitioner (SecOps)", status: "Certified" },
    { name: "TryHackMe SOC Level 1 Learning Path", status: "Certified" },
    { name: "eCIR (Certified Incident Responder)", status: "Self-Study" },
    { name: "MCSA (Microsoft Certified Solutions Associate)", status: "Self-Study" },
    { name: "SANS Institute SEC450 â€“ Blue Team Fundamentals", status: "Self-Study" },
    { name: "SANS Institute SEC504H â€“ Incident Response & Threat Hunting", status: "Self-Study" },
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

      {/* Hero Section with Bat Signal Background */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Bat Signal Background */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://miro.medium.com/v2/resize:fill:1200:600/1*xuP0Ch12kQPEOvldLHIV8A.jpeg"
            alt="Bat Signal"
            className="w-full h-full object-cover grayscale opacity-30"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40"></div>
        
        <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-2 py-0.5 bg-secondary border border-primary rounded-full">
              <span className="text-xs font-mono text-primary">SOC Analyst | Cybersecurity Trainee</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-mono">
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
                src="https://miro.medium.com/v2/resize:fill:400:400/1*xuP0Ch12kQPEOvldLHIV8A.jpeg"
                alt="Batman Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-lg blur-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Bat Signal Accent */}
      <section id="about" className="py-20 border-t border-border relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <img 
            src="/manus-storage/batsign_d8062f79.jpg"
            alt=""
            className="w-96 h-96 object-cover"
          />
        </div>
        
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
        <div className="absolute left-0 top-0 opacity-5 pointer-events-none">
          <img 
            src="/manus-storage/batsign_d8062f79.jpg"
            alt=""
            className="w-80 h-80 object-cover"
          />
        </div>
        
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

      {/* Projects Section with Bat Signal Watermark */}
      <section id="projects" className="py-20 border-t border-border relative">
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
          <img 
            src="/manus-storage/batsign_d8062f79.jpg"
            alt=""
            className="w-96 h-96 object-cover"
          />
        </div>
        
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
                  onClick={() => project.github ? window.open(project.github, "_blank") : setExpandedProject(expandedProject === idx ? null : idx)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-mono font-bold text-lg mb-2 text-primary">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      
                      <AnimatePresence>
                        {expandedProject === idx && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-border space-y-3">
                              <div>
                                <h4 className="text-xs font-mono text-accent mb-2">TECHNIQUES USED</h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.techniques.map((tech) => (
                                    <Badge key={tech} variant="outline" className="border-accent/50 text-accent">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-xs font-mono text-accent mb-2">MITRE ATT&CK MAPPING</h4>
                                <div className="flex flex-wrap gap-2">
                                  {project.mitre.map((technique) => (
                                    <Badge key={technique} className="bg-accent/20 border-accent/50 text-accent">
                                      {technique}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <img 
            src="/manus-storage/batsign_d8062f79.jpg"
            alt=""
            className="w-80 h-80 object-cover"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <p className="text-accent font-mono italic text-lg">
                "Every alert hides a story worth investigating"
              </p>
            </motion.div>
            <div className="flex items-center justify-between">
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
            {loadingWriteUps ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="bg-card border-border overflow-hidden animate-pulse">
                  <div className="aspect-video bg-muted"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                </Card>
              ))
            ) : (
              writeUps.map((writeUp, idx) => (
                <Card 
                  key={idx} 
                  className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all group cursor-pointer"
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
                  <div className="p-4">
                    <div className="text-xs font-mono text-accent mb-2">{writeUp.pubDate}</div>
                    <h3 className="font-mono font-bold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                      {writeUp.title}
                    </h3>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 font-mono">
            <span className="text-primary">&gt; </span>Certifications & Training
          </h2>
          
          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="bg-card border-border p-4 flex items-center justify-between">
                <span className="font-mono text-sm">{cert.name}</span>
                <Badge 
                  variant={cert.status === "Certified" ? "default" : "secondary"}
                  className={cert.status === "Certified" ? "bg-accent text-accent-foreground" : ""}
                >
                  {cert.status}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 border-t border-border relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <img 
            src="/manus-storage/batsign_d8062f79.jpg"
            alt=""
            className="w-80 h-80 object-cover"
          />
        </div>
        
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold mb-12 font-mono">
            <span className="text-primary">&gt; </span>Hands-On Experience
          </h2>
          
          <div className="space-y-6">
            {[
              { name: "TryHackMe", description: "SOC Level 1 path with hands-on experience in SIEM investigations, log analysis, threat hunting, and incident response" },
              { name: "CyberDefenders", description: "Multiple DFIR and Blue Team labs involving malware analysis, PCAP analysis, IOC extraction, and attack investigations" },
              { name: "LetsDefend", description: "SOC alert triage and investigation of simulated incidents in Windows environments" },
              { name: "CyberHaze", description: "Practical blue team labs simulating real-world cyber attacks, email investigation, network forensics, and threat intelligence extraction" },
              { name: "Hack The Box", description: "Hands-on cybersecurity labs focused on networking, system analysis, and security concepts" },
            ].map((exp, idx) => (
              <Card key={idx} className="bg-card border-border p-6">
                <h3 className="font-mono font-bold text-accent mb-2">{exp.name}</h3>
                <p className="text-muted-foreground text-sm">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Bat Signal Background */}
      <section id="contact" className="py-20 border-t border-border relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/manus-storage/batsign_d8062f79.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold mb-12 font-mono">
            <span className="text-primary">&gt; </span>Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <Card className="bg-card border-border p-8 text-center hover:border-primary/50 transition-colors h-full">
                <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-mono font-bold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground break-all">abdullmst@gmail.com</p>
              </Card>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <Card className="bg-card border-border p-8 text-center hover:border-primary/50 transition-colors h-full">
                <Linkedin className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-mono font-bold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">linkedin.com/in/abdullah-mohammed-124993285</p>
              </Card>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <Card className="bg-card border-border p-8 text-center hover:border-primary/50 transition-colors h-full">
                <Github className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-mono font-bold mb-2">GitHub</h3>
                <p className="text-sm text-muted-foreground">github.com/Abdullah-Shawadfi</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img 
            src="/manus-storage/batsign_d8062f79.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container text-center text-sm text-muted-foreground font-mono relative z-10">
          <p>&copy; 2026 ArkhamHunter. All Rights Reserved.</p>
          <p className="mt-2">Crafted with <span className="text-accent">â–ˆ</span> for cybersecurity excellence</p>
        </div>
      </footer>
    </div>
  );
}
