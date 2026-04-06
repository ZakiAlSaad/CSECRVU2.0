/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import RoutineTable from './components/RoutineTable';
import MobileRoutine from './components/MobileRoutine';

export default function App() {
  const [section, setSection] = useState('A');
  const [date, setDate] = useState(new Date());
  const [showTeachers, setShowTeachers] = useState(false);

  const dayOfWeek = date.getDay(); // 0 is Sunday, 4 is Thursday, 5 is Friday, 6 is Saturday
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayName = days[dayOfWeek];
  const isHoliday = dayOfWeek === 5 || dayOfWeek === 6;

  const handleDaySelect = (dayName: string) => {
    const targetDayIndex = days.indexOf(dayName);
    const newDate = new Date(date);
    const currentDayIndex = newDate.getDay();
    const diff = targetDayIndex - currentDayIndex;
    newDate.setDate(newDate.getDate() + diff);
    setDate(newDate);
  };

  return (
    <div className="min-h-screen font-sans p-4 md:p-8 text-slate-200 relative overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-100">
      {/* Background glowing orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-900/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto glass-panel rounded-xl overflow-hidden relative z-10">
        <Header 
          section={section} 
          setSection={setSection} 
          showTeachers={showTeachers} 
          setShowTeachers={setShowTeachers} 
          date={date} 
          setDate={setDate} 
        />
        
        <div className="p-4 md:p-8">
          {isHoliday ? (
            <div className="text-center py-24 glass-panel rounded-lg border border-cyan-500/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4 neon-text font-mono tracking-widest">SYSTEM OFFLINE</h2>
              <p className="text-cyan-200/70 font-mono tracking-wider">STATUS: HOLIDAY_MODE_ENGAGED</p>
              <p className="text-cyan-200/40 font-mono text-sm mt-3">No academic operations scheduled for today.</p>
            </div>
          ) : (
            <>
              <div className="hidden md:block">
                <RoutineTable section={section} currentDayName={currentDayName} showTeachers={showTeachers} onDaySelect={handleDaySelect} />
              </div>
              <div className="block md:hidden">
                <MobileRoutine section={section} currentDayName={currentDayName} showTeachers={showTeachers} onDaySelect={handleDaySelect} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
