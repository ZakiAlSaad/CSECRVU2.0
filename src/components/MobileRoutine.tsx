import React, { useState } from 'react';
import { routineData, getTeacherPhone } from '../data';
import { Clock, MapPin, User, Phone } from 'lucide-react';

const MobileTeacherCell = ({ teacher }: { teacher: string }) => {
  const [showPhone, setShowPhone] = useState(false);
  return (
    <div className="flex flex-col pt-3 mt-3 border-t border-current/20">
      <div 
        onClick={() => setShowPhone(!showPhone)}
        className="flex items-center gap-2 text-xs font-mono opacity-60 tracking-wider uppercase cursor-pointer hover:opacity-100 hover:text-cyan-300 transition-colors"
        title="Click to view contact info"
      >
        <User className="w-3.5 h-3.5" />
        <span>{teacher}</span>
      </div>
      {showPhone && (
        <div className="flex items-center gap-2 mt-2 text-xs font-mono text-cyan-300 bg-black/40 p-2 border border-cyan-500/30 rounded shadow-[0_0_10px_rgba(6,182,212,0.1)]">
          <Phone className="w-3.5 h-3.5" />
          <span>{getTeacherPhone(teacher)}</span>
        </div>
      )}
    </div>
  );
};

interface MobileRoutineProps {
  section: string;
  currentDayName: string;
  showTeachers: boolean;
  onDaySelect: (day: string) => void;
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

export default function MobileRoutine({ section, currentDayName, showTeachers, onDaySelect }: MobileRoutineProps) {
  const sectionData = routineData[section];
  const classes = sectionData[currentDayName] || [];

  const getColorClass = (sub: string) => {
    if (sub.includes("Lab")) return "border-green-500/50 bg-green-950/30 text-green-400 shadow-[inset_0_0_15px_rgba(34,197,94,0.15)]";
    if (sub.includes("CSE")) return "border-cyan-500/50 bg-cyan-950/30 text-cyan-400 shadow-[inset_0_0_15px_rgba(6,182,212,0.15)]";
    if (sub.includes("EEE")) return "border-fuchsia-500/50 bg-fuchsia-950/30 text-fuchsia-400 shadow-[inset_0_0_15px_rgba(217,70,239,0.15)]";
    if (sub.includes("MAT")) return "border-yellow-500/50 bg-yellow-950/30 text-yellow-400 shadow-[inset_0_0_15px_rgba(234,179,8,0.15)]";
    if (sub.includes("BAN")) return "border-orange-500/50 bg-orange-950/30 text-orange-400 shadow-[inset_0_0_15px_rgba(249,115,22,0.15)]";
    return "border-slate-500/50 bg-slate-900/50 text-slate-300";
  };

  return (
    <div className="flex flex-col space-y-4">
      {classes.length === 0 ? (
        <div className="text-center py-12 bg-black/40 backdrop-blur-md rounded-none border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.05)]">
          <p className="text-cyan-500/60 font-mono text-sm tracking-widest uppercase">NO_DATA_FOUND</p>
        </div>
      ) : (
        <div className="space-y-4">
          {classes.map((c, idx) => (
            <div 
              key={idx} 
              className={`p-5 border relative overflow-hidden group ${getColorClass(c.sub)}`}
            >
              {/* Tech corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50"></div>
              
              {/* Hover scanline */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-current to-transparent opacity-0 group-hover:opacity-[0.05] translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-linear pointer-events-none" />

              <div className="flex items-center gap-2 text-xs font-mono opacity-70 mb-3 tracking-widest uppercase">
                <Clock className="w-3.5 h-3.5" />
                <span>{c.time}</span>
              </div>
              <div className="text-xl font-bold font-mono tracking-wide neon-text mb-3">
                {c.sub}
              </div>
              <div className="flex items-center gap-2 text-xs font-mono opacity-80 mb-3 tracking-wider uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>ROOM_{c.room}</span>
              </div>
              {showTeachers && (
                <MobileTeacherCell teacher={c.teacher} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
