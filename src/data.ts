export interface ClassInfo {
  time: string;
  sub: string;
  room: string;
  teacher: string;
}

export type DaySchedule = ClassInfo[];

export interface SectionSchedule {
  Sunday?: DaySchedule;
  Monday?: DaySchedule;
  Tuesday?: DaySchedule;
  Wednesday?: DaySchedule;
  Thursday?: DaySchedule;
  [key: string]: DaySchedule | undefined;
}

export const teacherPhones: Record<string, string> = {
  "Prof. Dr. Shamim Ahmad": "01730406518",
  "Dr. Ahammad Hossain": "01762327094",
  "Md. Mizanur Rahman": "01770702911",
  "Umme Rumman": "01716673728",
  "Mst. Jannatul Ferdous": "01756827725",
  "Sumaia Rahman": "01795381332",
  "A.S.M Delwar Hossain": "01780681781",
  "Md. Toufikul Islam": "01701012413",
  "Md. Muktar Hossain": "01776300789",
  "Md. Mahfujur Rahman": "01976411722",
  "Protik Chakroborty": "01318988313",
  "Md. Nour Noby": "01755774070",
  "Ayesha Akter Lima": "01701041311",
  "Ipshita Tasnim Raha": "01715673436",
  "Sumaiya Tasnim Dristy": "01799011979",
  "Shamim Reza": "01921285959",
  "Akib Ikbal": "01743172636",
  "Samira Tareque": "01309427603",
  "Mohammad Faisal Al-Naser": "01404732567",
  "Ahmed Al Azmain": "01765388951, 01701072498",
  "Md. Jamil Chaudhary": "01793942198",
  "Md. Shahid Ahmmed Shakil": "01766165877",
  "Zannatul Mifta": "01738659759",
  "Ruhul Amin": "01313529302",
  "Susmit Jahan Rose": "01792774195",
  "Israt Jahan Rinky": "01710437000",
  "Md. Fatin Ilham": "01616425777",
  "D.M Asadujjaman": "01701042718",
  "Md. Arshad Wasif": "01858316636",
  "Md. Taufiq Khan": "01952749248",
  "Shorav Paul": "01834740441",
  "Sumaya Hannan Shova": "01645714144",
  "Md. Fayzul Islam": "01795035574",
  "MD. Adnan Sami": "01648187304",
  "Adrita Alam": "01733331392",
  "Afroza Islam": "01318751114",
  "Zuairia Raisa Bintay Makin": "01829051117",
  "Humayra Tasnim": "01773303199",
  "Asim Moin Saad": "01814222664",
  "Afifa Tasneem Quanita": "01764828065",
  "Md. Khalid Sakib": "01722661773",
  "Md. Alamin Hossain Pappu": "01776098594",
  "Anupoma Barman Shetu": "01704680283",
  "Sajeeb Kumar Ray": "01785307680",
  "Tahrima Sayem Sowa": "01816187689",
  "Syeda Tamanna Alam Monisha": "01712953999",
  "Barisha Chowdhury": "01719115149",
  "Shakil Hossan": "01892016020",
  "Mehedi Hasan Shakil": "01793814409",
  "Mohd Ruhul Ameen": "01312300804",
  "Fahmida Akter Jesis Shithi": "01319406333",
  "Prof. Dr. Boshir Ahmed": "01713228547",
  "Dr. Md. Johirul Islam": "01723216880",
  "Md. Faruk Hossain, Ph.D.": "01756906574",
  "Md. Faisal Rahman Badal": "01763130652",
  "Dr. Md. Mayeedul Islam": "01775093606",
  "Dr. Jewel Hossen": "01515283109",
  "Sanjoy Kumar Chakravarty": "01718076436",
  "Dr. Md. Ekramul Hamid": "01726420004",
  "Dr. Md. Iqbal Aziz Khan": "01712010916",
  "Dr. Jaker Hossain": "01919803395",
  "Dr. Md.  Ariful Islam Nahid": "01760174238",
  "Dr. Md. Golam Rashed": "01717515008",
  "Dr. Md. Hamidul Islam": "01714585201",
  "Dr. Md. Abu Bakar PK.": "01716386533",
  "Dr. Md. Sherezzaman": "01717012201",
  "Md. Sanaul Haque": "01774314119",
  "Mst. Somapti Akter": "01771180837",
  "Sanjida Sultana Rika": "01861081984",
  "Emamul Haque": "01710056688",
  "Fahamina Zahan": "01886714826",
  "Faisal Aziz": "01717843998",
  "Subrina Ahmed Shanta": "01335899457",
  "Bebak More": "01738474122",
  "Md. Moniruzzaman Kiron": "01975589956, 01778582757",
};

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
  
  
  if (trimmed === "Md. Golam Rashed") trimmed = "Dr. Md. Golam Rashed";
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
      if (tt === "Md. Golam Rashed") tt = "Dr. Md. Golam Rashed";
      return teacherPhones[tt] || "N/A";
    }).join(', ');
  }

  // Handle minor naming differences
  const keys = Object.keys(teacherPhones);
  const found = keys.find(k => k.toLowerCase() === trimmed.toLowerCase());
  if (found) return teacherPhones[found];
  
  return "N/A";
};

