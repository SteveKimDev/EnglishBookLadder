import * as React from 'react';
import Layout from '../components/layout/layout-ko';
import HeroSection from '../components/about-ebl-page/01-hero-ko';
import OurPhilosophySection from '../components/about-ebl-page/02-our-philosophy-ko';
import OurEnglishLibrarySection from '../components/about-ebl-page/03-our-english-library-ko';
import WhyEnglishLibrarySection from '../components/about-ebl-page/04-why-english-library-ko';
import ExtenVsIntenReadingSection from '../components/about-ebl-page/05-extensive-vs-intensive-ko';

const AboutEbl = () => (
  <div id='about-page'>
    <Layout>
      <HeroSection />
      <OurPhilosophySection />
      <OurEnglishLibrarySection />
      <WhyEnglishLibrarySection />
      <ExtenVsIntenReadingSection />
    </Layout>
  </div>
);

export default AboutEbl;
