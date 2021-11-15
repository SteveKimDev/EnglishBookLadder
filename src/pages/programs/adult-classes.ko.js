import * as React from 'react';
import Seo from '../../components/seo';
import Layout from '../../components/layout/layout-ko';
import HeroSection from '../../components/adult-classes-page/01-hero-ko';
import MorningClassSection from '../../components/adult-classes-page/02-morning-classes-ko';
import EveningClassSection from '../../components/adult-classes-page/03-evening-classes-ko';
import PrivateClassSection from '../../components/adult-classes-page/04-private-classes-ko';

const AdultClassesPage = () => (
  <div id='adult-page'>
    <Layout>
      <Seo title='성인 클래스' />
      <HeroSection />
      <MorningClassSection />
      <EveningClassSection />
      <PrivateClassSection />
    </Layout>
  </div>
);

export default AdultClassesPage;
