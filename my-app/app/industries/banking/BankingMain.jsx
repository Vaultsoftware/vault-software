'use client'
import React from 'react'
import IndustryMain from '@/app/components/Industryreused/Industrybody' 
import { CreditCard, Shield, TrendingUp, Users, Database, Lock, Clock, BarChart3, Smartphone, Bot, FileCheck, AlertTriangle, Banknote, Building2, Headphones } from 'lucide-react'

const bankingServices = [
  {
    icon: CreditCard,
    title: "Building Secure Digital Banking Platforms with Modern Architecture",
    description: "Vault creates robust digital banking systems that ensure secure transactions and seamless customer experiences across all channels",
    link: "/"
  },
  {
    icon: Shield,
    title: "Implementing AI-Powered Fraud Detection and Risk Management",
    description: "Our advanced machine learning models provide real-time fraud detection and comprehensive risk assessment for financial institutions",
    link: "/services/offshore-teams"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Transaction Monitoring and Analytics Solutions",
    description: "Vault delivers sophisticated monitoring systems that track transactions in real-time and provide actionable insights",
    link: "/services/offshore-teams"
  },
  {
    icon: Users,
    title: "Customer Relationship Management for Financial Services",
    description: "Comprehensive CRM solutions tailored for banks to enhance customer engagement and drive business growth",
    link: "/services/offshore-teams"
  },
  {
    icon: Database,
    title: "Core Banking System Modernization and Migration",
    description: "Seamlessly migrate legacy banking systems to modern, scalable architectures without disrupting operations",
    link: "/services/offshore-teams"
  },
  {
    icon: Lock,
    title: "Regulatory Compliance and Automated Reporting Solutions",
    description: "Ensure full compliance with banking regulations through automated reporting and audit trail systems",
    link: "/services/offshore-teams"
  },
  {
    icon: Clock,
    title: "24/7 Banking Operations Support with Dedicated Teams",
    description: "Round-the-clock technical support and monitoring to ensure uninterrupted banking services for your customers",
    link: "/services/offshore-teams"
  }
];

const bankingTechCategories = [
  {
    icon: Database,
    title: "Backend Technologies",
    technologies: ["Java", "C#", ".NET", "Python", "Spring Boot"]
  },
  {
    icon: Shield,
    title: "Security & Encryption",
    technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "AES Encryption", "PKI"]
  },
  {
    icon: Building2,
    title: "Cloud Platforms",
    technologies: ["AWS Financial Services", "Microsoft Azure", "IBM Cloud", "Oracle Cloud"]
  },
  {
    icon: Lock,
    title: "Compliance & Standards",
    technologies: ["PCI DSS", "SOX", "Basel III", "GDPR", "KYC/AML"]
  },
  {
    icon: Database,
    title: "Database Systems",
    technologies: ["Oracle", "SQL Server", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    icon: Bot,
    title: "AI & Machine Learning",
    technologies: ["TensorFlow", "Python", "Scikit-learn", "Apache Spark", "Fraud Detection APIs"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    technologies: ["Power BI", "Tableau", "QlikView", "SAS", "R"]
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    technologies: ["SWIFT", "ACH", "SEPA", "Stripe", "PayPal APIs"]
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
  },
  {
    icon: FileCheck,
    title: "Integration & APIs",
    technologies: ["REST APIs", "GraphQL", "SOAP", "ESB", "Microservices"]
  }
];

function BankingMain() {
  return (
    <IndustryMain
      industry="Banking & Financial Services"
      mainTitle="Our Digital Solutions for the Banking Industry"
      services={bankingServices}
      processTitle="Banking Workflow Structure"
      processImage="/bankingWorkflow.jpg"
      processImageAlt="Banking Innovation Stack"
      techStackTitle="Banking Technology Stack"
      techStackDescription="For Financial Institutions"
      techCategories={bankingTechCategories}
    />
  );
}

export default BankingMain