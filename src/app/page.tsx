"use client";
import ContactForm from "@/components/contactform/ContactForm";
import LandingPage from "@/components/landingpage/LandingPage";
import NavBar from "@/components/navbar/navbar";
import ProjectCard from "@/components/projectcards/ProjectCard";
import SkillCard from "@/components/skillcards/SkillCard";

export default function Home() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <SkillCard id="skills"/>
      <ProjectCard id="projects"/>
      <ContactForm id="contact"/>
    </>
  );
}
