import * as React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout/layout-en';
import HeroSection from '../components/home-page/hero-en';

const HomePage = () => (
  <Layout>
    <Seo title='Home Page' />
    <HeroSection />
  </Layout>
);

export default HomePage;
