import * as React from 'react';
import { Row, Col } from 'react-bootstrap/';
import { StaticQuery, graphql } from 'gatsby';

import HeroSVG from '../../svg/q-and-a-hero.svg';
import PhoneSVG from '../../svg/phone.svg';

import * as QandAStyle from './q-and-a.module.css';

const HeroSection = () => (
  <StaticQuery
    query={graphql`
      query CommonQAndAPageHeroEnglish {
        allContentfulCommonQAndAPageAssembly {
          nodes {
            heroAssembly {
              heroTitleEnglish
              heroDescriptionEnglish {
                heroDescriptionEnglish
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-hero`}>
        <Row>
          <Col lg={7} className={`order-last order-lg-first`}>
            <div className={`hero-copy`}>
              <h1 className={`hero-title ${QandAStyle.heroTitle}`}>
                {
                  data.allContentfulCommonQAndAPageAssembly.nodes[0]
                    .heroAssembly.heroTitleEnglish
                }
              </h1>
              <p className={`hero-description`}>
                {
                  data.allContentfulCommonQAndAPageAssembly.nodes[0]
                    .heroAssembly.heroDescriptionEnglish.heroDescriptionEnglish
                }
              </p>
              <div>
                <a href='tel:03180225010' className={`cta-btn-shadow`}>
                  Call Us <PhoneSVG className={`cta-phone-icon`} />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={5} className={`order-first order-lg-last`}>
            <HeroSVG className={`hero-svg-height`} />
          </Col>
        </Row>
      </section>
    )}
  />
);

export default HeroSection;
