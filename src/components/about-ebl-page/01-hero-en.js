import * as React from 'react';
import { Row, Col } from 'react-bootstrap/';
import { StaticQuery, graphql } from 'gatsby';

import HeroSVG from '../../svg/about-ebl-hero.svg';
import PhoneSVG from '../../svg/phone.svg';

const HeroSection = () => (
  <StaticQuery
    query={graphql`
      query AboutEblPageHeroEnglish {
        allContentfulAboutEblPageAssembly {
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
          <Col lg={5} className={`order-last order-lg-first`}>
            <div className={`hero-copy`}>
              <h1 className={`hero-title`}>
                {
                  data.allContentfulAboutEblPageAssembly.nodes[0].heroAssembly
                    .heroTitleEnglish
                }
              </h1>
              <p className={`hero-description`}>
                {
                  data.allContentfulAboutEblPageAssembly.nodes[0].heroAssembly
                    .heroDescriptionEnglish.heroDescriptionEnglish
                }
              </p>
              <div>
                <a href='tel:03180225010' className={`cta-btn-shadow`}>
                  Call Us <PhoneSVG className={`cta-phone-icon`} />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={7} className={`order-first order-lg-last`}>
            <HeroSVG />
          </Col>
        </Row>
      </section>
    )}
  />
);

export default HeroSection;
