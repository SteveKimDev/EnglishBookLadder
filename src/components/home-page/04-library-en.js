import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby';

import LibrarySlider from './04a-library-slider';

import * as HomeStyle from './homestyle.module.css';

const LibrarySection = () => (
  <StaticQuery
    query={graphql`
      query HomePageLibraryEnglish {
        allContentfulHomePageAssembly {
          nodes {
            libraryTitleEnglish
            libraryDescriptionEnglish {
              libraryDescriptionEnglish
            }
            libraryScheduleEnglish
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
                {
                  data.allContentfulHomePageAssembly.nodes[0]
                    .libraryTitleEnglish
                }
              </h2>
              <p>
                {
                  data.allContentfulHomePageAssembly.nodes[0]
                    .libraryDescriptionEnglish.libraryDescriptionEnglish
                }
              </p>
              <p>
                {
                  data.allContentfulHomePageAssembly.nodes[0]
                    .libraryScheduleEnglish
                }
                <br />
                {
                  data.allContentfulHomePageAssembly.nodes[0]
                    .libraryBusinessHours
                }
              </p>
              <Link to='/en/library-membership' className={`cta-btn`}>
                Learn More
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
