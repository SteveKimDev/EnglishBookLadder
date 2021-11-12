import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby';
import ProgramImgOne from './program-images/program-img-01';
import ProgramImgTwo from './program-images/program-img-02';
import ProgramImgThree from './program-images/program-img-03';
import ProgramImgFour from './program-images/program-img-04';
import ProgramImgFive from './program-images/program-img-05';
import ProgramImgSix from './program-images/program-img-06';

import * as Homestyle from './homestyle.module.css';

const ProgramSection = () => (
  <StaticQuery
    query={graphql`
      query HomePageProgramsEnglish {
        allContentfulHomePageAssembly {
          nodes {
            programTitleEnglish
            program1Assembly {
              programTitleEnglish
              programShortDescriptionEnglish {
                programShortDescriptionEnglish
              }
            }
            program2Assembly {
              programTitleEnglish
              programShortDescriptionEnglish {
                programShortDescriptionEnglish
              }
            }
            program3Assembly {
              programTitleEnglish
              programShortDescriptionEnglish {
                programShortDescriptionEnglish
              }
            }
            program4Assembly {
              programTitleEnglish
              programShortDescriptionEnglish {
                programShortDescriptionEnglish
              }
            }
            program5Assembly {
              programTitleEnglish
              programShortDescriptionEnglish {
                programShortDescriptionEnglish
              }
            }
            program6Assembly {
              programTitleEnglish
              programShortDescriptionEnglish {
                programShortDescriptionEnglish
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-white-background`}>
        <h2 className='section-title text-center'>
          {data.allContentfulHomePageAssembly.nodes[0].programTitleEnglish}
        </h2>
        <Row>
          <Col
            lg={4}
            sm={6}
            xs={12}
            className={`${Homestyle.cardDiv} ${Homestyle.cardOne}`}
          >
            <ProgramImgOne />
            <h3 className={`text-center section-subtitle`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program1Assembly
                  .programTitleEnglish
              }
            </h3>
            <p className={`text-center ${Homestyle.descriptionHeight}`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program1Assembly
                  .programShortDescriptionEnglish.programShortDescriptionEnglish
              }
            </p>
            <Link
              to='/en/programs/library-membership'
              className={`cta-btn btn-center`}
            >
              Learn More
            </Link>
          </Col>
          <Col
            lg={4}
            sm={6}
            xs={12}
            className={`${Homestyle.cardDiv} ${Homestyle.cardTwo}`}
          >
            <ProgramImgTwo />
            <h3 className={`text-center section-subtitle`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program2Assembly
                  .programTitleEnglish
              }
            </h3>
            <p className={`text-center ${Homestyle.descriptionHeight}`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program2Assembly
                  .programShortDescriptionEnglish.programShortDescriptionEnglish
              }
            </p>
            <Link
              to='/en/programs/young-readers'
              className={`cta-btn btn-center`}
            >
              Learn More
            </Link>
          </Col>
          <Col
            lg={4}
            sm={6}
            xs={12}
            className={`${Homestyle.cardDiv} ${Homestyle.cardThree}`}
          >
            <ProgramImgThree />
            <h3 className={`text-center section-subtitle`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program3Assembly
                  .programTitleEnglish
              }
            </h3>
            <p className={`text-center ${Homestyle.descriptionHeight}`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program3Assembly
                  .programShortDescriptionEnglish.programShortDescriptionEnglish
              }
            </p>
            <Link
              to='/en/programs/adult-classes'
              className={`cta-btn btn-center`}
            >
              Learn More
            </Link>
          </Col>
          <Col
            lg={4}
            sm={6}
            xs={12}
            className={`${Homestyle.cardDiv} ${Homestyle.cardFour}`}
          >
            <ProgramImgFour />
            <h3 className={`text-center section-subtitle`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program4Assembly
                  .programTitleEnglish
              }
            </h3>
            <p className={`text-center ${Homestyle.descriptionHeight}`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program4Assembly
                  .programShortDescriptionEnglish.programShortDescriptionEnglish
              }
            </p>
            <Link
              to='/en/programs/adult-classes/#private-classes'
              className={`cta-btn btn-center`}
            >
              Learn More
            </Link>
          </Col>
          <Col
            lg={4}
            sm={6}
            xs={12}
            className={`${Homestyle.cardDiv}  ${Homestyle.cardFive}`}
          >
            <ProgramImgFive />
            <h3 className={`text-center section-subtitle`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program5Assembly
                  .programTitleEnglish
              }
            </h3>
            <p className={`text-center ${Homestyle.descriptionHeight}`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program5Assembly
                  .programShortDescriptionEnglish.programShortDescriptionEnglish
              }
            </p>
            <Link
              to='/en/programs/summer-winter-programs'
              className={`cta-btn btn-center`}
            >
              Learn More
            </Link>
          </Col>
          <Col
            lg={4}
            sm={6}
            xs={12}
            className={`${Homestyle.cardDiv} ${Homestyle.cardSix}`}
          >
            <ProgramImgSix />
            <h3 className={`text-center section-subtitle`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program6Assembly
                  .programTitleEnglish
              }
            </h3>
            <p className={`text-center ${Homestyle.descriptionHeight}`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program6Assembly
                  .programShortDescriptionEnglish.programShortDescriptionEnglish
              }
            </p>
            <Link
              to='/en/programs/summer-winter-programs/#winter-program'
              className={`cta-btn btn-center`}
            >
              Learn More
            </Link>
          </Col>
        </Row>
      </section>
    )}
  />
);

export default ProgramSection;
