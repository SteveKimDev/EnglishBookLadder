import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';

const Footer = () => (
  <section className='footer-section'>
    {/* Main Footer Row */}
    <Row className='footer-row1'>
      {/* Col 1 */}
      <Col lg='5' className='footer-col'>
        <h3>English Book Ladder</h3>
        <p>
          The Sharp, Star Park Building
          <br />
          Flr 2, E-09, 121 Jeongjail-ro
          <br />
          (Jeongja-dong), Bundang-gu,
          <br />
          Seongnam-si, Gyeonggi-do,
          <br />
          Seoul 13560
        </p>
        <p>031-8022-5010</p>
      </Col>

      {/* Col 2 */}
      <Col lg='4' className='footer-col footer-col2'>
        <h3>Pages</h3>
        <div className='mb-1rem'>
          <Link to='/en'>Home</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/en/about-ebl'>About EBL</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/en/common-q-and-a'>Common Q&amp;A</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/en/contact-and-location'>Contact &amp; Location</Link>
        </div>
      </Col>

      {/* Col 3 */}
      <Col lg='3' className='footer-col footer-col3'>
        <h3>Programs</h3>
        <div className='mb-1rem'>
          <Link to='/en/programs/library-membership'>Library Membership</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/en/programs/young-readers'>Young Readers</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/en/programs/adult-classes'>Adult Classes</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/en/programs/adult-classes/#private-classes'>
            Private Classes
          </Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/en/programs/summer-programs'>Summer Program</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/en/programs/winter-programs'>Winter Program</Link>
        </div>
      </Col>
    </Row>
    <Row>
      <Col className='footer-col'>
        <a href='https://stevekimdev.com/' target='_blank' rel='noreferrer'>
          Website designed by Steve Kim
        </a>
      </Col>
    </Row>
  </section>
);

export default Footer;
