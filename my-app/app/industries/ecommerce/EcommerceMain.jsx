'use client'
import React from 'react'
import IndustryMain from '@/app/components/Industryreused/Industrybody' 
import { ShoppingCart, Cpu, Boxes, ChartNoAxesCombined, UsersRound, UserPlus, Rocket, Database, Braces, Cloud, Layers, Brain, BarChart3, Smartphone, Wrench } from 'lucide-react'

const saasServices = [
  {
    icon: ShoppingCart ,
    title: "Crafting Flexible E-Commerce Sites with Modular Web Design",
    description: "To keep up with today's shoppers, Techling builds flexible web systems that drive retail digital transformation",
    link: "/"
  },
  {
    icon: Cpu,
    title: "Enabling Voice and Chat Commerce with LLM-Driven Interfaces",
    description: "Vault now uses LLMs—large language models—to power smart voice and chat checkouts",
    link: "/services/offshore-teams"
  },
  {
    icon: Boxes,
    title: "Real-Time Inventory Optimization Using Data Engineering Workflows",
    description: "Vault builds smart data pipelines that give retailers live snapshots of what is on the shelf,",
    link: "/services/offshore-teams"
  },
  {
    icon: ChartNoAxesCombined,
    title: "Keeping Retail Forecasting Models Fresh with ML Ops",
    description: "Brands going through a digital makeover know they must see future demand as clearly as possible,",
    link: "/services/offshore-teams"
  },
  {
    icon: UsersRound,
    title: "Scaling Retail Tech Delivery with Offshore Agile Teams",
    description: "Vault supplies offshore software development squads so retailers can speed up their digital change.",
    link: "/services/offshore-teams"
  },
  {
    icon: UserPlus,
    title: "Onboarding Retail Tech Talent On-Demand with Staff Augmentation",
    description: "Vault speeds up a retailer's digital makeover by slotting in on-demand specialists through staff-augmented teams.",
    link: "/services/offshore-teams"
  },
  {
    icon: Rocket,
    title: "Backing Up Retail Platforms After Launch with Flat-Rate QA Teams",
    description: "We send in close-knit crews for SaaS MVP development and they're eager to tackle anything from first-draft MVPs to full-blown enterprise launches.",
    link: "/services/offshore-teams"
  }
];


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
      mainTitle="Our Digital Solutions for the Retail Services"
      services={saasServices}
      processTitle="Workflow Structure"
      processImage="/industryOne (2).jpg"
      processImageAlt="Innovation Stack"
      techStackTitle="Innovation Stack"
      techStackDescription="For Retail"
      techCategories={saasTechCategories}
    />
  );
}

export default SaasMain