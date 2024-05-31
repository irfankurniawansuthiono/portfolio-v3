const certificateList = [
  {
    id: 1,
    from: "IDCamp 2023",
    title: "Belajar Dasar Pemrograman Web",
    img: "/home/certificates/certificate_1.webp",
    altImg: "Certificate 1",
    dateObtained: "2023-09-13",
  },
  {
    id: 2,
    from: "IDCamp 2023",
    title: "Belajar Dasar Pemrograman JavaScript",
    img: "/home/certificates/certificate_2.webp",
    altImg: "Certificate 2",
    dateObtained: "2023-09-15",
  },
  {
    id: 3,
    from: "IDCamp 2023",
    title: "Belajar Membuat Front-End Web untuk Pemula",
    img: "/home/certificates/certificate_3.webp",
    altImg: "Certificate 3",
    dateObtained: "2023-09-16",
  },
  {
    id: 4,
    from: "IDCamp 2023",
    title: "Belajar Membuat Aplikasi Web dengan React",
    img: "/home/certificates/certificate_4.webp",
    altImg: "Certificate 4",
    dateObtained: "2023-09-23",
  },
  {
    id: 5,
    from: "IDCamp 2023",
    title: "Belajar Fundamental Aplikasi Web dengan React",
    img: "/home/certificates/certificate_5.webp",
    altImg: "Certificate 5",
    dateObtained: "2023-12-25",
  },
  {
    id: 6,
    from: "Alibaba ECS",
    title: "Deploy MySQL Database on an ECS",
    img: "/home/certificates/certificate_6.webp",
    altImg: "Certificate 6",
    dateObtained: "2024-01-03",
  },
  {
    id: 7,
    from: "CODEPOLITAN",
    title: "Belajar Dasar HTML",
    img: "/home/certificates/certificate_7.webp",
    altImg: "Certificate 7",
    dateObtained: "2024-02-15",
  },
  {
    id: 8,
    from: "CODEPOLITAN",
    title: "Belajar Dasar CSS",
    img: "/home/certificates/certificate_8.webp",
    altImg: "Certificate 8",
    dateObtained: "2024-02-15",
  },
  {
    id: 9,
    from: "CODEPOLITAN",
    title: "Belajar Bootstrap CSS Framework",
    img: "/home/certificates/certificate_9.webp",
    altImg: "Certificate 9",
    dateObtained: "2024-02-15",
  },
  {
    id: 10,
    from: "CODEPOLITAN",
    title: "Belajar Dasar JavaScript",
    img: "/home/certificates/certificate_10.webp",
    altImg: "Certificate 10",
    dateObtained: "2024-02-16",
  },
  {
    id: 11,
    from: "CODEPOLITAN",
    title: "Belajar JavaScript DOM",
    img: "/home/certificates/certificate_11.webp",
    altImg: "Certificate 11",
    dateObtained: "2024-02-18",
  },
  {
    id: 12,
    from: "CODEPOLITAN",
    title: "Belajar JavaScript Asynchronous",
    img: "/home/certificates/certificate_12.webp",
    altImg: "Certificate 12",
    dateObtained: "2024-02-18",
  },
  {
    id: 13,
    from: "CODEPOLITAN",
    title: "Belajar AJAX dan Web API",
    img: "/home/certificates/certificate_13.webp",
    altImg: "Certificate 13",
    dateObtained: "2024-02-18",
  },
  {
    id: 14,
    from: "CODEPOLITAN",
    title: "Belajar Konsep OOP di JavaScript",
    img: "/home/certificates/certificate_14.webp",
    altImg: "Certificate 14",
    dateObtained: "2024-02-20",
  },
  {
    id: 15,
    from: "CODEPOLITAN",
    title: "Belajar Cepat VueJS",
    img: "/home/certificates/certificate_15.webp",
    altImg: "Certificate 15",
    dateObtained: "2024-02-20",
  },
  {
    id: 16,
    from: "CODEPOLITAN",
    title: "Belajar Dasar NodeJS dan NPM",
    img: "/home/certificates/certificate_16.webp",
    altImg: "Certificate 16",
    dateObtained: "2024-02-21",
  },
  {
    id: 17,
    from: "CODEPOLITAN",
    title: "Belajar Dasar ExpressJS",
    img: "/home/certificates/certificate_17.webp",
    altImg: "Certificate 17",
    dateObtained: "2024-02-22",
  },
  {
    id: 18,
    from: "CODEPOLITAN",
    title: "Belajar ExpressJS dan EJS",
    img: "/home/certificates/certificate_18.webp",
    altImg: "Certificate 18",
    dateObtained: "2024-02-22",
  },
  {
    id: 19,
    from: "CODEPOLITAN",
    title: "Belajar RESTful dengan ExpressJS",
    img: "/home/certificates/certificate_19.webp",
    altImg: "Certificate 19",
    dateObtained: "2024-02-22",
  },
  {
    id: 20,
    from: "CODEPOLITAN",
    title: "Belajar MongoDB",
    img: "/home/certificates/certificate_20.webp",
    altImg: "Certificate 20",
    dateObtained: "2024-02-23",
  },
  {
    id: 21,
    from: "CODEPOLITAN",
    title: "Belajar MongoDB di JavaScript",
    img: "/home/certificates/certificate_21.webp",
    altImg: "Certificate 21",
    dateObtained: "2024-02-23",
  },
  {
    id: 22,
    from: "CODEPOLITAN",
    title: "Belajar ExpressJS dengan MongoDB",
    img: "/home/certificates/certificate_22.webp",
    altImg: "Certificate 22",
    dateObtained: "2024-02-26",
  },
  {
    id: 23,
    from: "CODEPOLITAN",
    title: "Belajar Implementasi Middleware pada ExpressJS",
    img: "/home/certificates/certificate_23.webp",
    altImg: "Certificate 23",
    dateObtained: "2024-02-27",
  },
  {
    id: 24,
    from: "CODEPOLITAN",
    title: "Belajar Implementasi Error Handler di ExpressJS dan Mongoose",
    img: "/home/certificates/certificate_24.webp",
    altImg: "Certificate 24",
    dateObtained: "2024-02-27",
  },
  {
    id: 25,
    from: "CODEPOLITAN",
    title: "Belajar Relasi Data di MongoDB",
    img: "/home/certificates/certificate_25.webp",
    altImg: "Certificate 25",
    dateObtained: "2024-02-28",
  },
  {
    id: 26,
    from: "CODEPOLITAN",
    title: "Belajar Implementasi Relasi Database MongoDB di ExpressJS",
    img: "/home/certificates/certificate_26.webp",
    altImg: "Certificate 26",
    dateObtained: "2024-02-28",
  },
  {
    id: 27,
    from: "CODEPOLITAN",
    title: "Manajemen Route dan Cookies di ExpressJS",
    img: "/home/certificates/certificate_27.webp",
    altImg: "Certificate 27",
    dateObtained: "2024-02-29",
  },
  {
    id: 28,
    from: "CODEPOLITAN",
    title: "Manajemen Hot Data dengan Session di ExpressJS",
    img: "/home/certificates/certificate_28.webp",
    altImg: "Certificate 28",
    dateObtained: "2024-02-29",
  },
  {
    id: 29,
    from: "CODEPOLITAN",
    title: "Belajar Konsep Auth dan Implementasi di Express.js",
    img: "/home/certificates/certificate_29.webp",
    altImg: "Certificate 29",
    dateObtained: "2024-03-03",
  },
  {
    id: 30,
    from: "IDCAMP 2023",
    title: "Kelulusan IDCAMP 2023 - Level Intermediate",
    img: "/home/certificates/certificate_30.webp",
    altImg: "Certificate 30",
    dateObtained: "2024-02-08",
  },
   {
    id: 31,
    from: "DBS FOUNDATION X DICODING",
    title: "Belajar Dasar Visualisasi Data",
    img: "/home/certificates/certificate_31.webp",
    altImg: "Certificate 31",
    dateObtained: "2024-05-30",
  },
   {
    id: 32,
    from: "DBS FOUNDATION X DICODING",
    title: "Memulai Pemrograman dengan Python",
    img: "/home/certificates/certificate_32.webp",
    altImg: "Certificate 32",
    dateObtained: "2024-05-31",
  },
];

export default certificateList;
