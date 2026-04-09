import React, { useEffect, useState } from 'react';
import { ArrowLeft, User, ExternalLink, Terminal, Code2, Cpu, Globe, Activity } from 'lucide-react';
import { motion } from 'motion/react';

const StatBox = ({ icon, label, value, delay }: { icon: React.ReactNode, label: string, value: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center gap-3 bg-black/40 border border-cyan-500/20 p-3 relative group overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    <div className="text-cyan-400/80 group-hover:text-cyan-300 transition-colors">{icon}</div>
    <div>
      <div className="text-[10px] text-cyan-500/60 font-mono tracking-widest">{label}</div>
      <div className="text-xs text-cyan-300 font-mono font-bold tracking-wider">{value}</div>
    </div>
  </motion.div>
);

export default function AboutDeveloper({ onBack }: { onBack: () => void }) {
  const [text, setText] = useState('');
  const fullText = "Initiating developer profile sequence...\nLoading core modules...\nAccess granted.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans p-4 md:p-8 text-slate-200 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d41a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d41a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-4xl relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-cyan-500 hover:text-cyan-300 mb-8 font-mono text-sm transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          [ RETURN_TO_SYSTEM ]
        </motion.button>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          {/* Holographic framing */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/30 via-transparent to-blue-500/30 opacity-50 blur-sm" />
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

          <div className="bg-black/60 border border-cyan-500/20 p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
            {/* Scanning line */}
            <motion.div
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-20 pointer-events-none"
            />

            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start relative z-10">
              {/* Animated Avatar Core */}
              <div className="relative w-48 h-48 shrink-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-cyan-500/40 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-t-2 border-l-2 border-blue-500/60 rounded-full"
                />
                <motion.div
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-8 bg-cyan-950/80 rounded-full border border-cyan-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] backdrop-blur-md"
                >
                  <User className="w-16 h-16 text-cyan-300" />
                </motion.div>
                {/* Floating data bits around avatar */}
                <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-2 right-4 bg-cyan-500/20 text-cyan-300 text-[8px] font-mono px-1 border border-cyan-500/40">LVL_99</motion.div>
                <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute bottom-4 left-2 bg-blue-500/20 text-blue-300 text-[8px] font-mono px-1 border border-blue-500/40">SYS_OK</motion.div>
              </div>

              <div className="flex-1 text-center md:text-left w-full">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 uppercase mb-2 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                    Zaki Al Saad
                  </h1>
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <p className="text-cyan-400/80 font-mono text-sm tracking-[0.2em] uppercase">
                      Lead Developer // UI/UX Engineer
                    </p>
                  </div>
                </motion.div>

                <div className="bg-cyan-950/20 border-l-2 border-cyan-500 p-4 mb-8 h-24 text-left font-mono text-sm text-cyan-300/80">
                  <span className="text-cyan-500 mr-2">{'>'}</span>
                  <span className="whitespace-pre-line">{text}</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-cyan-400 ml-1 align-middle"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-4 text-slate-300 text-sm leading-relaxed mb-8 font-sans"
                >
                  <p>
                    Passionate software engineer specializing in building futuristic, high-performance web applications. Creator of the CSECRVU system, designed to optimize academic scheduling through advanced interface paradigms.
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  <StatBox icon={<Code2 className="w-4 h-4"/>} label="ROLE" value="FULL_STACK" delay={0.4} />
                  <StatBox icon={<Cpu className="w-4 h-4"/>} label="SYSTEM" value="OPTIMAL" delay={0.5} />
                  <StatBox icon={<Activity className="w-4 h-4"/>} label="STATUS" value="ONLINE" delay={0.6} />
                  <StatBox icon={<Globe className="w-4 h-4"/>} label="LOCATION" value="EARTH" delay={0.7} />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap gap-4 justify-center md:justify-start"
                >
                  <a
                    href="https://zakialsaad.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex items-center gap-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 px-8 py-4 rounded-none font-mono text-sm transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <Terminal className="w-4 h-4" />
                    <span className="tracking-widest font-bold">ACCESS_PORTFOLIO</span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
