const fs = require('fs');

const data = JSON.parse(fs.readFileSync('new_routine.json', 'utf8'));
const times = ["09:00 AM", "10:05 AM", "11:10 AM", "12:15 PM", "01:50 PM", "02:55 PM", "04:00 PM"];

for (const section in data) {
  for (const day in data[section]) {
    const classes = data[section][day];
    const merged = [];
    
    let i = 0;
    while (i < classes.length) {
      const current = classes[i];
      // check if it's a lab and the next class is the same lab
      if (current.sub.includes("Lab") || true) { // actually, anything that is identical in adjacent slots can be merged
        let j = i + 1;
        let isMerged = false;
        while (j < classes.length) {
          const next = classes[j];
          if (next.sub === current.sub && next.room === current.room) {
            // they are the same class
            // let's check if they are adjacent slots
            const currentSlotIdx = times.indexOf(classes[j-1].time.split(' - ')[0]);
            const nextSlotIdx = times.indexOf(next.time);
            if (nextSlotIdx === currentSlotIdx + 1) {
              j++;
              isMerged = true;
            } else {
              break;
            }
          } else {
            break;
          }
        }
        
        if (isMerged) {
          // merge from i to j-1
          const startTime = current.time;
          const endTime = times[times.indexOf(classes[j-1].time) + 1];
          let subText = current.sub;
          if (!subText.includes("Lab")) {
             subText += " (Lab)"; // Assume if it takes 2+ slots it's a lab? The CSV has (Lab) in the text? Wait, in my parser I stripped it if it wasn't in the sub text. I'll just check if it's multiple slots.
             // Actually, in the CSV, it usually just says CSE 2104. I'll append (Lab) if it spans multiple slots just to look nice like before.
          }
          if (!subText.includes("(Lab)")) subText += " (Lab)";
          
          merged.push({
            time: `${startTime} - ${endTime}`,
            sub: subText,
            room: current.room,
            teacher: current.teacher
          });
          i = j;
          continue;
        }
      }
      merged.push(current);
      i++;
    }
    data[section][day] = merged;
  }
}

// Now replace data.ts with the new routineData
const fileContent = fs.readFileSync('src/data.ts', 'utf8');
const prefixMatch = 'export const routineData: Record<string, SectionSchedule> = ';
const prefixIndex = fileContent.indexOf(prefixMatch);
const beforeRoutineData = fileContent.substring(0, prefixIndex + prefixMatch.length);

const fullContent = beforeRoutineData + JSON.stringify(data, null, 2).replace(/"([^"]+)":/g, '$1:') + ';\n';
fs.writeFileSync('src/data.ts', fullContent, 'utf8');
console.log("Merged and written to src/data.ts");
