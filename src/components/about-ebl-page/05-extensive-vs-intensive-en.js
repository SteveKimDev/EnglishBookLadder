import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import ExtenImgEn from './about-images/extensive-img-en';
import IntenImgEn from './about-images/intensive-img-en';

import * as AboutStyle from './about-ebl.module.css';

const ExtenVsIntenReadingSection = () => (
  <StaticQuery
    query={graphql`
      query AboutEblPageExtenIntenEnglish {
        allContentfulAboutEblPageAssembly {
          nodes {
            extensiveVsIntensiveTitleEnglish
            tenPrinciplesEnglish {
              raw
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-white-background last-section`}>
        <div>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulAboutEblPageAssembly.nodes[0]
                .extensiveVsIntensiveTitleEnglish
            }
          </h2>
        </div>
        <Row>
          <Col lg={6} className={`${AboutStyle.extenIntenImgCol}`}>
            <ExtenImgEn />
          </Col>
          <Col lg={6} className={`${AboutStyle.extenIntenImgCol}`}>
            <IntenImgEn />
          </Col>
          <Row>
            <Col xl={3} lg={1}></Col>
            <Col xl={6} lg={10}>
              <div className={`${AboutStyle.extenIntenRichtext}`}>
                {renderRichText(
                  data.allContentfulAboutEblPageAssembly.nodes[0]
                    .tenPrinciplesEnglish
                )}
              </div>
            </Col>
            <Col xl={3} lg={1}></Col>
          </Row>
        </Row>
      </section>
    )}
  />
);

export default ExtenVsIntenReadingSection;
