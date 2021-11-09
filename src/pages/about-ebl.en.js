import * as React from 'react';
import Layout from '../components/layout/layout-en';
import HeroSection from '../components/about-ebl-page/01-hero-en';
import OurPhilosophySection from '../components/about-ebl-page/02-our-philosophy-en';
import OurEnglishLibrarySection from '../components/about-ebl-page/03-our-english-library-en';
import WhyEnglishLibrarySection from '../components/about-ebl-page/04-why-english-library-en';

const AboutEbl = () => (
  <div id='about-page'>
    <Layout>
      <HeroSection />
      <OurPhilosophySection />
      <OurEnglishLibrarySection />
      <WhyEnglishLibrarySection />
    </Layout>
  </div>
);

export default AboutEbl;
