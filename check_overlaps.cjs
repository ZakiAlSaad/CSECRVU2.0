const data = require('./new_routine.json');
const times = ["09:00 AM", "10:05 AM", "11:10 AM", "12:15 PM", "01:50 PM", "02:55 PM", "04:00 PM"];

for (const section in data) {
  for (const day in data[section]) {
    const classes = data[section][day];
    const occupied = new Set();
    for (const c of classes) {
      const isLab = c.time.includes('-');
      const startSlot = times.indexOf(isLab ? c.time.split(' - ')[0] : c.time);
      const span = isLab ? (times.indexOf(c.time.split(' - ')[1]) - startSlot) : 1;
      
      for (let i = startSlot; i < startSlot + span; i++) {
        if (occupied.has(i)) {
          console.log(`OVERLAP in ${section} - ${day} at slot ${i} (${times[i]})! Classes: `, classes.map(c => c.time + " " + c.sub));
        }
        occupied.add(i);
      }
    }
  }
}
console.log("Check complete.");
