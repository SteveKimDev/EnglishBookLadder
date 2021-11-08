import * as React from 'react';
import Layout from '../../components/layout/layout-ko';
import HeroSection from '../../components/adult-classes-page/01-hero-ko';
import MorningClassSection from '../../components/adult-classes-page/02-morning-classes-ko';
import EveningClassSection from '../../components/adult-classes-page/03-evening-classes-ko';
import PrivateClassSection from '../../components/adult-classes-page/04-private-classes-ko';

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
