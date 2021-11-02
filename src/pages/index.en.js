import * as React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout/layout-en';
import HeroSection from '../components/home-page/01-hero-en';
import AboutSection from '../components/home-page/02-about-en';
import ProgramSection from '../components/home-page/03-programs-en';

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
