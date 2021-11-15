import * as React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout/layout-ko';
import HeroSection from '../components/home-page/01-hero-ko';
import AboutSection from '../components/home-page/02-about-ko';
import ProgramSection from '../components/home-page/03-programs-ko';
import LibrarySection from '../components/home-page/04-library-ko';

const HomePage = () => (
  <div id='home-page'>
    <Layout>
      <Seo title='대화형 라이브러리' />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <LibrarySection />
    </Layout>
  </div>
);

export default HomePage;
