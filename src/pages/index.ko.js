import * as React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout/layout-ko';
import HeroSection from '../components/home-page/hero-ko';

const HomePage = () => (
  <Layout>
    <Seo title='Home Page' />
    <HeroSection />
  </Layout>
);

export default HomePage;
