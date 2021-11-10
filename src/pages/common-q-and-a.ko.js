import * as React from 'react';
import Layout from '../components/layout/layout-ko';
import HeroSection from '../components/common-q-and-a-page/01-hero-ko';
import CommonQAndASection from '../components/common-q-and-a-page/02-q-and-a-ko';

const CommonQAndA = () => (
  <div id='q-and-a-page'>
    <Layout>
      <HeroSection />
      <CommonQAndASection />
    </Layout>
  </div>
);

export default CommonQAndA;
