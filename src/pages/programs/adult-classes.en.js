import * as React from 'react';
import Layout from '../../components/layout/layout-en';
import HeroSection from '../../components/adult-classes-page/01-hero-en';
import MorningClassSection from '../../components/adult-classes-page/02-morning-classes-en';
import EveningClassSection from '../../components/adult-classes-page/03-evening-classes-en';
import PrivateClassSection from '../../components/adult-classes-page/04-private-classes-en';

const AdultClassesPage = () => (
  <div id='adult-page'>
    <Layout>
      <HeroSection />
      <MorningClassSection />
      <EveningClassSection />
      <PrivateClassSection />
    </Layout>
  </div>
);

export default AdultClassesPage;
