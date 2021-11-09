import * as React from 'react';
import Layout from '../../components/layout/layout-en';
import HeroSection from '../../components/summer-winter-page/01-hero-en';
import SummerProgramSection from '../../components/summer-winter-page/02-summer-section-en';
import WinterProgramSection from '../../components/summer-winter-page/03-winter-section-en';

const SummerWinterProgramsPage = () => (
  <div id='summer-winter-page'>
    <Layout>
      <HeroSection />
      <SummerProgramSection />
      <WinterProgramSection />
    </Layout>
  </div>
);

export default SummerWinterProgramsPage;
