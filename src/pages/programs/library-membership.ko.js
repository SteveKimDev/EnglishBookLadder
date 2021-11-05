import * as React from 'react';
import Layout from '../../components/layout/layout-ko';
import HeroSection from '../../components/library-membership-page/01-hero-ko';
import LibraryMembershipSection from '../../components/library-membership-page/02-library-membership-ko';
import FourBookProgramSection from '../../components/library-membership-page/03-four-book-program-ko';

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
