import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import ExtenImgEn from './about-images/extensive-img-ko';
import IntenImgEn from './about-images/intensive-img-ko';

import * as AboutStyle from './about-ebl.module.css';

const ExtenVsIntenReadingSection = () => (
  <StaticQuery
    query={graphql`
      query AboutEblPageExtenIntenKorean {
        allContentfulAboutEblPageAssembly {
          nodes {
            extensiveVsIntensiveTitleKorean
            tenPrinciplesKorean {
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
                .extensiveVsIntensiveTitleKorean
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
          <Col md={{ span: 6, offset: 3 }}>
            <div className={`${AboutStyle.extenIntenRichtext}`}>
              {renderRichText(
                data.allContentfulAboutEblPageAssembly.nodes[0]
                  .tenPrinciplesKorean
              )}
            </div>
          </Col>
        </Row>
      </section>
    )}
  />
);

export default ExtenVsIntenReadingSection;
