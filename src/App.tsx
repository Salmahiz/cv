import React from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Layers, 
  Terminal, 
  GraduationCap, 
  Briefcase, 
  Languages, 
  Heart,
  ChevronRight
} from "lucide-react";
import { CV_DATA } from "./data";

const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
      <Icon className="w-5 h-5 text-accent" />
    </div>
    <h2 className="text-2xl font-semibold tracking-tight uppercase text-white/90">{title}</h2>
    <div className="flex-1 h-px bg-white/5 ml-4" />
  </div>
);

const Card = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) => (
  <div className={`glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 ${className}`} {...props}>
    {children}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-accent">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 lg:py-24">
        {/* Hero Section */}
        <header className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              AVAILABLE FOR INTERNSHIPS
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tighter">
              {CV_DATA.name}
            </h1>
            <p className="text-xl lg:text-2xl text-zinc-400 max-w-2xl mb-8 leading-relaxed">
              {CV_DATA.title} <span className="text-white/20">—</span> <span className="text-zinc-500">{CV_DATA.subtitle}</span>
            </p>

            <div className="flex flex-wrap gap-6 text-sm font-mono text-zinc-500">
              <a href={`mailto:${CV_DATA.contact.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" /> {CV_DATA.contact.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {CV_DATA.contact.location}
              </div>
              <a href={CV_DATA.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> {CV_DATA.contact.phone}
              </div>
            </div>
          </motion.div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: About & Experience */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* About */}
            <section>
              <SectionHeader title="About" icon={Terminal} />
              <p className="text-lg text-zinc-400 leading-relaxed font-light">
                {CV_DATA.about}
              </p>
            </section>

            {/* Experience */}
            <section>
              <SectionHeader title="Experience" icon={Briefcase} />
              <div className="space-y-12">
                {CV_DATA.experience.map((exp, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-8 border-l border-white/10"
                  >
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,65,0.5)]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl font-medium text-white">{exp.title}</h3>
                      <span className="text-xs font-mono text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/10">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-accent text-sm mb-4 font-mono">{exp.company} • {exp.location}</div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-zinc-400 text-sm flex gap-2">
                          <ChevronRight className="w-4 h-4 text-accent/50 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionHeader title="Education" icon={GraduationCap} />
              <div className="space-y-12">
                {CV_DATA.education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-8 border-l border-white/10"
                  >
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl font-medium text-white">{edu.degree}</h3>
                      <span className="text-xs font-mono text-zinc-500">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-blue-400 text-sm mb-4 font-mono">{edu.school} • {edu.location}</div>
                    {edu.projects && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {edu.projects.map((project, i) => (
                          <Card key={i} className="p-4">
                            <div className="flex items-start justify-between gap-2">
                              <span className="text-sm text-zinc-300 leading-snug">{project}</span>
                              <ExternalLink className="w-4 h-4 text-zinc-600 shrink-0" />
                            </div>
                          </Card>
                        ))}
                      </div>
                    )}
                    {edu.description && (
                      <div className="flex gap-2 mt-4">
                        {edu.description.map((desc, i) => (
                          <span key={i} className="text-xs bg-white/5 text-zinc-500 px-2 py-1 rounded border border-white/10">
                            {desc}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Skills & Others */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Skills */}
            <section>
              <SectionHeader title="Skills" icon={Cpu} />
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Layers className="w-3 h-3" /> Graphics & Rendering
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {CV_DATA.skills.graphics.map((skill, i) => (
                      <span key={i} className="text-xs bg-accent/5 text-accent/80 border border-accent/20 px-3 py-1.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Code2 className="w-3 h-3" /> Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {CV_DATA.skills.languages.map((lang, i) => (
                      <span key={i} className="text-xs bg-white/5 text-zinc-300 border border-white/10 px-3 py-1.5 rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Terminal className="w-3 h-3" /> Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {CV_DATA.skills.tools.map((tool, i) => (
                      <span key={i} className="text-xs bg-white/5 text-zinc-400 border border-white/10 px-3 py-1.5 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <SectionHeader title="Languages" icon={Languages} />
              <div className="space-y-4">
                {CV_DATA.languages.map((lang, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-zinc-300">{lang.name}</span>
                    <span className="text-xs font-mono text-zinc-500">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Interests */}
            <section>
              <SectionHeader title="Interests" icon={Heart} />
              <div className="space-y-3">
                {CV_DATA.interests.map((interest, i) => (
                  <div key={i} className="text-sm text-zinc-400 flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    {interest}
                  </div>
                ))}
              </div>
            </section>

            {/* Footer / Contact CTA */}
            <Card className="mt-12 bg-accent/5 border-accent/20">
              <h3 className="text-lg font-medium mb-4">Let's connect</h3>
              <p className="text-sm text-zinc-400 mb-6">
                I'm always looking for new challenges in graphics programming and low-level development.
              </p>
              <a 
                href={`mailto:${CV_DATA.contact.email}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent text-bg font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" /> Send Email
              </a>
            </Card>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-white/5 text-center">
          <p className="text-xs font-mono text-zinc-600">
            &copy; {new Date().getFullYear()} {CV_DATA.name} • Built with React & Tailwind
          </p>
        </footer>
      </div>
    </div>
  );
}
