import * as React from 'react';
import Layout from '../../components/layout/layout-ko';
import HeroSection from '../../components/summer-winter-page/01-hero-ko';
import SummerWinterDescriptionSecrion from '../../components/summer-winter-page/02-description-ko';
import SummerProgramSection from '../../components/summer-winter-page/03-summer-section-ko';
import WinterProgramSection from '../../components/summer-winter-page/04-winter-section-ko';

const SummerWinterProgramsPage = () => (
  <div id='summer-winter-page'>
    <Layout>
      <HeroSection />
      <SummerWinterDescriptionSecrion />
      <SummerProgramSection />
      <WinterProgramSection />
    </Layout>
  </div>
);

export default SummerWinterProgramsPage;
