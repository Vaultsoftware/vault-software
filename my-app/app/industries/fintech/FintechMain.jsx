'use client'
import React from 'react'
import IndustryMain from '@/app/components/Industryreused/Industrybody' 
import { CreditCard, TrendingUp, Shield, Database, Braces, Cloud, Layers, Brain, BarChart3, Smartphone, Wrench, DollarSign } from 'lucide-react'

// Fintech-specific services
const fintechServices = [
  {
    icon: CreditCard,
    title: "Secure Payment Gateway Development with Advanced Fraud Detection",
    description: "Build robust payment processing systems that handle millions of transactions while maintaining PCI DSS compliance and real-time fraud prevention mechanisms.",
    link: "/services/payment-gateways"
  },
  {
    icon: TrendingUp,
    title: "Scaling Trading Platforms Fast with Offshore Fintech Development Teams",
    description: "Sometimes market opportunities can't wait for lengthy hiring processes. Our offshore trading platform specialists integrate seamlessly to deliver high-frequency trading solutions.",
    link: "/services/offshore-teams"
  },
  {
    icon: Shield,
    title: "Flexible Banking Solutions with Fintech-Centric Staff Augmentation",
    description: "When digital banking projects need specialized compliance expertise or blockchain integration, waiting months for the right talent can cost market position.",
    link: "/services/offshore-teams"
  },
  {
    icon: Brain,
    title: "AI-Powered Risk Assessment and Credit Scoring After Launch",
    description: "Once your fintech platform goes live, intelligent risk management becomes critical. Our ML algorithms continuously learn from transaction patterns.",
    link: "/services/offshore-teams"
  },
  {
    icon: Database,
    title: "Real-Time Analytics Dashboards from Set-Cost Development Teams",
    description: "After fintech product development, regulatory reporting and business intelligence never stop being essential priorities.",
    link: "/services/offshore-teams"
  },
  {
    icon: DollarSign,
    title: "User-Centric Financial Interfaces with Fintech UI/UX Design",
    description: "At Vault, our fintech UI/UX design process focuses on trust, security perception, and seamless user financial journeys.",
    link: "/services/offshore-teams"
  },
  {
    icon: Cloud,
    title: "Compliance-Ready Teams Built for Scalable Fintech App Development",
    description: "We deploy specialized crews for fintech MVP development who understand regulatory requirements from first-draft prototypes to enterprise-grade financial platforms.",
    link: "/services/offshore-teams"
  }
];

// Fintech-specific tech stack
const fintechTechCategories = [
  {
    icon: Database,
    title: "Backend",
    technologies: ["Node.js", "Python", "Java", "Go", "C#"]
  },
  {
    icon: Braces,
    title: "Frontend Languages",
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    technologies: ["PCI DSS", "OAuth 2.0", "JWT", "SSL/TLS", "AES Encryption"]
  },
  {
    icon: Layers,
    title: "Web Frameworks",
    technologies: ["Express.js", "Django", "Spring Boot", "ASP.NET", "Next.js/Nuxt.js"]
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Apache Spark"]
  },
  {
    icon: BarChart3,
    title: "Financial Analytics",
    technologies: ["R", "MATLAB", "Tableau", "Power BI", "Apache Kafka"]
  },
  {
    icon: Database,
    title: "Database Technologies",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "TimescaleDB", "Elasticsearch"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Xamarin"]
  },
  {
    icon: Wrench,
    title: "Payment Processing",
    technologies: ["Stripe", "PayPal", "Plaid", "SWIFT", "Blockchain APIs"]
  }
];

function FintechMain() {
  return (
    <IndustryMain
      industry="Fintech Industry"
      mainTitle="Custom Fintech Development & Financial Technology Solutions by Techling"
      services={fintechServices}
      processTitle="Our Four-Step Roadmap to"
      processImage="/industryOne (2).jpg"
      processImageAlt="Fintech industry process illustration"
      techStackTitle="The Backbone of Fintech Industry"
      techStackDescription="Essential technologies powering modern financial technology solutions"
      techCategories={fintechTechCategories}
    />
  );
}

export default FintechMain