"use client";


 import dynamic from "next/dynamic";
import Chatbot from "./components/Chatbot";
const Contact = dynamic(() => import("./components/contactPage"), { ssr: false });
const Explore = dynamic(() => import("./components/explore"), { ssr: false });
const HeroSection = dynamic(() => import("./components/HeroSection"), { ssr: false });
const PricingSection = dynamic(() => import("./components/Pricingpage"), { ssr: false });
const Technolgy = dynamic(() => import("./components/technolgy"), { ssr: false });
const QuestionsSection = dynamic(() => import("./components/QuestionsSection"), { ssr: false });
const Analysis = dynamic(() => import("./components/analysis"), { ssr: false });

const Page = () => {
  return (
    <div>
      <HeroSection />
      <Explore />
      <Technolgy />
      <QuestionsSection/>
    <Analysis/>
      <PricingSection />
      <Contact />
      <Chatbot/>
    </div>
  );
};

export default Page;

