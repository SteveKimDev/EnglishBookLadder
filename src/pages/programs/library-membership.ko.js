import * as React from 'react';
import Layout from '../../components/layout/layout-ko';
import HeroSection from '../../components/library-membership-page/01-hero-ko';
import LibraryMembershipSection from '../../components/library-membership-page/02-library-membership-ko';

const LibraryMembershipPage = () => (
  <div id='library-page'>
    <Layout>
      <HeroSection />
      <LibraryMembershipSection />
    </Layout>
  </div>
);

export default LibraryMembershipPage;
