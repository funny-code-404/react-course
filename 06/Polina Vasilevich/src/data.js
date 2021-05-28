import img1 from "./assets/img/avatars/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg";
import img2 from "./assets/img/avatars/rahabi-khan-c_Hp4mWOKgM-unsplash.jpg";
import img3 from "./assets/img/avatars/omid-armin-6G2G6_rq-B0-unsplash.jpg";
import img4 from "./assets/img/avatars/marie-michele-bouchard-8d-1HViXfdk-unsplash.jpg";
import img5 from "./assets/img/avatars/dollar-gill-W5pPtb05rMg-unsplash.jpg";

export const routes = [
  {
    path: "/contacts",
    label: "Contacts",
  },

  {
    path: "/numbers",
    label: "Phone numbers",
  },
];

export const data = [
  {
    id: "01",
    name: "Kevin",
    phone: "+447070628461",
    photo: img1,
    friends: [
      {
        id: "011",
        name: "Linda",
        phone: "+447077083505",
        photo: img3,
      },
      {
        id: "012",
        name: "Thomas",
        phone: "+447077075583",
        photo: img2,
      },
      {
        id: "013",
        name: "Sarah",
        phone: "+447092865443",
        photo: img5,
      },
    ],
    recentCallsList: ["+447092865443", "+447077083505", "+447077075583"],
  },
  {
    id: "02",
    name: "Thomas",
    phone: "+447077075583",
    photo: img2,
    friends: [
      {
        id: "021",
        name: "Kevin",
        phone: "+447070628461",
        photo: img1,
      },
      {
        id: "022",
        name: "Linda",
        phone: "+447077083505",
        photo: img3,
      },
      {
        id: "023",
        name: "Robin",
        phone: "+447092812327",
        photo: img4,
      },
    ],
    recentCallsList: ["+447077083505", "+447092812327", "+447070628461"],
  },
  {
    id: "03",
    name: "Linda",
    phone: "+447077083505",
    photo: img3,
    friends: [
      {
        id: "031",
        name: "Kevin",
        phone: "+447070628461",
        photo: img1,
      },
      {
        id: "032",
        name: "Thomas",
        phone: "+447077075583",
        photo: img2,
      },
      {
        id: "033",
        name: "Sarah",
        phone: "+447092865443",
        photo: img5,
      },
    ],
    recentCallsList: ["+447077075583", "+447092865443", "+447070628461"],
  },
  {
    id: "04",
    name: "Robin",
    phone: "+447092812327",
    photo: img4,
    friends: [
      {
        id: "041",
        name: "Thomas",
        phone: "+447077075583",
        photo: img2,
      },
      {
        id: "042",
        name: "Sarah",
        phone: "+447092865443",
        photo: img5,
      },
    ],
    recentCallsList: ["+447077075583", "+447092865443"],
  },
  {
    id: "05",
    name: "Sarah",
    phone: "+447092865443",
    photo: img5,
    friends: [
      {
        id: "051",
        name: "Kevin",
        phone: "+447070628461",
        photo: img1,
      },
      {
        id: "052",
        name: "Linda",
        phone: "+447077083505",
        photo: img3,
      },
      {
        id: "053",
        name: "Robin",
        phone: "+447092812327",
        photo: img4,
      },
    ],
    recentCallsList: ["+447070628461", "+447092812327", "+447077083505"],
  },
];
