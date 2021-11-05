import * as React from 'react';
import Layout from '../../components/layout/layout-en';
import HeroSection from '../../components/library-membership-page/01-hero-en';
import LibraryMembershipSection from '../../components/library-membership-page/02-library-membership-en';

const LibraryMembershipPage = () => (
  <div id='library-page'>
    <Layout>
      <HeroSection />
      <LibraryMembershipSection />
    </Layout>
  </div>
);

export default LibraryMembershipPage;
