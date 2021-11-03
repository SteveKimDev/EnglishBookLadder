import * as React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout/layout-ko';
import HeroSection from '../components/home-page/01-hero-ko';
import AboutSection from '../components/home-page/02-about-ko';
import ProgramSection from '../components/home-page/03-programs-ko';

const HomePage = () => (
  <div id='home-page'>
    <Layout>
      <Seo title='Home Page' />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
    </Layout>
  </div>
);

export default HomePage;
