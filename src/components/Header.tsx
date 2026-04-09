import React from 'react';
import { Users, Calendar, Terminal, User } from 'lucide-react';

interface HeaderProps {
  section: string;
  setSection: (section: string) => void;
  showTeachers: boolean;
  setShowTeachers: (show: boolean) => void;
  date: Date;
  setDate: (date: Date) => void;
  onAboutClick: () => void;
}

export default function Header({
  section,
  setSection,
  showTeachers,
  setShowTeachers,
  date,
  setDate,
  onAboutClick
}: HeaderProps) {
  const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [year, month, day] = e.target.value.split('-');
    if (year && month && day) {
      setDate(new Date(Number(year), Number(month) - 1, Number(day)));
    }
  };

  return (
    <div className="border-b border-cyan-500/20 bg-black/40 p-6 md:p-8 relative overflow-hidden">
      {/* Top scanning line effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-cyan-950/50 border border-cyan-500/30 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center justify-center overflow-hidden w-14 h-14">
            <img src="/logo.png" alt="CSECRVU Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase">
              CSECRVU
            </h1>
            <p className="text-cyan-500/60 font-mono text-xs tracking-[0.2em] uppercase mt-1">
              Varendra_University // CSE_DEPT // Batch 37 // 2nd Semester
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
          <button
            onClick={onAboutClick}
            className="flex items-center justify-center gap-2 bg-cyan-950/30 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-500/30 px-5 py-2.5 rounded-none font-mono text-sm transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:border-cyan-400"
          >
            <User className="w-4 h-4" />
            ABOUT_DEVELOPER
          </button>

          <button
            onClick={() => setShowTeachers(!showTeachers)}
            className="flex items-center justify-center gap-2 bg-cyan-950/30 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-500/30 px-5 py-2.5 rounded-none font-mono text-sm transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:border-cyan-400"
          >
            <Users className="w-4 h-4" />
            {showTeachers ? 'HIDE_INSTRUCTORS' : 'SHOW_INSTRUCTORS'}
          </button>

          <div className="relative group">
            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="appearance-none bg-black/50 text-cyan-300 px-5 py-2.5 pr-12 rounded-none font-mono text-sm border border-cyan-500/30 outline-none focus:border-cyan-400 cursor-pointer w-full transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:border-cyan-400"
            >
              {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((sec) => (
                <option key={sec} value={sec} className="bg-slate-900 text-cyan-300">
                  SEC_{sec}
                </option>
              ))}
            </select>
            <Terminal className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-cyan-500/50 pointer-events-none group-hover:text-cyan-400 transition-colors" />
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-start">
        <div className="relative group w-full md:w-auto">
          <input
            type="date"
            value={dateString}
            onChange={handleDateChange}
            className="w-full md:w-auto bg-black/50 text-cyan-300 px-5 py-2.5 pl-12 rounded-none font-mono text-sm border border-cyan-500/30 outline-none focus:border-cyan-400 cursor-pointer shadow-inner transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:border-cyan-400"
          />
          <Calendar className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500/50 pointer-events-none group-hover:text-cyan-400 transition-colors" />
        </div>
      </div>
    </div>
  );
}
