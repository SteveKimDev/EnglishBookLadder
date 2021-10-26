import * as React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import HeroSection from '../components/home-page/hero';

const HomePage = () => (
  <Layout>
    <SEO title='An Interactive Library: Read | Listen | Discuss' />
    <HeroSection />
  </Layout>
);

export default HomePage;
