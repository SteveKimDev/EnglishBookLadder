import * as React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout/layout-ko';
import HeroSection from '../components/common-q-and-a-page/01-hero-ko';
import CommonQAndASection from '../components/common-q-and-a-page/02-q-and-a-ko';

const CommonQAndA = () => (
  <div id='q-and-a-page'>
    <Layout>
      <Seo title='질문과 답변' />
      <HeroSection />
      <CommonQAndASection />
    </Layout>
  </div>
);

export default CommonQAndA;
