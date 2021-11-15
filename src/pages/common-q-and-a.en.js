import * as React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout/layout-en';
import HeroSection from '../components/common-q-and-a-page/01-hero-en';
import CommonQAndASection from '../components/common-q-and-a-page/02-q-and-a-en';

const CommonQAndA = () => (
  <div id='q-and-a-page'>
    <Layout>
      <Seo title='Common Q&amp;A' />
      <HeroSection />
      <CommonQAndASection />
    </Layout>
  </div>
);

export default CommonQAndA;
