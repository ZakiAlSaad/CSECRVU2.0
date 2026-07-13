const fs = require('fs');

const csvText = `Day / Slot,"Slot 1\n 09:00 AM","Slot 2\n 10:05 AM","Slot 3\n 11:10 AM","Slot 4\n 12:15 PM","Slot 5\n 01:50 PM","Slot 6\n 02:55 PM"
Sunday,"Samira Tareque\n CSE 2103 (3rd Sem. B Sec)\n Room: 414","Salma Akter Lima, Tahrima Sayem Sowa\n CSE 2106 (3rd Sem. D Sec)\n Room: 130 DSCAL","Salma Akter Lima, Md. Nahid Hasan\n CSE 2106 (3rd Sem. C Sec)\n Room: 127 EEL","Zannatul Mifta\n CSE 2105 (3rd Sem. G Sec)\n Room: 512","Zannatul Mifta\n CSE 2105 (3rd Sem. F Sec)\n Room: 411","Afroza Islam\n CSE 2103 (3rd Sem. F Sec)\n Room: 1001"
,"Umme Rumman, Md. Alamin Hossain Pappu\n CSE 2104 (3rd Sem. A Sec)\n Room: 129 SEL","Umme Rumman, Md. Alamin Hossain Pappu\n CSE 2104 (3rd Sem. A Sec)\n Room: 129 SEL","CSE New Teacher 3\n MAT 2141 (3rd Sem. D Sec)\n Room: 1013","CSE New Teacher 3\n MAT 2141 (3rd Sem. E Sec)\n Room: 414","Md. Nour Nabi, Barisha Chowdhury\n CSE 2102 (3rd Sem. G Sec)\n Room: 106 DSAL","Md. Nour Nabi, Barisha Chowdhury\n CSE 2102 (3rd Sem. G Sec)\n Room: 106 DSAL"
,"Zannatul Mifta\n CSE 2105 (3rd Sem. E Sec)\n Room: 411","Ahmed Al Azmain\n CSE 2101 (3rd Sem. B Sec)\n Room: 314","A.S.M Delwar Hossain\n CSE 2101 (3rd Sem. E Sec)\n Room: 814","A.S.M Delwar Hossain\n CSE 2101 (3rd Sem. C Sec)\n Room: 1009",,
,"Eco New Teacher 1\n ECO 2171 (3rd Sem. D Sec)\n Room: 311",,"Barisha Chowdhury\n CSE 2101 (3rd Sem. G Sec)\n Room: 513","Eco New Teacher 1\n ECO 2171 (3rd Sem. B Sec)\n Room: 513",,
,,,"Eco New Teacher 1\n ECO 2171 (3rd Sem. A Sec)\n Room: 514",,,
Monday,"Md. Golam Rashed\n CSE 2103 (3rd Sem. A Sec)\n Room: 911","Barisha Chowdhury\n CSE 2101 (3rd Sem. G Sec)\n Room: 513","Samira Tareque\n CSE 2103 (3rd Sem. C Sec)\n Room: 508","Umme Rumman, Samira Tareque\n CSE 2104 (3rd Sem. C Sec)\n Room: 128 BCL","Umme Rumman, Samira Tareque\n CSE 2104 (3rd Sem. C Sec)\n Room: 128 BCL","Afroza Islam\n CSE 2103 (3rd Sem. E Sec)\n Room: 1008"
,"Eco New Teacher 1\n ECO 2171 (3rd Sem. C Sec)\n Room: 314","Eco New Teacher 1\n ECO 2171 (3rd Sem. E Sec)\n Room: 512","Afroza Islam\n CSE 2103 (3rd Sem. G Sec)\n Room: 913","Anupoma Barman Shetu\n MAT 2141 (3rd Sem. B Sec)\n Room: 514","Salma Akter Lima, D. M. Asadujjaman\n CSE 2106 (3rd Sem. B Sec)\n Room: 127 EEL","Salma Akter Lima\n CSE 2105 (3rd Sem. D Sec)\n Room: 1001"
,"Eco New Teacher 4\n ECO 2171 (3rd Sem. G Sec)\n Room: 311",,"Mst. Jannatul Ferdous, Zannatul Mifta\n CSE 2106 (3rd Sem. E Sec)\n Room: 127 EEL","CSE New Teacher 3\n MAT 2141 (3rd Sem. F Sec)\n Room: 314","Mst. Jannatul Ferdous, Zannatul Mifta\n CSE 2106 (3rd Sem. F Sec)\n Room: 131 MIL",
,,"A.S.M Delwar Hossain, Md. Nour Nabi\n CSE 2102 (3rd Sem. A Sec)\n Room: 129 SEL","A.S.M Delwar Hossain, Md. Nour Nabi\n CSE 2102 (3rd Sem. A Sec)\n Room: 129 SEL","A.S.M Delwar Hossain\n CSE 2101 (3rd Sem. E Sec)\n Room: 812","Ahmed Al Azmain\n CSE 2101 (3rd Sem. D Sec)\n Room: 812",
,,"Ahmed Al Azmain, Md. Fatin Ilham\n CSE 2102 (3rd Sem. B Sec)\n Room: 104 CNL","Ahmed Al Azmain, Md. Fatin Ilham\n CSE 2102 (3rd Sem. B Sec)\n Room: 104 CNL","Eco New Teacher 1\n ECO 2171 (3rd Sem. D Sec)\n Room: 513",,
Tuesday,"Umme Rumman, Samira Tareque\n CSE 2104 (3rd Sem. D Sec)\n Room: 104 CNL","Umme Rumman, Samira Tareque\n CSE 2104 (3rd Sem. D Sec)\n Room: 104 CNL","Israt Jahan Rinky, Afroza Islam\n CSE 2104 (3rd Sem. F Sec)\n Room: 104 CNL","Israt Jahan Rinky, Afroza Islam\n CSE 2104 (3rd Sem. F Sec)\n Room: 104 CNL","Samira Tareque\n CSE 2103 (3rd Sem. B Sec)\n Room: 1008","Anupoma Barman Shetu\n MAT 2141 (3rd Sem. A Sec)\n Room: 511"
,"Eco New Teacher 4\n ECO 2171 (3rd Sem. G Sec)\n Room: 514","CSE New Teacher 3\n MAT 2141 (3rd Sem. G Sec)\n Room: 913","Eco New Teacher 1\n ECO 2171 (3rd Sem. B Sec)\n Room: 514","Salma Akter Lima\n CSE 2105 (3rd Sem. D Sec)\n Room: 509","Salma Akter Lima\n CSE 2105 (3rd Sem. C Sec)\n Room: 508","A.S.M Delwar Hossain\n CSE 2101 (3rd Sem. C Sec)\n Room: 910"
,,"A.S.M Delwar Hossain, Mohammad Faisal Al-Naser\n CSE 2102 (3rd Sem. E Sec)\n Room: 129 SEL","A.S.M Delwar Hossain, Mohammad Faisal Al-Naser\n CSE 2102 (3rd Sem. E Sec)\n Room: 129 SEL","Anupoma Barman Shetu\n MAT 2141 (3rd Sem. C Sec)\n Room: 1011","Zannatul Mifta\n CSE 2105 (3rd Sem. E Sec)\n Room: 512",
,,"Eco New Teacher 1\n ECO 2171 (3rd Sem. F Sec)\n Room: 414",,,"CSE New Teacher 3\n MAT 2141 (3rd Sem. D Sec)\n Room: 311",
,,,,,"Barisha Chowdhury\n CSE 2101 (3rd Sem. F Sec)\n Room: 511",
,,,,,"Eco New Teacher 1\n ECO 2171 (3rd Sem. A Sec)\n Room: 414",
Wednesday,"Samira Tareque\n CSE 2103 (3rd Sem. D Sec)\n Room: 1013","Salma Akter Lima, D. M. Asadujjaman\n CSE 2106 (3rd Sem. A Sec)\n Room: 127 EEL","Samira Tareque\n CSE 2103 (3rd Sem. C Sec)\n Room: 814","Sumaiya Tasnim Bristi, Afroza Islam\n CSE 2104 (3rd Sem. E Sec)\n Room: 103 DMSL","Sumaiya Tasnim Bristi, Afroza Islam\n CSE 2104 (3rd Sem. E Sec)\n Room: 103 DMSL","Anupoma Barman Shetu\n MAT 2141 (3rd Sem. B Sec)\n Room: 413"
,,"Israt Jahan Rinky, Afroza Islam\n CSE 2104 (3rd Sem. G Sec)\n Room: 129 SEL","Israt Jahan Rinky, Afroza Islam\n CSE 2104 (3rd Sem. G Sec)\n Room: 129 SEL","Salma Akter Lima\n CSE 2105 (3rd Sem. A Sec)\n Room: 508","Salma Akter Lima\n CSE 2105 (3rd Sem. B Sec)\n Room: 512",
,,"Anupoma Barman Shetu\n MAT 2141 (3rd Sem. C Sec)\n Room: 314",,"CSE New Teacher 3\n MAT 2141 (3rd Sem. G Sec)\n Room: 511","Mst. Jannatul Ferdous, Zannatul Mifta\n CSE 2106 (3rd Sem. G Sec)\n Room: 127 EEL",
,,"Ahmed Al Azmain\n CSE 2101 (3rd Sem. D Sec)\n Room: 311",,"Eco New Teacher 1\n ECO 2171 (3rd Sem. F Sec)\n Room: 412","CSE New Teacher 3\n MAT 2141 (3rd Sem. F Sec)\n Room: 511",
,,"A.S.M Delwar Hossain, Barisha Chowdhury\n CSE 2102 (3rd Sem. F Sec)\n Room: 106 DSAL","A.S.M Delwar Hossain, Barisha Chowdhury\n CSE 2102 (3rd Sem. F Sec)\n Room: 106 DSAL",,"A.S.M Delwar Hossain\n CSE 2101 (3rd Sem. A Sec)\n Room: 814",
Thursday,"Md. Golam Rashed\n CSE 2103 (3rd Sem. A Sec)\n Room: 1013","Samira Tareque\n CSE 2103 (3rd Sem. D Sec)\n Room: 411","Afroza Islam\n CSE 2103 (3rd Sem. G Sec)\n Room: 314","Salma Akter Lima\n CSE 2105 (3rd Sem. A Sec)\n Room: 913","Afroza Islam\n CSE 2103 (3rd Sem. F Sec)\n Room: 911","Afroza Islam\n CSE 2103 (3rd Sem. E Sec)\n Room: 913"
,"Eco New Teacher 1\n ECO 2171 (3rd Sem. C Sec)\n Room: 511","Salma Akter Lima\n CSE 2105 (3rd Sem. C Sec)\n Room: 1014","Salma Akter Lima\n CSE 2105 (3rd Sem. B Sec)\n Room: 413","Umme Rumman, Samira Tareque\n CSE 2104 (3rd Sem. B Sec)\n Room: 103 DMSL","Umme Rumman, Samira Tareque\n CSE 2104 (3rd Sem. B Sec)\n Room: 103 DMSL","Barisha Chowdhury\n CSE 2101 (3rd Sem. F Sec)\n Room: 514"
,,"A.S.M Delwar Hossain\n CSE 2101 (3rd Sem. A Sec)\n Room: 511",,"Zannatul Mifta\n CSE 2105 (3rd Sem. F Sec)\n Room: 514","Zannatul Mifta\n CSE 2105 (3rd Sem. G Sec)\n Room: 413",
,,"Ahmed Al Azmain\n CSE 2101 (3rd Sem. B Sec)\n Room: 414",,"Eco New Teacher 1\n ECO 2171 (3rd Sem. E Sec)\n Room: 511","Anupoma Barman Shetu\n MAT 2141 (3rd Sem. A Sec)\n Room: 508",
,,,,,"CSE New Teacher 3\n MAT 2141 (3rd Sem. E Sec)\n Room: 509",
,,,,"A.S.M Delwar Hossain, Md. Nour Nabi\n CSE 2102 (3rd Sem. C Sec)\n Room: 104 CNL","A.S.M Delwar Hossain, Md. Nour Nabi\n CSE 2102 (3rd Sem. C Sec)\n Room: 104 CNL",
,,,,"Ahmed Al Azmain, Md. Fatin Ilham\n CSE 2102 (3rd Sem. D Sec)\n Room: 106 DSAL","Ahmed Al Azmain, Md. Fatin Ilham\n CSE 2102 (3rd Sem. D Sec)\n Room: 106 DSAL"`;

