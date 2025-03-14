import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { EducationSection } from '../components/EducationSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { SkillsSection } from '../components/SkillsSection';
import { InterestsSection } from '../components/InterestsSection';
import { ContactSection } from '../components/ContactSection';
export const HomePage = () => {
  return <>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <InterestsSection />
      <ContactSection />
    </>;
};