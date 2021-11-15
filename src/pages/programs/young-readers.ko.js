import * as React from 'react';
import Seo from '../../components/seo';
import Layout from '../../components/layout/layout-ko';
import HeroSection from '../../components/young-readers-page/01-hero-ko';
import ClassSection from '../../components/young-readers-page/02-classes-ko';

const YoungReadersPage = () => (
  <div id='yr-page'>
    <Layout>
      <Seo title='젊은 독자들' />
      <HeroSection />
      <ClassSection />
    </Layout>
  </div>
);

export default YoungReadersPage;
