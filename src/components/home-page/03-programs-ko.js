import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import ProgramImgOne from './program-images/program-img-01';

import * as Homestyle from './homestyle.module.css';

const ProgramSection = () => (
  <section className='section-white-background'>
    <h2 className='section-title'>Programs</h2>
    <Row>
      <Col
        lg={4}
        sm={6}
        xs={12}
        className={`${Homestyle.cardDiv} ${Homestyle.cardOne}`}
      >
        <ProgramImgOne />
        <h3 className={`text-center section-subtitle`}>Library Mem.</h3>
        <p className={`text-center ${Homestyle.descriptionHeight}`}>
          A wide variety of award-winning reading materials with computerized
          systems to ensure reading comprehension.
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
        <ProgramImgOne />
        <h3 className={`text-center section-subtitle`}>Young Readers</h3>
        <p className={`text-center ${Homestyle.descriptionHeight}`}>
          Students discover English through guided reading methods that make
          learning more exciting than ever.
        </p>
        <Link to='/en/programs/about-ebl' className={`cta-btn btn-center`}>
          Learn More
        </Link>
      </Col>
      <Col
        lg={4}
        sm={6}
        xs={12}
        className={`${Homestyle.cardDiv} ${Homestyle.cardThree}`}
      >
        <ProgramImgOne />
        <h3 className={`text-center section-subtitle`}>Adult Classes</h3>
        <p className={`text-center ${Homestyle.descriptionHeight}`}>
          English Conversation and Business English Classes for adults to
          increase confidence and fluency.
        </p>
        <Link to='/en/programs/adult-classes' className={`cta-btn btn-center`}>
          Learn More
        </Link>
      </Col>
      <Col
        lg={4}
        sm={6}
        xs={12}
        className={`${Homestyle.cardDiv} ${Homestyle.cardFour}`}
      >
        <ProgramImgOne />
        <h3 className={`text-center section-subtitle`}>Private Classes</h3>
        <p className={`text-center ${Homestyle.descriptionHeight}`}>
          Specialised content tailored to complement and progress students in
          their schools or jobs.
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
        <ProgramImgOne />
        <h3 className={`text-center section-subtitle`}>Summer Programs</h3>
        <p className={`text-center ${Homestyle.descriptionHeight}`}>
          Our 2 month summer program offers intensive and extensive immersion
          into English comprehension.
        </p>
        <Link
          to='/en/programs/summer-programs'
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
        <ProgramImgOne />
        <h3 className={`text-center section-subtitle`}>Winter Programs</h3>
        <p className={`text-center ${Homestyle.descriptionHeight}`}>
          Our 2 month Winter Program offers intensive and extensive immersion
          into English comprehension
        </p>
        <Link
          to='/en/programs/winter-programs'
          className={`cta-btn btn-center`}
        >
          Learn More
        </Link>
      </Col>
    </Row>
  </section>
);

export default ProgramSection;
