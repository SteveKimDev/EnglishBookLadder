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
      query HomePageProgramsKorean {
        allContentfulHomePageAssembly {
          nodes {
            programTitleKorean
            program1Assembly {
              programTitleKorean
              programShortDescriptionKorean {
                programShortDescriptionKorean
              }
            }
            program2Assembly {
              programTitleKorean
              programShortDescriptionKorean {
                programShortDescriptionKorean
              }
            }
            program3Assembly {
              programTitleKorean
              programShortDescriptionKorean {
                programShortDescriptionKorean
              }
            }
            program4Assembly {
              programTitleKorean
              programShortDescriptionKorean {
                programShortDescriptionKorean
              }
            }
            program5Assembly {
              programTitleKorean
              programShortDescriptionKorean {
                programShortDescriptionKorean
              }
            }
            program6Assembly {
              programTitleKorean
              programShortDescriptionKorean {
                programShortDescriptionKorean
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-white-background`}>
        <h2 className='section-title text-center'>
          {data.allContentfulHomePageAssembly.nodes[0].programTitleKorean}
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
                  .programTitleKorean
              }
            </h3>
            <p className={`text-center ${Homestyle.descriptionHeight}`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program1Assembly
                  .programShortDescriptionKorean.programShortDescriptionKorean
              }
            </p>
            <Link
              to='/programs/library-membership'
              className={`cta-btn btn-center`}
            >
              더 알아보기
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
                  .programTitleKorean
              }
            </h3>
            <p className={`text-center ${Homestyle.descriptionHeight}`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program2Assembly
                  .programShortDescriptionKorean.programShortDescriptionKorean
              }
            </p>
            <Link to='/programs/young-readers' className={`cta-btn btn-center`}>
              더 알아보기
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
                  .programTitleKorean
              }
            </h3>
            <p className={`text-center ${Homestyle.descriptionHeight}`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program3Assembly
                  .programShortDescriptionKorean.programShortDescriptionKorean
              }
            </p>
            <Link to='/programs/adult-classes' className={`cta-btn btn-center`}>
              더 알아보기
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
                  .programTitleKorean
              }
            </h3>
            <p className={`text-center ${Homestyle.descriptionHeight}`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program4Assembly
                  .programShortDescriptionKorean.programShortDescriptionKorean
              }
            </p>
            <Link
              to='/programs/adult-classes/#private-classes'
              className={`cta-btn btn-center`}
            >
              더 알아보기
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
                  .programTitleKorean
              }
            </h3>
            <p className={`text-center ${Homestyle.descriptionHeight}`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program5Assembly
                  .programShortDescriptionKorean.programShortDescriptionKorean
              }
            </p>
            <Link
              to='/programs/summer-winter-programs'
              className={`cta-btn btn-center`}
            >
              더 알아보기
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
                  .programTitleKorean
              }
            </h3>
            <p className={`text-center ${Homestyle.descriptionHeight}`}>
              {
                data.allContentfulHomePageAssembly.nodes[0].program6Assembly
                  .programShortDescriptionKorean.programShortDescriptionKorean
              }
            </p>
            <Link
              to='/programs/summer-winter-programs/#winter-program'
              className={`cta-btn btn-center`}
            >
              더 알아보기
            </Link>
          </Col>
        </Row>
      </section>
    )}
  />
);

export default ProgramSection;
