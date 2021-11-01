import * as React from 'react';
import { Row, Col } from 'react-bootstrap/';

import HeroSVG from '../../svg/home-hero.svg';
import PhoneSVG from '../../svg/phone.svg';

const HeroSection = () => (
  <section className={`section-hero`}>
    <Row>
      <Col lg={4} className={`order-last order-lg-first`}>
        <div className={`hero-copy`}>
          <h1 className={`hero-title`}>English Book Ladder</h1>
          <p className={`hero-description`}>
            Step into our interactive library where students walk out as
            lifelong readers.
          </p>
          <div>
            <a href='tel:03180225010' className={`cta-btn`}>
              Call Us <PhoneSVG className={`cta-phone-icon`} />
            </a>
          </div>
        </div>
      </Col>
      <Col lg={8} className={`order-first order-lg-last`}>
        <HeroSVG className={`hero-svg-width`} />
      </Col>
    </Row>
  </section>
);

export default HeroSection;
