import * as React from 'react';
import Seo from '../components/seo';
import Layout from '../components/layout/layout-ko';
import HeroSection from '../components/contact-location-page/01-hero-ko';
import ContactAndLocationSection from '../components/contact-location-page/02-contact-details-ko';

const ContactAndLocation = () => (
  <div id='contact-page'>
    <Layout>
      <Seo title='연락처 및 위치' />
      <HeroSection />
      <ContactAndLocationSection />
    </Layout>
  </div>
);

export default ContactAndLocation;
