import * as React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout/layout-en';
import HeroSection from '../components/home-page/01-hero-en';
import AboutSection from '../components/home-page/02-about-en';
import ProgramSection from '../components/home-page/03-programs-en';
import LibrarySection from '../components/home-page/04-library-en';

const HomePage = () => (
  <div id='home-page'>
    <Layout>
      <Seo title='An Interactive Library' />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <LibrarySection />
    </Layout>
  </div>
);

export default HomePage;
