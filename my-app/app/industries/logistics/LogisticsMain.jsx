'use client'
import React from 'react'
import IndustryMain from '@/app/components/Industryreused/Industrybody' 
import { Truck, MapPin, Package, Database, Braces, Cloud, Layers, Brain, BarChart3, Smartphone, Wrench, Route } from 'lucide-react'

// Logistics-specific services
const logisticsServices = [
  {
    icon: Truck,
    title: "Real-Time Fleet Management Systems with GPS Tracking and Route Optimization",
    description: "Build comprehensive fleet management platforms that track vehicles in real-time, optimize delivery routes, and reduce operational costs through intelligent logistics automation.",
    link: "/services/fleet-management"
  },
  {
    icon: MapPin,
    title: "Scaling Logistics Teams Fast with Offshore Supply Chain Development Squads",
    description: "Sometimes supply chain disruptions can't wait for traditional hiring cycles. Our offshore logistics development specialists integrate seamlessly with your existing operations team.",
    link: "/services/offshore-teams"
  },
  {
    icon: Package,
    title: "Flexible Warehouse Solutions with Logistics-Centric Staff Augmentation",
    description: "When inventory management systems need IoT integration or last-mile delivery platforms require immediate scaling, waiting months for specialized developers can impact customer satisfaction.",
    link: "/services/offshore-teams"
  },
  {
    icon: Route,
    title: "AI-Powered Supply Chain Analytics and Predictive Logistics After Launch",
    description: "Once your logistics platform goes live, intelligent demand forecasting and supply chain optimization become critical for maintaining competitive advantage.",
    link: "/services/offshore-teams"
  },
  {
    icon: Brain,
    title: "Real-Time Shipment Tracking Dashboards from Set-Cost Logistics Teams",
    description: "After logistics product development, continuous shipment visibility and delivery performance monitoring never stop being operational priorities.",
    link: "/services/offshore-teams"
  },
  {
    icon: Truck,
    title: "Driver-Friendly Logistics Interfaces with Transportation UI/UX Design",
    description: "At Vault, our logistics UI/UX design process focuses on simplicity, mobile-first design, and seamless driver-dispatcher communication workflows.",
    link: "/services/offshore-teams"
  },
  {
    icon: Cloud,
    title: "Scalability-Ready Teams Built for Enterprise Logistics App Development",
    description: "We deploy specialized crews for logistics MVP development who understand supply chain complexities from first-draft prototypes to enterprise-grade transportation platforms.",
    link: "/services/offshore-teams"
  }
];

// Logistics-specific tech stack
const logisticsTechCategories = [
  {
    icon: Database,
    title: "Backend",
    technologies: ["Node.js", "Python", "Java", "C#", "Go"]
  },
  {
    icon: Braces,
    title: "Frontend Languages",
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Oracle Cloud"]
  },
  {
    icon: MapPin,
    title: "Tracking & GPS Systems",
    technologies: ["Google Maps API", "Mapbox", "GPS Tracking", "Geofencing", "Real-time Location"]
  },
  {
    icon: Layers,
    title: "Web Frameworks",
    technologies: ["Express.js", "Django", "Spring Boot", "ASP.NET", "Next.js/Nuxt.js"]
  },
  {
    icon: Brain,
    title: "AI & Route Optimization",
    technologies: ["TensorFlow", "Machine Learning", "Route Algorithms", "Predictive Analytics", "Demand Forecasting"]
  },
  {
    icon: BarChart3,
    title: "Logistics Analytics",
    technologies: ["D3.js", "Chart.js", "Tableau", "Power BI", "Supply Chain Dashboards"]
  },
  {
    icon: Database,
    title: "Database Technologies",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "InfluxDB", "Apache Kafka"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Xamarin"]
  },
  {
    icon: Wrench,
    title: "Logistics Integration",
    technologies: ["EDI Systems", "WMS APIs", "TMS Integration", "ERP Connectors", "IoT Sensors"]
  }
];

function LogisticsMain() {
  return (
    <IndustryMain
      industry="Logistics Industry"
      mainTitle="Custom Logistics Development & Supply Chain Technology Solutions by Techling"
      services={logisticsServices}
      processTitle="Our Four-Step Roadmap to"
      processImage="/industryOne (2).jpg"
      processImageAlt="Logistics industry process illustration"
      techStackTitle="The Backbone of Logistics Industry"
      techStackDescription="Essential technologies powering modern supply chain and transportation solutions"
      techCategories={logisticsTechCategories}
    />
  );
}

export default LogisticsMain