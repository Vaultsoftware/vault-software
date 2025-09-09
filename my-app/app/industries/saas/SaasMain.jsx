'use client'
import React from 'react'
import IndustryMain from '@/app/components/Industryreused/Industrybody' 
import { BrainCircuit, CircleUserRound, Globe, Database, Braces, Cloud, Layers, Brain, BarChart3, Smartphone, Wrench } from 'lucide-react'

// SaaS-specific services
const saasServices = [
  {
    icon: BrainCircuit,
    title: "Continuous Learning Pipelines with ML Ops for Predictive SaaS Tools",
    description: "After successful SaaS product development never waits for problems to appear. Our ML Ops solutions ensure your predictive tools continuously learn and adapt to deliver better insights.",
    link: "/services/ml-ops"
  },
  {
    icon: CircleUserRound,
    title: "Scaling Product Teams Fast with Offshore SaaS Development Squads",
    description: "Sometimes speed matters more than filling every desk at HQ. To keep the pace and protect your core crew, our offshore development squads integrate seamlessly with your existing team.",
    link: "/services/offshore-teams"
  },
  {
    icon: Globe,
    title: "Flexible Talent Access with SaaS-Centric Staff Augmentation",
    description: "When a project swells or an MVP needs a final push, waiting weeks for new full-time hires can kill momentum.",
    link: "/services/offshore-teams"
  },
  {
    icon: Globe,
    title: "Dependable QA Coverage and a Clear Budget for Testing After Launch",
    description: "Once an app goes live, keeping it steady is critical. Teaching fields flat-fee QA squads that track,",
    link: "/services/offshore-teams"
  },
  {
    icon: Globe,
    title: "Fresh-Launch Backing from Set-Cost Quality Teams",
    description: "After SaaS product development, the bar for quality never drops.",
    link: "/services/offshore-teams"
  },
  {
    icon: Globe,
    title: "User-First Product Interfaces with SaaS UI/UX Design",
    description: "At Vault, our SaaS UI/UX design process centers on ease, logic, and engagement.",
    link: "/services/offshore-teams"
  },
  {
    icon: Globe,
    title: "Commitment-Led Teams Built for Scalable SaaS App Development",
    description: "We send in close-knit crews for SaaS MVP development and they're eager to tackle anything from first-draft MVPs to full-blown enterprise launches.",
    link: "/services/offshore-teams"
  }
];

// SaaS-specific tech stack
const saasTechCategories = [
  {
    icon: Database,
    title: "Backend",
    technologies: ["Node.js", "Python", "Java", "PHP", "Ruby"]
  },
  {
    icon: Braces,
    title: "Frontend Languages",
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud Platform", "DigitalOcean"]
  },
  {
    icon: Cloud,
    title: "Software Architectures",
    technologies: ["Microservices", "Monolithic", "Serverless", "Event-Driven"]
  },
  {
    icon: Layers,
    title: "Web Frameworks",
    technologies: ["Express.js", "Django", "Spring Boot", "Laravel", "Next.js/Nuxt.js"]
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    technologies: ["TensorFlow", "Python", "Pandas", "Scikit-learn", "OpenCV"]
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    technologies: ["D3.js", "Chart.js", "Highcharts", "Tableau"]
  },
  {
    icon: Database,
    title: "Database Technologies",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Xamarin"]
  },
  {
    icon: Wrench,
    title: "Development Tools",
    technologies: ["Visual Studio Code", "Git/GitLab", "Postman"]
  }
];

function SaasMain() {
  return (
    <IndustryMain
      industry="SaaS Industry"
      mainTitle="Custom SaaS Product Development & Scaling Solutions by Techling"
      services={saasServices}
      processTitle="Our Four-Step Roadmap to"
      processImage="/industryOne (2).jpg"
      processImageAlt="SaaS industry process illustration"
      techStackTitle="The Backbone of SaaS Industry"
      techStackDescription="Essential technologies powering modern software-as-a-service solutions"
      techCategories={saasTechCategories}
    />
  );
}

export default SaasMain