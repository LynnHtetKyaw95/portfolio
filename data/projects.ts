import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "hotel-reservation-admin",
    title: "Hotel Reservation System - Admin Dashboard",
    description:
      "A full-stack hotel management dashboard built with React and Supabase, enabling staff to manage bookings, cabins, guests, and daily operations through a clean and efficient interface.",
    fullDescription:
      "This project is a full-stack hotel management admin dashboard designed to simulate real-world internal hotel operations. It allows staff to manage reservations, monitor room availability, handle guest data, and oversee daily workflows. The application focuses on performance, scalability, and maintainable architecture, using modern React patterns and Supabase as the backend service.",
    stack: [
      "React",
      "React Router",
      "React Query",
      "React Hook Form",
      "Supabase",
      "PostgreSQL",
      "styled-components",
    ],
    image: "/projects/shirin_admindashboard.png",
    liveDemo: "https://shirin-resort.vercel.app/",
    github: "https://github.com/LynnHtetKyaw95/Shirin_Resort",
    overview:
      "A production-style admin dashboard that replicates hotel staff workflows, focusing on data management, system reliability, and clean UI/UX.",
    problem:
      "Many hotel management systems are overly complex, slow, and difficult for staff to use efficiently, especially when handling bookings, guest records, and daily operations.",
    solution:
      "Developed a streamlined admin dashboard with intuitive navigation, real-time data handling, and optimized state management to simplify hotel operations and improve staff productivity.",
    features: [
      "Authentication & User Management",
      "Cabin Management",
      "Booking System",
      "Check-in / Check-out Operations",
      "Dashboard",
      "Guests Management",
      "Settings Management",
    ],
    challenges:
      "Ensuring data consistency during concurrent booking operations and implementing efficient state synchronization between the frontend and Supabase backend.",
  },
  // {
  //   slug: "hotel-reservation-client",
  //   title: "Hotel Reservation System - Customer Application",
  //   description:
  //     "A full-stack hotel booking application built with Next.js and Supabase, allowing users to explore cabins, create accounts, and manage reservations through a seamless and intuitive interface.",
  //   fullDescription:
  //     "This project is a full-stack customer-facing hotel reservation system designed to replicate a real-world booking experience. Users can browse available cabins, view detailed information, create an account, and manage their reservations in advance. The application emphasizes performance, responsive design, and smooth user experience using modern Next.js architecture and Supabase backend services.",
  //   stack: ["Next.js", "Context API", "supabase", "tailwindcss", "Auth.js"],
  //   image: "/projects/shirin_admindashboard.png",
  //   liveDemo: "https://shirin-resort.vercel.app/",
  //   github: "https://github.com/LynnHtetKyaw95/Shirin_Resort",
  //   overview:
  //     "A production-style hotel booking application focused on delivering a smooth user journey, from discovery to reservation management.",
  //   problem:
  //     "Many hotel booking platforms are cluttered and unintuitive, making it difficult for users to quickly find suitable rooms and manage their reservations efficiently.",
  //   solution:
  //     "Developed a clean, responsive booking interface with optimized navigation, clear cabin details, and a streamlined reservation flow to improve usability and user satisfaction.",
  //   features: [
  //     "Browse and explore hotel and cabin listings",
  //     "Detailed cabin pages with availability information",
  //     "User authentication and account management",
  //     "Reservation booking and management",
  //     "User profile and booking history",
  //     "Responsive design for multiple devices",
  //   ],
  //   challenges:
  //     "Handling real-time availability updates and ensuring synchronization between frontend state and Supabase backend during booking operations.",
  // },
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
  // {
  //   slug: "myanmar-car-checker",
  //   title: "Myanmar Car Use Checker",
  //   description:
  //     "A tool that helps drivers check whether their vehicle can be used on a specific date based on Myanmar's even/odd license plate system.",
  //   fullDescription:
  //     "A tool that helps drivers check whether their vehicle can be used on a specific date based on Myanmar's even/odd license plate system.",
  //   stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   image: "/projects/myanmar_car_use.png",
  //   liveDemo: "https://myanmar-cars-use.vercel.app",
  //   github: "https://github.com/LynnHtetKyaw95/myanmar-car-use",
  //   overview:
  //     "A practical utility application that helps Myanmar drivers navigate the country's vehicle restriction system. Users enter their license plate number and date to quickly check if their vehicle is allowed on the road.",
  //   problem:
  //     "Myanmar implements an even/odd license plate system to reduce traffic congestion. Many drivers find it confusing to remember which days their vehicles are restricted.",
  //   solution:
  //     "Created an intuitive interface where users simply enter their plate number and the date to instantly see if they can drive.",
  //   features: [
  //     "Quick plate number input with validation",
  //     "Calendar date picker for checking restrictions",
  //     "Clear visual indication of allowed/blocked days",
  //     "History of recent checks",
  //     "Offline support for quick access",
  //   ],
  //   challenges:
  //     "Handling the date logic correctly accounting for Myanmar's specific holidays and ensuring the application works offline.",
  // },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};
