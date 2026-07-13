const fs = require('fs');

const namesStr = `Prof. Dr. Shamim Ahmad
Dr. Ahammad Hossain
Md. Mizanur Rahman
Umme Rumman
Mst. Jannatul Ferdous
Sumaia Rahman
A.S.M Delwar Hossain
Md. Toufikul Islam
Md. Muktar Hossain
Md. Mahfujur Rahman
Protik Chakroborty
Md. Nour Noby
Ayesha Akter Lima
Ipshita Tasnim Raha
Sumaiya Tasnim Dristy
Shamim Reza
Akib Ikbal
Samira Tareque
Mohammad Faisal Al-Naser
Ahmed Al Azmain
Md. Jamil Chaudhary
Md. Shahid Ahmmed Shakil
Zannatul Mifta
Ruhul Amin
Susmit Jahan Rose
Israt Jahan Rinky
Md. Fatin Ilham
D.M Asadujjaman
Md. Arshad Wasif
Md. Taufiq Khan
Shorav Paul
Sumaya Hannan Shova
Md. Fayzul Islam
MD. Adnan Sami
Adrita Alam
Afroza Islam
Zuairia Raisa Bintay Makin
Humayra Tasnim
Asim Moin Saad
Afifa Tasneem Quanita
Md. Khalid Sakib
Md. Alamin Hossain Pappu
Anupoma Barman Shetu
Sajeeb Kumar Ray
Tahrima Sayem Sowa
Syeda Tamanna Alam Monisha
Barisha Chowdhury
Shakil Hossan
Mehedi Hasan Shakil
Mohd Ruhul Ameen
Fahmida Akter Jesis Shithi`;

const numbersStr = `01730-406518
1762327094
1770702911
1716673728
1756827725
1795381332
1780681781
1701012413
1776300789
1976411722
01318-988313
1755774070
1701041311
1715673436
1799011979
1921285959
1743172636
1309427603
1404732567
01765388951, 01701072498
1793942198
1766165877
1738659759
1313529302
1792774195
1710437000
1616425777
1701042718
1858316636
1952749248
1834740441
1645714144
01795-035574
1648187304
1733331392
01318-751114
01829-051117
01773-303199
1814222664
01764-828065
1722661773
1776098594
1704680283
01785-307680
01816-187689
01712-953999
01719-115149
01892016020
01793814409
1312300804
1319406333`;

const names = namesStr.split('\n').map(n => n.trim());
const numbers = numbersStr.split('\n').map(n => {
    let num = n.trim().replace(/-/g, '');
    if (num && !num.startsWith('0') && num.length >= 9) {
        num = '0' + num;
    }
    return num;
});

let newBlock = 'export const teacherPhones: Record<string, string> = {\n';
for (let i = 0; i < names.length; i++) {
    newBlock += `  "${names[i]}": "${numbers[i]}",\n`;
}
newBlock += '};\n\n';

const getTeacherFn = `
export const getTeacherPhone = (teacherName: string): string => {
  // Try exact match
  if (teacherPhones[teacherName]) return teacherPhones[teacherName];
  
  // Try exact match after trimming
  let trimmed = teacherName.trim();
  
  // Map routine names to the new provided phone list names
  if (trimmed === "Salma Akter Lima" || trimmed === "Salma Akter Rima") trimmed = "Ayesha Akter Lima";
  if (trimmed === "Md. Nour Nabi") trimmed = "Md. Nour Noby";
  if (trimmed === "Sumaiya Tasnim Bristi") trimmed = "Sumaiya Tasnim Dristy";
  if (trimmed === "D. M. Asadujjaman") trimmed = "D.M Asadujjaman";
  if (trimmed === "Md. Adnan Sami") trimmed = "MD. Adnan Sami";
  
  if (teacherPhones[trimmed]) return teacherPhones[trimmed];

  // If there are multiple teachers (comma separated)
  if (trimmed.includes(',')) {
    const teachers = trimmed.split(',').map(t => t.trim());
    return teachers.map(t => {
      let tt = t;
      if (tt === "Salma Akter Lima" || tt === "Salma Akter Rima") tt = "Ayesha Akter Lima";
      if (tt === "Md. Nour Nabi") tt = "Md. Nour Noby";
      if (tt === "Sumaiya Tasnim Bristi") tt = "Sumaiya Tasnim Dristy";
      if (tt === "D. M. Asadujjaman") tt = "D.M Asadujjaman";
      if (tt === "Md. Adnan Sami") tt = "MD. Adnan Sami";
      return teacherPhones[tt] || "N/A";
    }).join(', ');
  }

  // Handle minor naming differences
  const keys = Object.keys(teacherPhones);
  const found = keys.find(k => k.toLowerCase() === trimmed.toLowerCase());
  if (found) return teacherPhones[found];
  
  return "N/A";
};
`;

const dataTs = fs.readFileSync('src/data.ts', 'utf8');

const startIndex = dataTs.indexOf('export const teacherPhones: Record<string, string> = {');
const endOfGetTeacher = dataTs.indexOf('export const routineData: Record<string, SectionSchedule> =');

if (startIndex !== -1 && endOfGetTeacher !== -1) {
    const beforeBlock = dataTs.substring(0, startIndex);
    const afterBlock = dataTs.substring(endOfGetTeacher);

    fs.writeFileSync('src/data.ts', beforeBlock + newBlock + getTeacherFn.trim() + '\n\n' + afterBlock, 'utf8');
    console.log("Updated teacher phones and replaced the old ones successfully.");
} else {
    console.log("Failed to find teacherPhones block.");
}
