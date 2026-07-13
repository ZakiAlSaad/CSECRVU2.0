const fs = require('fs');

const namesStr = `Prof. Dr. Boshir Ahmed
Dr. Md. Johirul Islam
Md. Faruk Hossain, Ph.D.
Md. Faisal Rahman Badal
Dr. Md. Mayeedul Islam
Dr. Jewel Hossen
Sanjoy Kumar Chakravarty
Dr. Md. Ekramul Hamid
Dr. Md. Iqbal Aziz Khan
Dr. Jaker Hossain
Dr. Md.  Ariful Islam Nahid
Dr. Md. Golam Rashed
Dr. Md. Hamidul Islam
Dr. Md. Abu Bakar PK.
Dr. Md. Sherezzaman
Md. Sanaul Haque
Mst. Somapti Akter
Sanjida Sultana Rika
Emamul Haque
Fahamina Zahan
Faisal Aziz
Subrina Ahmed Shanta
Bebak More
Md. Moniruzzaman Kiron`;

const numbersStr = `01713228547
01723216880
01756906574
1763130652
01775093606
01515283109
01718076436
01726420004
01712010916
01919803395
01760174238
01717515008
01714585201
01716386533
01717012201
01774314119
01771180837
01861081984
01710056688
01886-714826
01717843998
1335899457
1738474122
1975589956
1778582757`;

const names = namesStr.split('\n').map(n => n.trim()).filter(Boolean);
const numbers = numbersStr.split('\n').map(n => {
    let num = n.trim().replace(/-/g, '');
    if (num && !num.startsWith('0') && num.length >= 9) {
        num = '0' + num;
    }
    return num;
}).filter(Boolean);

let dataTs = fs.readFileSync('src/data.ts', 'utf8');

let newEntries = '';
for (let i = 0; i < names.length; i++) {
    // If the 24th person has two numbers? (since there are 25 numbers)
    let num = numbers[i];
    if (i === names.length - 1 && numbers.length > names.length) {
       // if last name has multiple numbers
       num = numbers.slice(i).join(', ');
    }
    newEntries += `  "${names[i]}": "${num}",\n`;
}

// Inject new entries into teacherPhones object
const objEndIndex = dataTs.indexOf('};\n\nexport const getTeacherPhone');
if (objEndIndex !== -1) {
    dataTs = dataTs.slice(0, objEndIndex) + newEntries + dataTs.slice(objEndIndex);
}

// Add mapping for minor changes
const mappingInsertIndex = dataTs.indexOf('if (teacherPhones[trimmed]) return teacherPhones[trimmed];');
if (mappingInsertIndex !== -1) {
    const extraMappings = `
  if (trimmed === "Md. Golam Rashed") trimmed = "Dr. Md. Golam Rashed";
  `;
    dataTs = dataTs.slice(0, mappingInsertIndex) + extraMappings + dataTs.slice(mappingInsertIndex);
    
    // Also inject into array mapper
    const arrayMappingInsertIndex = dataTs.indexOf('if (tt === "Md. Adnan Sami") tt = "MD. Adnan Sami";', mappingInsertIndex);
    if (arrayMappingInsertIndex !== -1) {
        dataTs = dataTs.slice(0, arrayMappingInsertIndex + 51) + '\n      if (tt === "Md. Golam Rashed") tt = "Dr. Md. Golam Rashed";' + dataTs.slice(arrayMappingInsertIndex + 51);
    }
}

fs.writeFileSync('src/data.ts', dataTs, 'utf8');
console.log("Appended new teacher phones successfully.");
