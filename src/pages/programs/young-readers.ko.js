import * as React from 'react';
import Layout from '../../components/layout/layout-ko';
import HeroSection from '../../components/young-readers-page/01-hero-ko';
import ClassSection from '../../components/young-readers-page/02-classes-ko';

const YoungReadersPage = () => (
  <div id='yr-page'>
    <Layout>
      <HeroSection />
      <ClassSection />
    </Layout>
  </div>
);

export default YoungReadersPage;
