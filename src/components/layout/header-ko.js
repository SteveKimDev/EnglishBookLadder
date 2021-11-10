import * as React from 'react';
import Stack from 'react-bootstrap/Stack';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import LanguageSelectorEn from './language-selector-en';
import OffCanvasMenu from './off-canvas-menu-ko';

const Header = () => (
  <StaticQuery
    query={graphql`
      query NavLinksKorean {
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
      <Stack direction='horizontal' gap={5} className='header-section'>
        <div className='header-brand'>EBL</div>
        {/* Header Links */}
        <div className='ms-auto hidden'>
          <Link to='/' className='header-link'>
            {data.contentfulNavigationLinks.homePageLinkKorean}
          </Link>
        </div>

        {/* Dropdown Menu */}
        <div className='hidden'>
          <DropdownButton id='dropdown-basic-button' title='프로그램들'>
            <Dropdown.Item href='/programs/library-membership'>
              {data.contentfulNavigationLinks.libraryMembershipProgramKorean}
            </Dropdown.Item>
            <Dropdown.Item href='/programs/young-readers'>
              {data.contentfulNavigationLinks.youngReadersProgramKorean}
            </Dropdown.Item>
            <Dropdown.Item href='/programs/adult-classes'>
              {data.contentfulNavigationLinks.adultClassesKorean}
            </Dropdown.Item>
            <Dropdown.Item href='/programs/adult-classes/#private-classes'>
              {data.contentfulNavigationLinks.privateClassesKorean}
            </Dropdown.Item>
            <Dropdown.Item href='/programs/summer-winter-programs'>
              {data.contentfulNavigationLinks.summerProgramKorean}
            </Dropdown.Item>
            <Dropdown.Item href='/programs/summer-winter-programs/#winter-program'>
              {data.contentfulNavigationLinks.winterProgramKorean}
            </Dropdown.Item>
          </DropdownButton>
        </div>
        {/* End Dropdown Menu */}

        <div className='hidden'>
          <Link to='/about-ebl' className='header-link'>
            {data.contentfulNavigationLinks.aboutPageKorean}
          </Link>
        </div>
        <div className='hidden'>
          <Link to='/common-q-and-a' className='header-link'>
            {data.contentfulNavigationLinks.qandAPageKorean}
          </Link>
        </div>
        <div className='hidden'>
          <Link to='/contact-and-location' className='header-link'>
            {data.contentfulNavigationLinks.contactAndLocationPageKorean}
          </Link>
        </div>
        <div className='ms-auto'>
          <LanguageSelectorEn />
        </div>
        <div className=' ms-auto display'>
          <OffCanvasMenu />
        </div>
      </Stack>
    )}
  />
);

export default Header;
