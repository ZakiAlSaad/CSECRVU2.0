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
  "Shamima Ahmad": "01716793242",
  "Sabina Yasmin": "01763237094",
  "Dr. Ahammad Hossain": "01713328537",
  "Arifa Ferdousi": "01770702911",
  "Md. Mizanur Rahman": "01710667328",
  "Umme Rumman": "01756287725",
  "Mst. Jannatul Ferdous": "01795381332",
  "Sumaia Rahman": "01780161781",
  "A.S.M. Delwar Hossain": "01701012413",
  "A.S.M Delwar": "01701012413",
  "Md. Nour Nobi": "01755774070",
  "Nour Nabi": "01755774070",
  "Md. Toufikul Islam": "01701041311",
  "Ayesha Akter Lima": "01950427482",
  "Salma Akter Rima": "01710425436",
  "Sumaiya Tasnim": "01799011979",
  "Shamim Reza": "01921285959",
  "Akib ikbal": "01743172636",
  "Mohammad Faisal Al-Naser": "01404732567",
  "Ahmed-Al-Azmain": "01765388951",
  "Md. Muktar Hossain": "01776300789",
  "Md. Muktar": "01776300789",
  "Tanver Ahmed": "01781949541",
  "Md. Mustafiqur Rahman Mridha": "01706344983",
  "Md. Fatin Ilham": "01616425777",
  "Md. Jamil Choudhury": "01793942198",
  "Md. Shahid Ahammed Shakil": "01766165877",
  "Zannatul Mifta": "01734154559",
  "Arun Kumar Sikder": "01741424226",
  "Sushmit Jahan Rose": "01792774195",
  "Md. Ruhul Amin": "01313529302",
  "Md. Mahfujur Rahman": "01976411722",
  "D.M. Asadijjaman": "01701042718",
  "D. M. Asadijjaman": "01701042718",
  "Pallab Chowdhury": "01774895155",
  "Israt Jahan Rinky": "01710437000",
  "Protik Chakroborty": "01318988313",
  "Shorav Paul": "01834740441",
  "Arshad Wasif": "01858316636",
  "Md. Taufiq Khan": "01952749248",
  "Sadman Rahman Shova": "01648164344",
  "Iffat Farhana": "01765729957",
  "Nafia Islam": "01733331347",
  "MST. NAFIA ISLAM SHISHIR": "01733331347",
  "NAFIA ISLAM SHISHIR": "01733331347",
  "Susmita Paul": "01986850328",
  "Md. Fayzul Islam": "01795035574",
  "Md. Rakibul Islam": "01304172487",
  "Mst. Mazeda Noor Tasnim": "01316026819",
  "Md. Adnan Sami": "01648187304",
  "Adnan Sami": "01648187304",
  "Adrita Alam": "01733331392",
  "Rokaiya Tasnim": "01747805282",
  "Shahara Laila": "0185-2643752",
  "Md. Farhan Tanvir Nasim": "01759-116054",
  "Afroza Islam": "01318-751114",
  "Humayra Tasnim": "01773-303199",
  "Asim Moin Saad": "01774222664",
  "Arifa Khondkar Sania": "01764521084",
  "Zunaira Rassa Bintey Makin": "01829051117",
  "Md. Khalid Sakib": "01722661773",
  "Md. Alamin Hossain Pappu": "01776098594",
  "Alamin Hossain Pappu": "01776098594",
  "Anupoma Barman Shetu": "01704680283",
  "Mohsiul Mumin Atik": "01787-439759",
  "Prof. Dr. Boshir Ahmed": "01713228547",
  "Md. Johirul Islam": "01723216880",
  "Md. Faruk Hossain, Ph.D.": "01756906574",
  "Md. Faisal Rahman Badal": "1763130652",
  "Md. Dr. Mayeedul Islam": "01775093606",
  "Dr. Jewel Hossen": "01515283109",
  "Sanjoy Kumar Chakravarty": "01718604436",
  "Dr. Md. Ekramul Hamid": "01726420004",
  "Dr. Md. Iqbal Aziz Khan": "01712010916",
  "Dr. Jaker Hossain": "01919803395",
  "Dr. Md. Ariful Islam Nahid": "01760174238",
  "Dr. Md. Golam Rashed": "01717515008",
  "Dr. Md. Hamidul Islam": "01714585201",
  "Dr. Md. Abu Baker PK.": "01716386533",
  "Dr. Md. Sherezzaman": "01701712201",
  "Md. Sanaul Haque": "01774314119",
  "Mst. Somapti Akter": "01771180837",
  "Sanjida Sultana Rika": "01861081984",
  "Enamul Haque": "01710056688"
};

const getDemoPhone = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const num = Math.abs(hash).toString().padStart(6, '0').slice(0, 6);
  return `+880 17${num.slice(0,2)}-${num.slice(2)}`;
};

export const getTeacherPhone = (teacherString: string) => {
  const teachers = teacherString.split('&').map(t => t.trim());
  const phones = teachers.map(t => {
    if (teacherPhones[t]) return teacherPhones[t];
    return getDemoPhone(t);
  });
  return phones.join(' & ');
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
