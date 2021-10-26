import * as React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout/layout';
import HeroSection from '../components/home-page/hero';

const HomePage = () => (
  <Layout>
    <Seo title='English Book Ladder' />
    <HeroSection />
  </Layout>
);

export default HomePage;
