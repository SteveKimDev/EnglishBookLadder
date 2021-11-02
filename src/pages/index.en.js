import * as React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout/layout-en';
import HeroSection from '../components/home-page/hero-en';

const HomePage = () => (
  <div id='home-page'>
    <Layout>
      <Seo title='Home Page' />
      <HeroSection />
    </Layout>
  </div>
);

export default HomePage;
