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
  "A": {
      "Sunday": [
          { time: "10:00 AM", sub: "EEE 1232", room: "127 EEL", teacher: "Ipshita Tasnim Raha & Mehedi Hasan Shakil" },
          { time: "11:00 AM", sub: "EEE 1231", room: "313", teacher: "Ipshita Tasnim Raha" },
          { time: "12:00 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }
      ],
      "Monday": [
          { time: "12:00 PM", sub: "CSE 1201", room: "408", teacher: "Md. Muktar Hossain" }
      ],
      "Tuesday": [
          { time: "11:00 AM", sub: "EEE 1231", room: "1011", teacher: "Ipshita Tasnim Raha" },
          { time: "12:00 PM", sub: "CSE 1203", room: "311", teacher: "Sanjoy Kumar Chakravarty" }
      ],
      "Wednesday": [
          { time: "11:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
          { time: "12:00 PM", sub: "CSE 1201", room: "812", teacher: "Md. Muktar Hossain" },
          { time: "01:30 PM", sub: "MAT 1241", room: "411", teacher: "Md. Mizanur Rahman" }
      ],
      "Thursday": [
          { time: "10:00 AM - 12:00 PM", sub: "CSE 1202 (Lab)", room: "106 DSAL", teacher: "A.S.M Delwar Hossain & Md. Muktar Hossain" },
          { time: "12:00 PM", sub: "CSE 1203", room: "414", teacher: "Sanjoy Kumar Chakravarty" },
          { time: "01:30 PM", sub: "MAT 1241", room: "414", teacher: "Md. Mizanur Rahman" }
      ]
  },
  "B": {
      "Sunday": [
          { time: "10:00 AM", sub: "CSE 1201", room: "313", teacher: "Md. Muktar Hossain" },
          { time: "12:00 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
          { time: "01:30 PM", sub: "EEE 1231", room: "1013", teacher: "Dr. Sinthia Shabnam Mou" }
      ],
      "Monday": [
          { time: "01:30 PM", sub: "MAT 1241", room: "511", teacher: "Md. Mizanur Rahman" }
      ],
      "Tuesday": [
          { time: "10:00 AM - 12:00 PM", sub: "CSE 1202 (Lab)", room: "129 SEL", teacher: "Md. Muktar Hossain & Tanver Ahmed" },
          { time: "12:00 PM", sub: "CSE 1203", room: "414", teacher: "Mehedi Hasan Shakil" }
      ],
      "Wednesday": [
          { time: "11:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
          { time: "12:00 PM", sub: "MAT 1241", room: "814", teacher: "Md. Mizanur Rahman" },
          { time: "01:30 PM", sub: "EEE 1231", room: "511", teacher: "Dr. Sinthia Shabnam Mou" }
      ],
      "Thursday": [
          { time: "09:00 AM", sub: "EEE 1232", room: "130 DSCAL", teacher: "Md. Adnan Sami & Md. Alamin Hossain Pappu" },
          { time: "10:00 AM", sub: "CSE 1203", room: "812", teacher: "Mehedi Hasan Shakil" },
          { time: "11:00 AM", sub: "CSE 1201", room: "311", teacher: "Md. Muktar Hossain" }
      ]
  },
  "C": {
      "Sunday": [
          { time: "09:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }
      ],
      "Monday": [
          { time: "11:00 AM - 01:30 PM", sub: "CSE 1202 (Lab)", room: "129 SEL", teacher: "Mohammad Kasedullah & Md. Muktar Hossain" },
          { time: "01:30 PM", sub: "EEE 1231", room: "413", teacher: "Ipshita Tasnim Raha" }
      ],
      "Tuesday": [
          { time: "11:00 AM", sub: "EEE 1232", room: "130 DSCAL", teacher: "Ipshita Tasnim Raha & Md. Alamin Hossain Pappu" },
          { time: "12:00 PM", sub: "CSE 1201", room: "314", teacher: "Md. Muktar Hossain" },
          { time: "01:30 PM", sub: "CSE 1203", room: "509", teacher: "Umme Rumman" }
      ],
      "Wednesday": [
          { time: "09:00 AM", sub: "CSE 1203", room: "514", teacher: "Umme Rumman" },
          { time: "10:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
          { time: "12:00 PM", sub: "CSE 1201", room: "514", teacher: "Md. Muktar Hossain" },
          { time: "01:30 PM", sub: "MAT 1241", room: "408", teacher: "Md. Mizanur Rahman" }
      ],
      "Thursday": [
          { time: "12:00 PM", sub: "MAT 1241", room: "402", teacher: "Md. Mizanur Rahman" },
          { time: "02:30 PM", sub: "EEE 1231", room: "1012", teacher: "Ipshita Tasnim Raha" }
      ]
  },
  "D": {
      "Sunday": [
          { time: "09:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
          { time: "10:00 AM", sub: "MAT 1241", room: "411", teacher: "Md. Mizanur Rahman" },
          { time: "12:00 PM - 02:30 PM", sub: "CSE 1202 (Lab)", room: "129 SEL", teacher: "Md. Muktar Hossain & Tanver Ahmed" }
      ],
      "Monday": [
          { time: "11:00 AM", sub: "CSE 1201", room: "311", teacher: "Tanver Ahmed" },
          { time: "12:00 PM", sub: "EEE 1231", room: "411", teacher: "Ipshita Tasnim Raha" },
          { time: "01:30 PM", sub: "MAT 1241", room: "414", teacher: "Md. Mizanur Rahman" }
      ],
      "Tuesday": [],
      "Wednesday": [
          { time: "10:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
          { time: "12:00 PM", sub: "CSE 1201", room: "512", teacher: "Tanver Ahmed" },
          { time: "01:30 PM", sub: "CSE 1203", room: "514", teacher: "Umme Rumman" }
      ],
      "Thursday": [
          { time: "12:00 PM", sub: "EEE 1232", room: "130 DSCAL", teacher: "Ipshita Tasnim Raha & Md. Alamin Hossain Pappu" },
          { time: "01:30 PM", sub: "EEE 1231", room: "408", teacher: "Ipshita Tasnim Raha" },
          { time: "02:30 PM", sub: "CSE 1203", room: "512", teacher: "Umme Rumman" }
      ]
  },
  "E": {
      "Sunday": [
          { time: "10:00 AM", sub: "EEE 1231", room: "408", teacher: "Md. Adnan Sami" },
          { time: "12:00 PM", sub: "EEE 1232", room: "130 DSCAL", teacher: "Shorav Paul & Md. Adnan Sami" }
      ],
      "Monday": [
          { time: "09:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
          { time: "01:30 PM", sub: "MAT 1241", room: "814", teacher: "Anupoma Barman Shetu" }
      ],
      "Tuesday": [
          { time: "12:00 PM", sub: "CSE 1201", room: "408", teacher: "Tanver Ahmed" },
          { time: "01:30 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
          { time: "02:30 PM", sub: "CSE 1203", room: "413", teacher: "Mst. Jannatul Ferdous" }
      ],
      "Wednesday": [
          { time: "10:00 AM", sub: "EEE 1231", room: "513", teacher: "Md. Adnan Sami" },
          { time: "11:00 AM", sub: "CSE 1201", room: "408", teacher: "Tanver Ahmed" },
          { time: "12:00 PM", sub: "CSE 1203", room: "1012", teacher: "Mst. Jannatul Ferdous" }
      ],
      "Thursday": [
          { time: "11:00 AM - 01:30 PM", sub: "CSE 1202 (Lab)", room: "128 BCL", teacher: "Mohammad Kasedullah & Tanver Ahmed" },
          { time: "01:30 PM", sub: "MAT 1241", room: "509", teacher: "Anupoma Barman Shetu" }
      ]
  },
  "F": {
      "Sunday": [
          { time: "09:00 AM - 11:00 AM", sub: "CSE 1202 (Lab)", room: "106 DSAL", teacher: "Tanver Ahmed & Mohammad Kasedullah" },
          { time: "12:00 PM", sub: "CSE 1201", room: "1012", teacher: "D. M. Asadujjaman" }
      ],
      "Monday": [
          { time: "09:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
          { time: "11:00 AM", sub: "CSE 1203", room: "408", teacher: "Mst. Jannatul Ferdous" }
      ],
      "Tuesday": [
          { time: "10:00 AM", sub: "EEE 1231", room: "509", teacher: "Md. Adnan Sami" },
          { time: "01:30 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }
      ],
      "Wednesday": [
          { time: "11:00 AM", sub: "EEE 1231", room: "513", teacher: "Md. Adnan Sami" },
          { time: "12:00 PM", sub: "CSE 1203", room: "1011", teacher: "Mst. Jannatul Ferdous" },
          { time: "01:30 PM", sub: "MAT 1241", room: "314", teacher: "Anupoma Barman Shetu" }
      ],
      "Thursday": [
          { time: "11:00 AM", sub: "MAT 1241", room: "311", teacher: "Anupoma Barman Shetu" },
          { time: "12:00 PM", sub: "EEE 1232", room: "127 EEL", teacher: "Shorav Paul & Md. Adnan Sami" },
          { time: "01:30 PM", sub: "CSE 1201", room: "412", teacher: "D. M. Asadujjaman" }
      ]
  },
  "G": {
      "Sunday": [
          { time: "11:00 AM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" },
          { time: "01:30 PM", sub: "CSE 1201", room: "911", teacher: "MST. NAFIA ISLAM SHISHIR" },
          { time: "02:30 PM", sub: "MAT 1241", room: "413", teacher: "Anupoma Barman Shetu" }
      ],
      "Monday": [
          { time: "09:00 AM", sub: "EEE 1231", room: "812", teacher: "Zannatul Mifta" },
          { time: "11:00 AM", sub: "EEE 1232", room: "127 EEL", teacher: "Zannatul Mifta & Md. Adnan Sami" }
      ],
      "Tuesday": [
          { time: "09:00 AM", sub: "CSE 1201", room: "812", teacher: "MST. NAFIA ISLAM SHISHIR" },
          { time: "11:00 AM", sub: "CSE 1203", room: "814", teacher: "Mst. Jannatul Ferdous" },
          { time: "12:00 PM", sub: "MAT 1241", room: "814", teacher: "Anupoma Barman Shetu" }
      ],
      "Wednesday": [
          { time: "10:00 AM", sub: "CSE 1203", room: "514", teacher: "Mst. Jannatul Ferdous" },
          { time: "01:30 PM", sub: "BAN 0001", room: "106", teacher: "Most. Afshara Tasnim Ritu" }
      ],
      "Thursday": [
          { time: "11:00 AM", sub: "EEE 1231", room: "513", teacher: "Zannatul Mifta" },
          { time: "01:30 PM - 03:30 PM", sub: "CSE 1202 (Lab)", room: "129 SEL", teacher: "Md. Nour Nabi & MST. NAFIA ISLAM SHISHIR" }
      ]
  }
};
