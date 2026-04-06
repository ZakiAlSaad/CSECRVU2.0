import React, { useState } from 'react';
import { routineData, getTeacherPhone } from '../data';
import { Phone } from 'lucide-react';

const TIME_SLOTS = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:30 PM", "02:30 PM"];
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

function getSlotIndex(timeStr: string) {
    if(timeStr.includes("09:00")) return 0;
    if(timeStr.includes("10:00")) return 1;
    if(timeStr.includes("11:00")) return 2;
    if(timeStr.includes("12:00")) return 3;
    if(timeStr.includes("01:30")) return 4;
    if(timeStr.includes("02:30")) return 5;
    return -1;
}

function getRowSpan(timeStr: string) {
    if (!timeStr.includes("-")) return 1;
    if (timeStr.includes("09:00") && timeStr.includes("11:00")) return 2;
    if (timeStr.includes("10:00") && timeStr.includes("12:00")) return 2;
    if (timeStr.includes("11:00") && timeStr.includes("01:30")) return 2;
    if (timeStr.includes("12:00") && timeStr.includes("02:30")) return 2;
    if (timeStr.includes("01:30") && timeStr.includes("03:30")) return 2;
    return 1;
}

const TeacherCell = ({ teacher }: { teacher: string }) => {
  const [showPhone, setShowPhone] = useState(false);
  return (
    <div className="mt-1 pt-1 border-t border-current/20 w-full text-center flex flex-col items-center">
      <span 
        onClick={(e) => { e.stopPropagation(); setShowPhone(!showPhone); }}
        className="text-[10px] font-mono opacity-80 cursor-pointer hover:text-cyan-300 hover:opacity-100 transition-colors"
        title="Click to view contact info"
      >
        {teacher}
      </span>
      {showPhone && (
        <div className="flex items-center gap-1 mt-1.5 text-[9px] text-cyan-300 bg-black/60 px-1.5 py-0.5 border border-cyan-500/40 rounded-sm shadow-[0_0_10px_rgba(6,182,212,0.2)]">
          <Phone className="w-2.5 h-2.5" />
          <span>{getTeacherPhone(teacher)}</span>
        </div>
      )}
    </div>
  );
};

interface RoutineTableProps {
  section: string;
  currentDayName: string;
  showTeachers: boolean;
  onDaySelect: (day: string) => void;
}

export default function RoutineTable({ section, currentDayName, showTeachers, onDaySelect }: RoutineTableProps) {
  const sectionData = routineData[section];

  const getColorClass = (sub: string) => {
    if (sub.includes("Lab")) return "border-green-500/50 bg-green-950/30 text-green-400 shadow-[inset_0_0_15px_rgba(34,197,94,0.15)]";
    if (sub.includes("CSE")) return "border-cyan-500/50 bg-cyan-950/30 text-cyan-400 shadow-[inset_0_0_15px_rgba(6,182,212,0.15)]";
    if (sub.includes("EEE")) return "border-fuchsia-500/50 bg-fuchsia-950/30 text-fuchsia-400 shadow-[inset_0_0_15px_rgba(217,70,239,0.15)]";
    if (sub.includes("MAT")) return "border-yellow-500/50 bg-yellow-950/30 text-yellow-400 shadow-[inset_0_0_15px_rgba(234,179,8,0.15)]";
    if (sub.includes("BAN")) return "border-orange-500/50 bg-orange-950/30 text-orange-400 shadow-[inset_0_0_15px_rgba(249,115,22,0.15)]";
    return "border-slate-500/50 bg-slate-900/50 text-slate-300";
  };

  return (
    <div className="overflow-x-auto rounded-none border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.05)] bg-black/40 backdrop-blur-md">
      <table className="w-full border-collapse min-w-[900px]">
        <thead>
          <tr>
            <th className="bg-cyan-950/50 text-cyan-400 p-4 border border-cyan-500/20 w-32 font-mono text-xs tracking-widest uppercase">
              Time \ Day
            </th>
            {DAYS.map(day => (
              <th 
                key={day} 
                onClick={() => onDaySelect(day)}
                className={`p-4 border border-cyan-500/20 font-mono text-xs tracking-widest uppercase transition-all cursor-pointer hover:bg-cyan-900/60 hover:text-cyan-300 ${
                  day === currentDayName 
                    ? 'bg-cyan-900/40 text-cyan-300 border-b-2 border-b-cyan-400 shadow-[inset_0_-2px_15px_rgba(6,182,212,0.2)]' 
                    : 'bg-black/40 text-cyan-600/70'
                }`}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TIME_SLOTS.map((time, slotIndex) => (
            <tr key={time} className="group/row">
              <td className="p-3 border border-cyan-500/10 bg-black/30 font-mono text-center whitespace-nowrap text-xs text-cyan-500/60 group-hover/row:text-cyan-400 transition-colors">
                {time}
              </td>
              {DAYS.map(day => {
                const classes = sectionData[day] || [];
                
                // Find class starting at this slot
                const classInfo = classes.find(c => getSlotIndex(c.time) === slotIndex);
                
                // Check if this slot is covered by a previous merged class
                let isCovered = false;
                if (!classInfo) {
                  const coveringClass = classes.find(c => {
                    if (!c.time.includes("-")) return false;
                    const startIdx = getSlotIndex(c.time);
                    const span = getRowSpan(c.time);
                    return slotIndex > startIdx && slotIndex < (startIdx + span);
                  });
                  if (coveringClass) isCovered = true;
                }

                if (isCovered) return null;

                const isCurrentDay = day === currentDayName;
                const cellClasses = `p-3 border border-cyan-500/10 text-center transition-all ${
                  isCurrentDay ? 'bg-cyan-950/10' : ''
                }`;

                if (classInfo) {
                  const span = getRowSpan(classInfo.time);
                  return (
                    <td 
                      key={`${day}-${time}`} 
                      rowSpan={span} 
                      className={`${cellClasses} ${isCurrentDay ? 'ring-1 ring-inset ring-cyan-500/30' : ''}`}
                    >
                      <div className={`h-full w-full p-3 flex flex-col items-center justify-center gap-1.5 border relative overflow-hidden group/cell ${getColorClass(classInfo.sub)}`}>
                        {/* Tech corner accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50"></div>
                        
                        {/* Hover scanline */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-current to-transparent opacity-0 group-hover/cell:opacity-[0.05] translate-y-[-100%] group-hover/cell:translate-y-[100%] transition-transform duration-1000 ease-linear pointer-events-none" />

                        <span className="font-bold font-mono text-sm tracking-wide neon-text">{classInfo.sub}</span>
                        <span className="text-[10px] font-mono opacity-70 tracking-wider uppercase">ROOM_{classInfo.room}</span>
                        {showTeachers && (
                          <TeacherCell teacher={classInfo.teacher} />
                        )}
                      </div>
                    </td>
                  );
                }

                return (
                  <td key={`${day}-${time}`} className={cellClasses}>
                    <span className="text-cyan-900/30 font-mono text-xs">--</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
