import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterLinksKorean {
        contentfulNavigationLinks {
          homePageLinkKorean
          aboutPageKorean
          qandAPageKorean
          contactAndLocationPageKorean
          libraryMembershipProgramKorean
          youngReadersProgramKorean
          adultClassesKorean
          privateClassesKorean
          summerProgramKorean
          winterProgramKorean
        }
      }
    `}
    render={(data) => (
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
              <Link to='/'>
                {data.contentfulNavigationLinks.homePageLinkKorean}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/about-ebl'>
                {data.contentfulNavigationLinks.aboutPageKorean}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/common-q-and-a'>
                {data.contentfulNavigationLinks.qandaPageKorean}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/contact-and-location'>
                {data.contentfulNavigationLinks.contactAndLocationPageKorean}
              </Link>
            </div>
          </Col>

          {/* Col 3 */}
          <Col lg='3' className='footer-col footer-col3'>
            <h3>영어 프로그램</h3>
            <div className='mb-1rem'>
              <Link to='/programs/library-membership'>
                {data.contentfulNavigationLinks.libraryMembershipProgramKorean}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/programs/young-readers'>
                {data.contentfulNavigationLinks.youngReadersProgramKorean}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/programs/adult-classes'>
                {data.contentfulNavigationLinks.adultClassesKorean}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/programs/adult-classes/#private-classes'>
                {data.contentfulNavigationLinks.privateClassesKorean}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/programs/summer-winter-programs'>
                {data.contentfulNavigationLinks.summerProgramKorean}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/programs/summer-winter-programs/#winter-program'>
                {data.contentfulNavigationLinks.winterProgramKorean}
              </Link>
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
    )}
  />
);

export default Footer;
