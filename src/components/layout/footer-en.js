import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, StaticQuery, graphql } from 'gatsby';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterLinksEnglish {
        contentfulNavigationLinks {
          homePageLinkEnglish
          aboutPageEnglish
          qandAPageEnglish
          contactAndLocationPageEnglish
          libraryMembershipProgramEnglish
          youngReadersProgramEnglish
          adultClassesEnglish
          privateClassesEnglish
          summerProgramEnglish
          winterProgramEnglish
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
              <Link to='/en'>
                {data.contentfulNavigationLinks.homePageLinkEnglish}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/en/about-ebl'>
                {data.contentfulNavigationLinks.aboutPageEnglish}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/en/common-q-and-a'>
                {data.contentfulNavigationLinks.qandAPageEnglish}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/en/contact-and-location'>
                {data.contentfulNavigationLinks.contactAndLocationPageEnglish}
              </Link>
            </div>
          </Col>

          {/* Col 3 */}
          <Col lg='3' className='footer-col footer-col3'>
            <h3>Programs</h3>
            <div className='mb-1rem'>
              <Link to='/en/programs/library-membership'>
                {data.contentfulNavigationLinks.libraryMembershipProgramEnglish}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/en/programs/young-readers'>
                {data.contentfulNavigationLinks.youngReadersProgramEnglish}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/en/programs/adult-classes'>
                {data.contentfulNavigationLinks.adultClassesEnglish}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/en/programs/adult-classes/#private-classes'>
                {data.contentfulNavigationLinks.privateClassesEnglish}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/en/programs/summer-winter-programs'>
                {data.contentfulNavigationLinks.summerProgramEnglish}
              </Link>
            </div>
            <div className='mb-1rem'>
              <Link to='/en/programs/summer-winter-programs/#winter-program'>
                {data.contentfulNavigationLinks.winterProgramEnglish}
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
