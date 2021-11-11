import * as React from 'react';
import Layout from '../components/layout/layout-ko';
import HeroSection from '../components/contact-location-page/01-hero-ko';
import ContactAndLocationSection from '../components/contact-location-page/02-contact-details-ko';

const ContactAndLocation = () => (
  <div id='contact-page'>
    <Layout>
      <HeroSection />
      <ContactAndLocationSection />
    </Layout>
  </div>
);

export default ContactAndLocation;
