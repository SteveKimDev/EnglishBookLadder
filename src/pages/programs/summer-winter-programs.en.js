import * as React from 'react';
import Seo from '../../components/seo';
import Layout from '../../components/layout/layout-en';
import HeroSection from '../../components/summer-winter-page/01-hero-en';
import SummerWinterDescriptionSecrion from '../../components/summer-winter-page/02-description-en';
import SummerProgramSection from '../../components/summer-winter-page/03-summer-section-en';
import WinterProgramSection from '../../components/summer-winter-page/04-winter-section-en';

const SummerWinterProgramsPage = () => (
  <div id='summer-winter-page'>
    <Layout>
      <Seo title='Summer &amp; Winter Programs' />
      <HeroSection />
      <SummerWinterDescriptionSecrion />
      <SummerProgramSection />
      <WinterProgramSection />
    </Layout>
  </div>
);

export default SummerWinterProgramsPage;
