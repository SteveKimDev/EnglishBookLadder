import * as React from 'react';
import Seo from '../../components/seo';
import Layout from '../../components/layout/layout-en';
import HeroSection from '../../components/young-readers-page/01-hero-en';
import ClassSection from '../../components/young-readers-page/02-classes-en';

const LibraryMembershipPage = () => (
  <div id='yr-page'>
    <Layout>
      <Seo title='Young Readers' />
      <HeroSection />
      <ClassSection />
    </Layout>
  </div>
);

export default LibraryMembershipPage;
