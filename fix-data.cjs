const fs = require('fs');
let dataTs = fs.readFileSync('src/data.ts', 'utf8');

const getTeacherFn = `
export const getTeacherPhone = (teacherName: string): string => {
  // Try exact match
  if (teacherPhones[teacherName]) return teacherPhones[teacherName];
  
  // Try exact match after trimming
  const trimmed = teacherName.trim();
  if (teacherPhones[trimmed]) return teacherPhones[trimmed];

  // If there are multiple teachers (comma separated)
  if (trimmed.includes(',')) {
    const teachers = trimmed.split(',').map(t => t.trim());
    return teachers.map(t => teacherPhones[t] || "N/A").join(', ');
  }

  // Handle minor naming differences
  const keys = Object.keys(teacherPhones);
  const found = keys.find(k => k.toLowerCase() === trimmed.toLowerCase());
  if (found) return teacherPhones[found];
  
  return "N/A";
};

export const routineData: Record<string, SectionSchedule> = {
`;

dataTs = dataTs.replace('export const routineData: Record<string, SectionSchedule> = {', getTeacherFn.trim() + '\n');
fs.writeFileSync('src/data.ts', dataTs, 'utf8');
