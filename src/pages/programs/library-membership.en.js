import * as React from 'react';
import Layout from '../../components/layout/layout-en';
import HeroSection from '../../components/library-membership-page/01-hero-en';
import LibraryMembershipSection from '../../components/library-membership-page/02-library-membership-en';
import FourBookProgramSection from '../../components/library-membership-page/03-four-book-program-en';

const LibraryMembershipPage = () => (
  <div id='library-page'>
    <Layout>
      <HeroSection />
      <LibraryMembershipSection />
      <FourBookProgramSection />
    </Layout>
  </div>
);

export default LibraryMembershipPage;
