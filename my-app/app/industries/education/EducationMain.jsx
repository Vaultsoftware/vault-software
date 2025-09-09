'use client'
import React from 'react'
import IndustryMain from '@/app/components/Industryreused/Industrybody' 
import { GraduationCap, Users, BookOpen, Brain, Monitor, Cloud, Database, Smartphone, BarChart3, Video, Shield, Gamepad2 } from 'lucide-react'

// Education-specific services
const educationServices = [
  {
    icon: GraduationCap,
    title: "AI-Powered Learning Management Systems for Personalized Education",
    description: "Transform traditional learning with intelligent LMS platforms that adapt to individual student needs, providing personalized learning paths and real-time progress tracking.",
    link: "/services/ai-lms"
  },
  {
    icon: Users,
    title: "Scalable EdTech Development Teams for Rapid Product Launch",
    description: "Speed up your educational product development with our dedicated offshore teams who understand the unique challenges of creating engaging learning experiences.",
    link: "/services/offshore-teams"
  },
  {
    icon: BookOpen,
    title: "Interactive Learning Platforms with Gamification & Assessment Tools",
    description: "Build engaging educational platforms that combine interactive content, gamified learning experiences, and comprehensive assessment tools to boost student engagement.",
    link: "/services/interactive-platforms"
  },
  {
    icon: Brain,
    title: "Custom E-Learning Solutions with Advanced Analytics & Reporting",
    description: "Develop tailored e-learning platforms with powerful analytics to track learning outcomes, student progress, and institutional performance metrics.",
    link: "/services/elearning-analytics"
  },
  {
    icon: Monitor,
    title: "Virtual Classroom & Remote Learning Platform Development",
    description: "Create seamless virtual learning environments with video conferencing, collaborative tools, and real-time interaction capabilities for modern education needs.",
    link: "/services/virtual-classroom"
  },
  {
    icon: Cloud,
    title: "Cloud-Based Educational Infrastructure & Student Information Systems",
    description: "Build robust, scalable educational infrastructure that handles everything from student records to course management with enterprise-grade security.",
    link: "/services/cloud-infrastructure"
  },
  {
    icon: Database,
    title: "Educational Data Management & Compliance-Ready Solutions",
    description: "Ensure your educational platform meets FERPA, COPPA, and other regulatory requirements while efficiently managing student data and institutional records.",
    link: "/services/data-compliance"
  }
];

// Education-specific tech stack
const educationTechCategories = [
  {
    icon: Database,
    title: "Backend Development",
    technologies: ["Node.js", "Python", "Java", "C#", "Ruby on Rails"]
  },
  {
    icon: Monitor,
    title: "Frontend Technologies",
    technologies: ["React", "Vue.js", "Angular", "TypeScript", "HTML5/CSS3"]
  },
  {
    icon: Cloud,
    title: "Cloud & Hosting",
    technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Heroku", "Firebase"]
  },
  {
    icon: Video,
    title: "Video & Communication",
    technologies: ["WebRTC", "Zoom SDK", "Agora", "Twilio", "Jitsi Meet"]
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Natural Language Processing", "Computer Vision"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    technologies: ["Google Analytics", "Mixpanel", "Tableau", "Power BI", "Custom Dashboards"]
  },
  {
    icon: Database,
    title: "Database Systems",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Progressive Web Apps"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    technologies: ["FERPA Compliance", "OAuth 2.0", "SSL/TLS", "Data Encryption", "COPPA Standards"]
  },
  {
    icon: Gamepad2,
    title: "Interactive Learning",
    technologies: ["Unity", "Phaser.js", "Three.js", "AR/VR Tools", "Gamification Frameworks"]
  }
];

function EducationMain() {
  return (
    <IndustryMain
      industry="Education Industry"
      mainTitle="Custom EdTech Development & Learning Platform Solutions by Techling"
      services={educationServices}
      processTitle="Our Four-Step Roadmap to"
      processImage="/education.jpeg"
      processImageAlt="Education industry process illustration"
      techStackTitle="The Foundation of Modern EdTech"
      techStackDescription="Cutting-edge technologies powering the future of digital education and learning platforms"
      techCategories={educationTechCategories}
    />
  );
}

export default EducationMain