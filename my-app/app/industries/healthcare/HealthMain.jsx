'use client'
import React from 'react'
import IndustryMain from '@/app/components/Industryreused/Industrybody' 
import { Stethoscope, HeartPulse, Shield, Database, Braces, Cloud, Layers, Brain, BarChart3, Smartphone, Wrench, AlertCircle } from 'lucide-react'

// Healthcare-specific services
const healthcareServices = [
  {
    icon: Stethoscope,
    title: "HIPAA-Compliant Telemedicine Platforms with Real-Time Patient Monitoring",
    description: "Build secure telehealth solutions that enable remote consultations, patient data management, and continuous health monitoring while maintaining strict compliance standards.",
    link: "/services/telemedicine"
  },
  {
    icon: HeartPulse,
    title: "Scaling Healthcare Teams Fast with Offshore Medical Software Development Squads",
    description: "Sometimes patient care innovation can't wait for lengthy recruitment cycles. Our offshore healthcare development specialists integrate seamlessly with your medical technology team.",
    link: "/services/offshore-teams"
  },
  {
    icon: Shield,
    title: "Flexible Healthcare Solutions with Medical-Centric Staff Augmentation",
    description: "When EHR integration projects need specialized compliance expertise or AI diagnostic features require immediate attention, waiting months for qualified developers can delay patient outcomes.",
    link: "/services/offshore-teams"
  },
  {
    icon: Brain,
    title: "AI-Powered Diagnostic Tools and Predictive Healthcare Analytics After Launch",
    description: "Once your healthcare platform goes live, intelligent patient insights and predictive analytics become critical for improved treatment outcomes.",
    link: "/services/offshore-teams"
  },
  {
    icon: AlertCircle,
    title: "Real-Time Patient Data Management from Set-Cost Healthcare Teams",
    description: "After healthcare product development, continuous patient monitoring and regulatory reporting never stop being mission-critical priorities.",
    link: "/services/offshore-teams"
  },
  {
    icon: HeartPulse,
    title: "Patient-Centric Healthcare Interfaces with Medical UI/UX Design",
    description: "At Vault, our healthcare UI/UX design process centers on accessibility, trust-building, and intuitive patient-provider interactions.",
    link: "/services/offshore-teams"
  },
  {
    icon: Cloud,
    title: "Compliance-Ready Teams Built for Scalable Healthcare App Development",
    description: "We deploy specialized crews for healthcare MVP development who understand HIPAA requirements from first-draft prototypes to enterprise-grade medical platforms.",
    link: "/services/offshore-teams"
  }
];

// Healthcare-specific tech stack
const healthcareTechCategories = [
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
    technologies: ["AWS", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud"]
  },
  {
    icon: Shield,
    title: "Healthcare Compliance",
    technologies: ["HIPAA", "GDPR", "HL7 FHIR", "DICOM", "FDA Validation"]
  },
  {
    icon: Layers,
    title: "Web Frameworks",
    technologies: ["Express.js", "Django", "Spring Boot", "ASP.NET", "Next.js/Nuxt.js"]
  },
  {
    icon: Brain,
    title: "AI & Medical Analytics",
    technologies: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Medical Imaging AI"]
  },
  {
    icon: BarChart3,
    title: "Healthcare Data Visualization",
    technologies: ["D3.js", "Chart.js", "Tableau", "Power BI", "Medical Dashboards"]
  },
  {
    icon: Database,
    title: "Database Technologies",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "AWS HealthLake", "Epic Integration"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Xamarin"]
  },
  {
    icon: Wrench,
    title: "Healthcare Integration",
    technologies: ["HL7 APIs", "Epic MyChart", "Cerner APIs", "Allscripts", "EHR Systems"]
  }
];

function HealthcareMain() {
  return (
    <IndustryMain
      industry="Healthcare Industry"
      mainTitle="Custom Healthcare Development & Medical Technology Solutions by Techling"
      services={healthcareServices}
      processTitle="Our Four-Step Roadmap to"
      processImage="/industryOne (2).jpg"
      processImageAlt="Healthcare industry process illustration"
      techStackTitle="The Backbone of Healthcare Industry"
      techStackDescription="Essential technologies powering modern healthcare and medical software solutions"
      techCategories={healthcareTechCategories}
    />
  );
}

export default HealthcareMain