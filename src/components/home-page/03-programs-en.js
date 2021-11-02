import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import ProgramImgOne from './program-images/program-img-01';

const ProgramSection = () => (
  <section className='section-white-background'>
    <h2 className='section-title'>Programs</h2>
    <Row>
      <Col lg={4} sm={6} xs={12}>
        <div className={`card-div`}>
          <ProgramImgOne />
          <h3 className={`text-center section-subtitle`}>Library Membership</h3>
          <p className={`text-center`}>
            A wide variety of award-winning reading materials with computerized
            systems to ensure reading comprehension.
          </p>
          <Link to='/en/library-membership' className={`cta-btn btn-center`}>
            Learn More
          </Link>
        </div>
      </Col>
      <Col lg={4} sm={6} xs={12}>
        <div className={`card-div`}>
          <ProgramImgOne />
          <h3 className={`text-center section-subtitle`}>Library Membership</h3>
          <p className={`text-center`}>
            A wide variety of award-winning reading materials with computerized
            systems to ensure reading comprehension.
          </p>
          <Link to='/en/library-membership' className={`cta-btn btn-center`}>
            Learn More
          </Link>
        </div>
      </Col>
      <Col lg={4} sm={6} xs={12}>
        <div className={`card-div`}>
          <ProgramImgOne />
          <h3 className={`text-center section-subtitle`}>Library Membership</h3>
          <p className={`text-center`}>
            A wide variety of award-winning reading materials with computerized
            systems to ensure reading comprehension.
          </p>
          <Link to='/en/library-membership' className={`cta-btn btn-center`}>
            Learn More
          </Link>
        </div>
      </Col>
      <Col lg={4} sm={6} xs={12}>
        <div className={`card-div`}>
          <ProgramImgOne />
          <h3 className={`text-center section-subtitle`}>Library Membership</h3>
          <p className={`text-center`}>
            A wide variety of award-winning reading materials with computerized
            systems to ensure reading comprehension.
          </p>
          <Link to='/en/library-membership' className={`cta-btn btn-center`}>
            Learn More
          </Link>
        </div>
      </Col>
      <Col lg={4} sm={6} xs={12}>
        <div className={`card-div`}>
          <ProgramImgOne />
          <h3 className={`text-center section-subtitle`}>Library Membership</h3>
          <p className={`text-center`}>
            A wide variety of award-winning reading materials with computerized
            systems to ensure reading comprehension.
          </p>
          <Link to='/en/library-membership' className={`cta-btn btn-center`}>
            Learn More
          </Link>
        </div>
      </Col>
      <Col lg={4} sm={6} xs={12}>
        <div className={`card-div`}>
          <ProgramImgOne />
          <h3 className={`text-center section-subtitle`}>Library Membership</h3>
          <p className={`text-center`}>
            A wide variety of award-winning reading materials with computerized
            systems to ensure reading comprehension.
          </p>
          <Link to='/en/library-membership' className={`cta-btn btn-center`}>
            Learn More
          </Link>
        </div>
      </Col>
    </Row>
  </section>
);

export default ProgramSection;
