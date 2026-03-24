import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "hotel-reservation",
    title: "Hotel Reservation System (Admin Dashboard)",
    description:
      "A modern full-stack hotel management dashboard built with React and Supabase, designed for hotel staff to manage bookings, cabins, and daily operations efficiently.",
    fullDescription:
      "A booking platform where users can search hotels, check room availability, and make reservations.",
    stack: ["React", "Supabase", "PostgreSQL", "styled-components"],
    image: "/projects/shirin_admin.png",
    liveDemo: "https://shirin-resort.vercel.app/",
    github: "https://github.com/LynnHtetKyaw95/Shirin_Resort",
    overview:
      "This project simulates a real-world hotel admin system, focusing on usability, scalability, and clean architecture.",
    problem:
      "Traditional hotel booking systems are often complex and cluttered. Users need a simple, intuitive way to find and book hotels.",
    solution:
      "Built a modern, user-friendly interface with powerful search filters and a seamless booking flow.",
    features: [
      "Authentication & User Management",
      "Cabin Management",
      "Booking System",
      "Check-in / Check-out Operations",
      "Dashboard",
      "Settings Management",
    ],
    challenges:
      "Implementing real-time availability checking and handling concurrent booking requests while maintaining data consistency.",
  },
  // {
  //   slug: "kanji-kensaku",
  //   title: "Kanji Kensaku",
  //   description:
  //     "A web application that allows users to search and explore Japanese kanji characters and learning information.",
  //   fullDescription:
  //     "A web application that allows users to search and explore Japanese kanji characters and learning information.",
  //   stack: ["React", "TypeScript", "Tailwind CSS"],
  //   image: "/projects/kanji_kensaku.png",
  //   liveDemo: "https://kanji-kensaku.vercel.app",
  //   github: "https://github.com/LynnHtetKyaw95/KanjiKensaku",
  //   overview:
  //     "Kanji Kensaku is a comprehensive tool for learning Japanese kanji characters. Users can search for kanji by meaning, reading, or stroke count, and access detailed information including on-yomi and kun-yomi readings, meanings, and example words.",
  //   problem:
  //     "Learning kanji can be challenging for Japanese language learners. Existing dictionaries are often cluttered with ads or lack user-friendly search features.",
  //   solution:
  //     "Built a clean, minimalist interface with powerful search capabilities and detailed kanji information display.",
  //   features: [
  //     "Search kanji by meaning, reading, or stroke count",
  //     "Detailed kanji information with multiple readings",
  //     "Example words and vocabulary for each kanji",
  //     "Favorites system for saving learned kanji",
  //     "Responsive design for mobile and desktop",
  //   ],
  //   challenges:
  //     "Implementing efficient search algorithms and handling the large dataset of kanji characters while maintaining fast load times.",
  // },
  {
    slug: "myanmar-car-checker",
    title: "Myanmar Car Use Checker",
    description:
      "A tool that helps drivers check whether their vehicle can be used on a specific date based on Myanmar's even/odd license plate system.",
    fullDescription:
      "A tool that helps drivers check whether their vehicle can be used on a specific date based on Myanmar's even/odd license plate system.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/myanmar_car_use.png",
    liveDemo: "https://myanmar-cars-use.vercel.app",
    github: "https://github.com/LynnHtetKyaw95/myanmar-car-use",
    overview:
      "A practical utility application that helps Myanmar drivers navigate the country's vehicle restriction system. Users enter their license plate number and date to quickly check if their vehicle is allowed on the road.",
    problem:
      "Myanmar implements an even/odd license plate system to reduce traffic congestion. Many drivers find it confusing to remember which days their vehicles are restricted.",
    solution:
      "Created an intuitive interface where users simply enter their plate number and the date to instantly see if they can drive.",
    features: [
      "Quick plate number input with validation",
      "Calendar date picker for checking restrictions",
      "Clear visual indication of allowed/blocked days",
      "History of recent checks",
      "Offline support for quick access",
    ],
    challenges:
      "Handling the date logic correctly accounting for Myanmar's specific holidays and ensuring the application works offline.",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};
