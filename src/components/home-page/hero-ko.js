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
            학생들이 평생 독자로서 걸어가는 인터랙티브 라이브 러리로
            들어가십시오.
          </p>
          <div>
            <a href='tel:03180225010' className={`cta-btn`}>
              전화주세요 <PhoneSVG className={`cta-phone-icon`} />
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
