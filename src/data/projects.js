import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export const projects = [
  {
    id: 1,
    title: "e-MedCare Hub System",
    category: "Full Stack",
    description:
      "A comprehensive healthcare management system that enables patients to book appointments, access medical records, and communicate with healthcare providers. Built with React, Node.js, MongoDB, and Next.js.",
    image: project1,
    tags: ["React", "Node.js", "MongoDB", "Next.js"],
    demo: "https://www.jebarsanthatcroos.xyz/",
    github: "https://github.com/Larksanan/mine-project",
    features: [
      "Patient authentication & authorization",
      "Doctor appointment booking",
      "Electronic medical records",
      "Admin dashboard",
      "Doctor & patient management"
    ]
  },
  {
    id: 2,
    title: "e-MedCare Hub Poster App",
    category: "Web Application",
    description:
      "A web application for creating and managing healthcare awareness posters with a modern interface. Built using Next.js, Firebase, Tailwind CSS, and Framer Motion.",
    image: project2,
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion"],
    demo: "https://poster-app-ten.vercel.app/",
    github: "https://github.com/Larksanan/poster-app",
    features: [
      "Poster creation & editing",
      "Cloud storage with Firebase",
      "Responsive UI",
      "Smooth animations",
      "Easy sharing & management"
    ]
  },
  {
    id: 3,
    title: "EasyNotes",
    category: "Mobile Application",
    description:
      "A lightweight Android note-taking application that allows users to create, edit, organize, and manage notes offline using Room Database. Developed with Kotlin and Android Studio.",
    image: project3,
    tags: ["Kotlin", "Android Studio", "Room Database"],
    demo: "https://play.google.com/store/apps/details?id=com.larksanan.easynotes",
    github: "https://github.com/Larksanan/EasyNotes",
    features: [
      "Create and edit notes",
      "Offline data storage",
      "Search and organize notes",
      "Fast and lightweight",
      "Material Design interface"
    ]
  }
];