// simple CSV parser
let i = 0;
const rows = [];
let currentRow = [];
let currentCell = '';
let inQuotes = false;

while (i < csvText.length) {
  const char = csvText[i];
  const nextChar = csvText[i+1];
  
  if (inQuotes) {
    if (char === '"') {
      if (nextChar === '"') {
        currentCell += '"';
        i += 2;
      } else {
        inQuotes = false;
        i++;
      }
    } else {
      currentCell += char;
      i++;
    }
  } else {
    if (char === '"') {
      inQuotes = true;
      i++;
    } else if (char === ',') {
      currentRow.push(currentCell);
      currentCell = '';
      i++;
    } else if (char === '\n') {
      currentRow.push(currentCell);
      rows.push(currentRow);
      currentRow = [];
      currentCell = '';
      i++;
    } else {
      currentCell += char;
      i++;
    }
  }
}
if (currentCell || currentRow.length > 0) {
  currentRow.push(currentCell);
  rows.push(currentRow);
}

const times = ["09:00 AM", "10:05 AM", "11:10 AM", "12:15 PM", "01:50 PM", "02:55 PM"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

let currentDay = '';

const routineData = {
  "A": { "Sunday": [], "Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [] },
  "B": { "Sunday": [], "Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [] },
  "C": { "Sunday": [], "Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [] },
  "D": { "Sunday": [], "Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [] },
  "E": { "Sunday": [], "Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [] },
  "F": { "Sunday": [], "Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [] },
  "G": { "Sunday": [], "Monday": [], "Tuesday": [], "Wednesday": [], "Thursday": [] }
};

for (let r = 1; r < rows.length; r++) {
  const row = rows[r];
  if (!row) continue;
  
  if (row[0] && days.includes(row[0].trim())) {
    currentDay = row[0].trim();
  }
  
  for (let c = 1; c <= 6; c++) {
    const cell = row[c];
    if (cell && cell.trim() !== '') {
      // parse cell
      const lines = cell.split('\n').map(l => l.trim()).filter(l => l !== '');
      if (lines.length >= 3) {
        const teacher = lines[0];
        const subLine = lines[1];
        const roomLine = lines[2];
        
        const secMatch = subLine.match(/\(3rd Sem\. ([A-G]) Sec\)/);
        if (secMatch) {
          const section = secMatch[1];
          const sub = subLine.split(' (3rd Sem.')[0].trim();
          const room = roomLine.replace('Room:', '').trim();
          const time = times[c-1];
          
          routineData[section][currentDay].push({ time, sub, room, teacher });
        }
      }
    }
  }
}

// now sort by time
for (const section in routineData) {
  for (const day in routineData[section]) {
    routineData[section][day].sort((a, b) => times.indexOf(a.time) - times.indexOf(b.time));
  }
}

console.log(JSON.stringify(routineData, null, 2));
