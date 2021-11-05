import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby';

import LibrarySlider from './04a-library-slider';

import * as HomeStyle from './homestyle.module.css';

const LibrarySection = () => (
  <StaticQuery
    query={graphql`
      query HomePageLibraryKorean {
        allContentfulHomePageAssembly {
          nodes {
            libraryTitleKorean
            libraryDescriptionKorean {
              libraryDescriptionKorean
            }
            libraryScheduleKorean
            libraryBusinessHours
          }
        }
      }
    `}
    render={(data) => (
      <section
        className={`section-blue-background last-section ${HomeStyle.section}`}
      >
        <Row>
          <Col lg={6}>
            <div className={HomeStyle.libraryColOneDiv}>
              <h2 className={`section-title`}>
                {data.allContentfulHomePageAssembly.nodes[0].libraryTitleKorean}
              </h2>
              <p>
                {
                  data.allContentfulHomePageAssembly.nodes[0]
                    .libraryDescriptionKorean.libraryDescriptionKorean
                }
              </p>
              <p>
                {
                  data.allContentfulHomePageAssembly.nodes[0]
                    .libraryScheduleKorean
                }
                <br />
                {
                  data.allContentfulHomePageAssembly.nodes[0]
                    .libraryBusinessHours
                }
              </p>
              <Link to='/programs/library-membership' className={`cta-btn`}>
                더 알아보기
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <LibrarySlider />
          </Col>
        </Row>
      </section>
    )}
  />
);

export default LibrarySection;
