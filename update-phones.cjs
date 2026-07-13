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

const newPhones = {};
for (let i = 0; i < names.length; i++) {
    newPhones[names[i]] = numbers[i];
    // Add common variants just in case
    if (names[i].includes('Noby')) newPhones[names[i].replace('Noby', 'Nabi')] = numbers[i];
    if (names[i].includes('D.M')) newPhones[names[i].replace('D.M', 'D. M.')] = numbers[i];
    if (names[i] === 'MD. Adnan Sami') {
        newPhones['Md. Adnan Sami'] = numbers[i];
    }
    if (names[i] === 'Ayesha Akter Lima') {
        newPhones['Salma Akter Lima'] = numbers[i];
        newPhones['Salma Akter Rima'] = numbers[i];
    }
    if (names[i] === 'Sumaiya Tasnim Dristy') {
        newPhones['Sumaiya Tasnim Bristi'] = numbers[i];
    }
}

// read data.ts
const dataTs = fs.readFileSync('src/data.ts', 'utf8');

// match the block: export const teacherPhones: Record<string, string> = { ... };
const startIndex = dataTs.indexOf('export const teacherPhones: Record<string, string> = {');
const endIndex = dataTs.indexOf('export const routineData: Record<string, SectionSchedule> =');

if (startIndex !== -1 && endIndex !== -1) {
    // we want to parse the old teacher phones and merge the new ones
    // Actually we can just do a regex or eval to get old ones.
    const beforeBlock = dataTs.substring(0, startIndex);
    const oldBlock = dataTs.substring(startIndex, endIndex);
    const afterBlock = dataTs.substring(endIndex);

    // naive parse
    const lines = oldBlock.split('\n');
    const oldPhones = {};
    for (const line of lines) {
        const m = line.match(/"([^"]+)"\s*:\s*"([^"]+)"/);
        if (m) {
            oldPhones[m[1]] = m[2];
        }
    }

    // merge, new overrides old
    const mergedPhones = { ...oldPhones, ...newPhones };

    // stringify
    let newBlock = 'export const teacherPhones: Record<string, string> = {\n';
    for (const [key, val] of Object.entries(mergedPhones)) {
        newBlock += `  "${key}": "${val}",\n`;
    }
    newBlock += '};\n\n';

    fs.writeFileSync('src/data.ts', beforeBlock + newBlock + afterBlock, 'utf8');
    console.log("Updated teacher phones successfully.");
} else {
    console.log("Failed to find teacherPhones block.");
}

