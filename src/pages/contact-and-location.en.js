import * as React from 'react';
import Layout from '../components/layout/layout-en';
import HeroSection from '../components/contact-location-page/01-hero-en';
import ContactAndLocationSection from '../components/contact-location-page/02-contact-details-en';

const ContactAndLocation = () => (
  <div id='contact-page'>
    <Layout>
      <HeroSection />
      <ContactAndLocationSection />
    </Layout>
  </div>
);

export default ContactAndLocation;
