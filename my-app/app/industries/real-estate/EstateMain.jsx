'use client'
import React from 'react'
import IndustryMain from '@/app/components/Industryreused/Industrybody' 
import { Home, Search, Camera, TrendingUp, Users, Database, Braces, Cloud, Layers, Brain, BarChart3, Smartphone, Wrench, MapPin, FileText } from 'lucide-react'

// Real Estate-specific services
const estateServices = [
  {
    icon: Home,
    title: "Comprehensive Property Management Platforms with Automated Workflows",
    description: "Build robust property management systems that handle tenant screening, lease management, maintenance requests, and rent collection with seamless automation.",
    link: "/services/property-management"
  },
  {
    icon: Camera,
    title: "Virtual Tour and 3D Property Visualization Solutions",
    description: "Create immersive virtual property experiences with 360-degree tours, augmented reality features, and interactive floor plans that enhance remote property viewing.",
    link: "/services/offshore-teams"
  },
  {
    icon: Search,
    title: "AI-Powered Property Search and Recommendation Engines",
    description: "Implement intelligent property matching systems that use machine learning to connect buyers with their ideal properties based on preferences and behavior patterns.",
    link: "/services/offshore-teams"
  },
  {
    icon: TrendingUp,
    title: "Real Estate Market Analytics and Property Valuation Tools",
    description: "Deploy sophisticated analytics platforms that provide accurate property valuations, market trends, and investment insights for informed decision-making.",
    link: "/services/offshore-teams"
  },
  {
    icon: Users,
    title: "CRM Systems for Real Estate Agents and Brokerages",
    description: "Streamline client relationships with specialized CRM solutions designed for real estate professionals, featuring lead management and transaction tracking.",
    link: "/services/offshore-teams"
  },
  {
    icon: MapPin,
    title: "Location-Based Services and Smart Mapping Solutions",
    description: "Integrate advanced mapping technologies with neighborhood analytics, school district information, and local amenity data for comprehensive property insights.",
    link: "/services/offshore-teams"
  },
  {
    icon: FileText,
    title: "Digital Document Management and E-Signature Solutions",
    description: "Digitize the entire real estate transaction process with secure document storage, electronic signatures, and automated compliance workflows.",
    link: "/services/offshore-teams"
  }
];

// Real Estate-specific tech stack
const estateTechCategories = [
  {
    icon: Database,
    title: "Backend Technologies",
    technologies: ["Node.js", "Python", "Java", "PHP", "Ruby on Rails"]
  },
  {
    icon: Braces,
    title: "Frontend Languages",
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React"]
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud Platform", "DigitalOcean"]
  },
  {
    icon: MapPin,
    title: "Mapping & Location",
    technologies: ["Google Maps API", "Mapbox", "OpenStreetMap", "ArcGIS", "Leaflet"]
  },
  {
    icon: Layers,
    title: "Web Frameworks",
    technologies: ["Express.js", "Django", "Spring Boot", "Laravel", "Next.js"]
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    technologies: ["TensorFlow", "Scikit-learn", "OpenCV", "Natural Language Processing", "Computer Vision"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    technologies: ["D3.js", "Chart.js", "Tableau", "Power BI", "Google Analytics"]
  },
  {
    icon: Database,
    title: "Database Technologies",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"]
  },
  {
    icon: Camera,
    title: "Media & Visualization",
    technologies: ["Three.js", "WebRTC", "FFmpeg", "Cloudinary", "AWS S3"]
  }
];

function EstateMain() {
  return (
    <IndustryMain
      industry="Real Estate & PropTech"
      mainTitle="Custom Real Estate Development & Property Technology Solutions by Techling"
      services={estateServices}
      processTitle="Our Four-Step Roadmap to"
      processImage="/bg-real-estate.jpg"
      processImageAlt="Real Estate industry process illustration"
      techStackTitle="The Backbone of PropTech Industry"
      techStackDescription="Essential technologies powering modern real estate and property management solutions"
      techCategories={estateTechCategories}
    />
  );
}

export default EstateMain