'use client'
import Image from "next/image";
import Banner from "./banner/page";
import Trustedby from "./trustedby/page";
import FeaturedProjects from "./featuredProjects/page";
import Leadership from "./leadership/page"
import SoftwareServices from "./softwareservices/page"
import dynamic from 'next/dynamic';
const About = dynamic(() => import('./about/page'), { ssr: false });
import Industry from "./industry/page"
import Clients from "./clients/page"
import WhyUS from "./whychooseus/page"
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
    <div className="">
      <Banner/>
      <Trustedby/>
      <FeaturedProjects/>
      <SoftwareServices/>
      <About/>  
      <Industry/>
      <Clients/>
      <WhyUS/>
    </div>
  );
}