export const routineData: Record<string, SectionSchedule> = {

  A: {
    Sunday: [
      {
        time: "09:00 AM - 11:10 AM",
        sub: "CSE 2104 (Lab)",
        room: "129 SEL",
        teacher: "Umme Rumman, Md. Alamin Hossain Pappu"
      },
      {
        time: "11:10 AM",
        sub: "ECO 2171",
        room: "514",
        teacher: "Eco New Teacher 1"
      }
    ],
    Monday: [
      {
        time: "09:00 AM",
        sub: "CSE 2103",
        room: "911",
        teacher: "Md. Golam Rashed"
      },
      {
        time: "10:05 AM - 12:15 PM",
        sub: "CSE 2102 (Lab)",
        room: "129 SEL",
        teacher: "A.S.M Delwar Hossain, Md. Nour Nabi"
      }
    ],
    Tuesday: [
      {
        time: "01:50 PM",
        sub: "ECO 2171",
        room: "414",
        teacher: "Eco New Teacher 1"
      },
      {
        time: "02:55 PM",
        sub: "MAT 2141",
        room: "511",
        teacher: "Anupoma Barman Shetu"
      }
    ],
    Wednesday: [
      {
        time: "10:05 AM",
        sub: "CSE 2106",
        room: "127 EEL",
        teacher: "Salma Akter Lima, D. M. Asadujjaman"
      },
      {
        time: "12:15 PM",
        sub: "CSE 2105",
        room: "508",
        teacher: "Salma Akter Lima"
      },
      {
        time: "01:50 PM",
        sub: "CSE 2101",
        room: "814",
        teacher: "A.S.M Delwar Hossain"
      }
    ],
    Thursday: [
      {
        time: "09:00 AM",
        sub: "CSE 2103",
        room: "1013",
        teacher: "Md. Golam Rashed"
      },
      {
        time: "10:05 AM",
        sub: "CSE 2101",
        room: "511",
        teacher: "A.S.M Delwar Hossain"
      },
      {
        time: "12:15 PM",
        sub: "CSE 2105",
        room: "913",
        teacher: "Salma Akter Lima"
      },
      {
        time: "01:50 PM",
        sub: "MAT 2141",
        room: "508",
        teacher: "Anupoma Barman Shetu"
      }
    ]
  },
  B: {
    Sunday: [
      {
        time: "09:00 AM",
        sub: "CSE 2103",
        room: "414",
        teacher: "Samira Tareque"
      },
      {
        time: "10:05 AM",
        sub: "CSE 2101",
        room: "314",
        teacher: "Ahmed Al Azmain"
      },
      {
        time: "12:15 PM",
        sub: "ECO 2171",
        room: "513",
        teacher: "Eco New Teacher 1"
      }
    ],
    Monday: [
      {
        time: "10:05 AM - 12:15 PM",
        sub: "CSE 2102 (Lab)",
        room: "104 CNL",
        teacher: "Ahmed Al Azmain, Md. Fatin Ilham"
      },
      {
        time: "12:15 PM",
        sub: "MAT 2141",
        room: "514",
        teacher: "Anupoma Barman Shetu"
      },
      {
        time: "01:50 PM",
        sub: "CSE 2106",
        room: "127 EEL",
        teacher: "Salma Akter Lima, D. M. Asadujjaman"
      }
    ],
    Tuesday: [
      {
        time: "11:10 AM",
        sub: "ECO 2171",
        room: "514",
        teacher: "Eco New Teacher 1"
      },
      {
        time: "01:50 PM",
        sub: "CSE 2103",
        room: "1008",
        teacher: "Samira Tareque"
      }
    ],
    Wednesday: [
      {
        time: "01:50 PM",
        sub: "CSE 2105",
        room: "512",
        teacher: "Salma Akter Lima"
      },
      {
        time: "02:55 PM",
        sub: "MAT 2141",
        room: "413",
        teacher: "Anupoma Barman Shetu"
      }
    ],
    Thursday: [
      {
        time: "10:05 AM",
        sub: "CSE 2101",
        room: "414",
        teacher: "Ahmed Al Azmain"
      },
      {
        time: "11:10 AM",
        sub: "CSE 2105",
        room: "413",
        teacher: "Salma Akter Lima"
      },
      {
        time: "12:15 PM - 02:55 PM",
        sub: "CSE 2104 (Lab)",
        room: "103 DMSL",
        teacher: "Umme Rumman, Samira Tareque"
      }
    ]
  },
  C: {
    Sunday: [
      {
        time: "11:10 AM",
        sub: "CSE 2106",
        room: "127 EEL",
        teacher: "Salma Akter Lima, Md. Nahid Hasan"
      },
      {
        time: "12:15 PM",
        sub: "CSE 2101",
        room: "1009",
        teacher: "A.S.M Delwar Hossain"
      }
    ],
    Monday: [
      {
        time: "09:00 AM",
        sub: "ECO 2171",
        room: "314",
        teacher: "Eco New Teacher 1"
      },
      {
        time: "11:10 AM",
        sub: "CSE 2103",
        room: "508",
        teacher: "Samira Tareque"
      },
      {
        time: "12:15 PM - 02:55 PM",
        sub: "CSE 2104 (Lab)",
        room: "128 BCL",
        teacher: "Umme Rumman, Samira Tareque"
      }
    ],
    Tuesday: [
      {
        time: "12:15 PM",
        sub: "MAT 2141",
        room: "1011",
        teacher: "Anupoma Barman Shetu"
      },
      {
        time: "01:50 PM",
        sub: "CSE 2105",
        room: "508",
        teacher: "Salma Akter Lima"
      },
      {
        time: "02:55 PM",
        sub: "CSE 2101",
        room: "910",
        teacher: "A.S.M Delwar Hossain"
      }
    ],
    Wednesday: [
      {
        time: "10:05 AM",
        sub: "MAT 2141",
        room: "314",
        teacher: "Anupoma Barman Shetu"
      },
      {
        time: "11:10 AM",
        sub: "CSE 2103",
        room: "814",
        teacher: "Samira Tareque"
      }
    ],
    Thursday: [
      {
        time: "09:00 AM",
        sub: "ECO 2171",
        room: "511",
        teacher: "Eco New Teacher 1"
      },
      {
        time: "10:05 AM",
        sub: "CSE 2105",
        room: "1014",
        teacher: "Salma Akter Lima"
      },
      {
        time: "12:15 PM - 02:55 PM",
        sub: "CSE 2102 (Lab)",
        room: "104 CNL",
        teacher: "A.S.M Delwar Hossain, Md. Nour Nabi"
      }
    ]
  },
  D: {
    Sunday: [
      {
        time: "09:00 AM",
        sub: "ECO 2171",
        room: "311",
        teacher: "Eco New Teacher 1"
      },
      {
        time: "10:05 AM",
        sub: "CSE 2106",
        room: "130 DSCAL",
        teacher: "Salma Akter Lima, Tahrima Sayem Sowa"
      },
      {
        time: "11:10 AM",
        sub: "MAT 2141",
        room: "1013",
        teacher: "CSE New Teacher 3"
      }
    ],
    Monday: [
      {
        time: "12:15 PM",
        sub: "ECO 2171",
        room: "513",
        teacher: "Eco New Teacher 1"
      },
      {
        time: "01:50 PM",
        sub: "CSE 2101",
        room: "812",
        teacher: "Ahmed Al Azmain"
      },
      {
        time: "02:55 PM",
        sub: "CSE 2105",
        room: "1001",
        teacher: "Salma Akter Lima"
      }
    ],
    Tuesday: [
      {
        time: "09:00 AM - 11:10 AM",
        sub: "CSE 2104 (Lab)",
        room: "104 CNL",
        teacher: "Umme Rumman, Samira Tareque"
      },
      {
        time: "12:15 PM",
        sub: "CSE 2105",
        room: "509",
        teacher: "Salma Akter Lima"
      },
      {
        time: "01:50 PM",
        sub: "MAT 2141",
        room: "311",
        teacher: "CSE New Teacher 3"
      }
    ],
    Wednesday: [
      {
        time: "09:00 AM",
        sub: "CSE 2103",
        room: "1013",
        teacher: "Samira Tareque"
      },
      {
        time: "10:05 AM",
        sub: "CSE 2101",
        room: "311",
        teacher: "Ahmed Al Azmain"
      }
    ],
    Thursday: [
      {
        time: "10:05 AM",
        sub: "CSE 2103",
        room: "411",
        teacher: "Samira Tareque"
      },
      {
        time: "12:15 PM - 02:55 PM",
        sub: "CSE 2102 (Lab)",
        room: "106 DSAL",
        teacher: "Ahmed Al Azmain, Md. Fatin Ilham"
      }
    ]
  },
  E: {
    Sunday: [
      {
        time: "09:00 AM",
        sub: "CSE 2105",
        room: "411",
        teacher: "Zannatul Mifta"
      },
      {
        time: "11:10 AM",
        sub: "CSE 2101",
        room: "814",
        teacher: "A.S.M Delwar Hossain"
      },
      {
        time: "12:15 PM",
        sub: "MAT 2141",
        room: "414",
        teacher: "CSE New Teacher 3"
      }
    ],
    Monday: [
      {
        time: "10:05 AM",
        sub: "ECO 2171",
        room: "512",
        teacher: "Eco New Teacher 1"
      },
      {
        time: "11:10 AM",
        sub: "CSE 2106",
        room: "127 EEL",
        teacher: "Mst. Jannatul Ferdous, Zannatul Mifta"
      },
      {
        time: "12:15 PM",
        sub: "CSE 2101",
        room: "812",
        teacher: "A.S.M Delwar Hossain"
      },
      {
        time: "02:55 PM",
        sub: "CSE 2103",
        room: "1008",
        teacher: "Afroza Islam"
      }
    ],
    Tuesday: [
      {
        time: "10:05 AM - 12:15 PM",
        sub: "CSE 2102 (Lab)",
        room: "129 SEL",
        teacher: "A.S.M Delwar Hossain, Mohammad Faisal Al-Naser"
      },
      {
        time: "01:50 PM",
        sub: "CSE 2105",
        room: "512",
        teacher: "Zannatul Mifta"
      }
    ],
    Wednesday: [
      {
        time: "12:15 PM - 02:55 PM",
        sub: "CSE 2104 (Lab)",
        room: "103 DMSL",
        teacher: "Sumaiya Tasnim Bristi, Afroza Islam"
      }
    ],
    Thursday: [
      {
        time: "12:15 PM",
        sub: "ECO 2171",
        room: "511",
        teacher: "Eco New Teacher 1"
      },
      {
        time: "01:50 PM",
        sub: "MAT 2141",
        room: "509",
        teacher: "CSE New Teacher 3"
      },
      {
        time: "02:55 PM",
        sub: "CSE 2103",
        room: "913",
        teacher: "Afroza Islam"
      }
    ]
  },
  F: {
    Sunday: [
      {
        time: "01:50 PM",
        sub: "CSE 2105",
        room: "411",
        teacher: "Zannatul Mifta"
      },
      {
        time: "02:55 PM",
        sub: "CSE 2103",
        room: "1001",
        teacher: "Afroza Islam"
      }
    ],
    Monday: [
      {
        time: "12:15 PM",
        sub: "MAT 2141",
        room: "314",
        teacher: "CSE New Teacher 3"
      },
      {
        time: "01:50 PM",
        sub: "CSE 2106",
        room: "131 MIL",
        teacher: "Mst. Jannatul Ferdous, Zannatul Mifta"
      }
    ],
    Tuesday: [
      {
        time: "10:05 AM",
        sub: "ECO 2171",
        room: "414",
        teacher: "Eco New Teacher 1"
      },
      {
        time: "11:10 AM - 01:50 PM",
        sub: "CSE 2104 (Lab)",
        room: "104 CNL",
        teacher: "Israt Jahan Rinky, Afroza Islam"
      },
      {
        time: "01:50 PM",
        sub: "CSE 2101",
        room: "511",
        teacher: "Barisha Chowdhury"
      }
    ],
    Wednesday: [
      {
        time: "10:05 AM - 12:15 PM",
        sub: "CSE 2102 (Lab)",
        room: "106 DSAL",
        teacher: "A.S.M Delwar Hossain, Barisha Chowdhury"
      },
      {
        time: "12:15 PM",
        sub: "ECO 2171",
        room: "412",
        teacher: "Eco New Teacher 1"
      },
      {
        time: "01:50 PM",
        sub: "MAT 2141",
        room: "511",
        teacher: "CSE New Teacher 3"
      }
    ],
    Thursday: [
      {
        time: "12:15 PM",
        sub: "CSE 2105",
        room: "514",
        teacher: "Zannatul Mifta"
      },
      {
        time: "01:50 PM",
        sub: "CSE 2103",
        room: "911",
        teacher: "Afroza Islam"
      },
      {
        time: "02:55 PM",
        sub: "CSE 2101",
        room: "514",
        teacher: "Barisha Chowdhury"
      }
    ]
  },
  G: {
    Sunday: [
      {
        time: "11:10 AM",
        sub: "CSE 2101",
        room: "513",
        teacher: "Barisha Chowdhury"
      },
      {
        time: "12:15 PM",
        sub: "CSE 2105",
        room: "512",
        teacher: "Zannatul Mifta"
      },
      {
        time: "01:50 PM - 04:00 PM",
        sub: "CSE 2102 (Lab)",
        room: "106 DSAL",
        teacher: "Md. Nour Nabi, Barisha Chowdhury"
      }
    ],
    Monday: [
      {
        time: "09:00 AM",
        sub: "ECO 2171",
        room: "311",
        teacher: "Eco New Teacher 4"
      },
      {
        time: "10:05 AM",
        sub: "CSE 2101",
        room: "513",
        teacher: "Barisha Chowdhury"
      },
      {
        time: "11:10 AM",
        sub: "CSE 2103",
        room: "913",
        teacher: "Afroza Islam"
      }
    ],
    Tuesday: [
      {
        time: "09:00 AM",
        sub: "ECO 2171",
        room: "514",
        teacher: "Eco New Teacher 4"
      },
      {
        time: "10:05 AM",
        sub: "MAT 2141",
        room: "913",
        teacher: "CSE New Teacher 3"
      }
    ],
    Wednesday: [
      {
        time: "10:05 AM - 12:15 PM",
        sub: "CSE 2104 (Lab)",
        room: "129 SEL",
        teacher: "Israt Jahan Rinky, Afroza Islam"
      },
      {
        time: "12:15 PM",
        sub: "MAT 2141",
        room: "511",
        teacher: "CSE New Teacher 3"
      },
      {
        time: "01:50 PM",
        sub: "CSE 2106",
        room: "127 EEL",
        teacher: "Mst. Jannatul Ferdous, Zannatul Mifta"
      }
    ],
    Thursday: [
      {
        time: "11:10 AM",
        sub: "CSE 2103",
        room: "314",
        teacher: "Afroza Islam"
      },
      {
        time: "01:50 PM",
        sub: "CSE 2105",
        room: "413",
        teacher: "Zannatul Mifta"
      }
    ]
  }
};
