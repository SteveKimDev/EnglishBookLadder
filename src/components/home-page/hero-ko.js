import * as React from 'react';
import { Row, Col } from 'react-bootstrap/';
import { StaticQuery, graphql } from 'gatsby';

import HeroSVG from '../../svg/home-hero.svg';
import PhoneSVG from '../../svg/phone.svg';

const HeroSection = () => (
  <StaticQuery
    query={graphql`
      query HomePageHeroKorean {
        allContentfulHomePageAssembly {
          nodes {
            heroTitleKorean
            heroDescriptionKorean {
              heroDescriptionKorean
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-hero`}>
        <Row>
          <Col lg={4} className={`order-last order-lg-first`}>
            <div className={`hero-copy`}>
              <h1 className={`hero-title`}>
                {data.allContentfulHomePageAssembly.nodes[0].heroTitleKorean}
              </h1>
              <p className={`hero-description`}>
                {
                  data.allContentfulHomePageAssembly.nodes[0]
                    .heroDescriptionKorean.heroDescriptionKorean
                }
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
    )}
  />
);

export default HeroSection;
