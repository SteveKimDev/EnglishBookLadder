import * as React from 'react';
import { Row, Col } from 'react-bootstrap/';
import { StaticQuery, graphql } from 'gatsby';

import HeroSVG from '../../svg/about-ebl-hero.svg';
import PhoneSVG from '../../svg/phone.svg';

import * as ProgramStyle from '../library-membership-page/programs.module.css';

const HeroSection = () => (
  <StaticQuery
    query={graphql`
      query AboutEblPageHeroKorean {
        allContentfulAboutEblPageAssembly {
          nodes {
            heroAssembly {
              heroTitleKorean
              heroDescriptionKorean {
                heroDescriptionKorean
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
              <h1 className={`hero-title ${ProgramStyle.aboutEblHeroTitle}`}>
                {
                  data.allContentfulAboutEblPageAssembly.nodes[0].heroAssembly
                    .heroTitleKorean
                }
              </h1>
              <p className={`hero-description`}>
                {
                  data.allContentfulAboutEblPageAssembly.nodes[0].heroAssembly
                    .heroDescriptionKorean.heroDescriptionKorean
                }
              </p>
              <div>
                <a href='tel:03180225010' className={`cta-btn-shadow`}>
                  전화주세요 <PhoneSVG className={`cta-phone-icon`} />
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
