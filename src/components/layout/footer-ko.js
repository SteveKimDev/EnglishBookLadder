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
          경기도 성남시 분당구 정자동 정자
          <br />
          일(1)로 121,
          <br />
          더샾스타파크, 2층, E-9
          <br />
          463-867그램입니다.
        </p>
        <p>031-8022-5010</p>
      </Col>

      {/* Col 2 */}
      <Col lg='4' className='footer-col footer-col2'>
        <h3>페이지</h3>
        <div className='mb-1rem'>
          <Link to='/'>홈페이지</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/about-ebl'>EBL에 대해</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/common-q-and-a'>질문과 답변</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/contact-and-location'>연락처 및 위치</Link>
        </div>
      </Col>

      {/* Col 3 */}
      <Col lg='3' className='footer-col footer-col3'>
        <h3>영어 프로그램</h3>
        <div className='mb-1rem'>
          <Link to='/programs/library-membership'>도서관 회원</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/programs/young-readers'>젊은 독자들</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/programs/adult-classes'>성인 클래스</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/programs/adult-classes/#private-classes'>성인 클래스</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/programs/summer-programs'>여름 프로그램</Link>
        </div>
        <div className='mb-1rem'>
          <Link to='/programs/winter-programs'>겨울 프로그램</Link>
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
