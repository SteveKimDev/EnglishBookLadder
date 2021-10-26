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
          <Link to='/'>Home</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/'>About EBL</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/'>Common Q&amp;A</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/'>Contact &amp; Location</Link>
        </div>
      </Col>

      {/* Col 3 */}
      <Col lg='3' className='footer-col footer-col3'>
        <h3>Programs</h3>
        <div className='mb-1rem'>
          <Link to='/'>Library Membership</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/'>Young Readers</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/'>Adult Classes</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/'>Private Classes</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/'>Summer Program</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/'>Winter Program</Link>
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
