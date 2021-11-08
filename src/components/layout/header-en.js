import * as React from 'react';
import Stack from 'react-bootstrap/Stack';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import LanguageSelectorKo from './language-selector-ko';
import OffCanvasMenu from './off-canvas-menu-en';

const Header = () => (
  <StaticQuery
    query={graphql`
      query NavLinksEnglish {
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
      <Stack direction='horizontal' gap={5} className='header-section'>
        <div className='header-brand'>EBL</div>
        {/* Header Links */}
        <div className='ms-auto hidden'>
          <Link to='/en' className='header-link'>
            {data.contentfulNavigationLinks.homePageLinkEnglish}
          </Link>
        </div>

        {/* Dropdown Menu */}
        <div className='hidden'>
          <DropdownButton id='dropdown-basic-button' title='Programs'>
            <Dropdown.Item href='/en/programs/library-membership'>
              {data.contentfulNavigationLinks.libraryMembershipProgramEnglish}
            </Dropdown.Item>
            <Dropdown.Item href='/en/programs/young-readers'>
              {data.contentfulNavigationLinks.youngReadersProgramEnglish}
            </Dropdown.Item>
            <Dropdown.Item href='/en/programs/adult-classes'>
              {data.contentfulNavigationLinks.adultClassesEnglish}
            </Dropdown.Item>
            <Dropdown.Item href='/en/programs/adult-classes/#private-classes'>
              {data.contentfulNavigationLinks.privateClassesEnglish}
            </Dropdown.Item>
            <Dropdown.Item href='/en/programs/summer-winter-programs'>
              {data.contentfulNavigationLinks.summerProgramEnglish}
            </Dropdown.Item>
            <Dropdown.Item href='/en/programs/summer-winter-programs/#winter-program'>
              {data.contentfulNavigationLinks.winterProgramEnglish}
            </Dropdown.Item>
          </DropdownButton>
        </div>
        {/* End Dropdown Menu */}

        <div className='hidden'>
          <Link to='/en/about-ebl' className='header-link'>
            {data.contentfulNavigationLinks.aboutPageEnglish}
          </Link>
        </div>
        <div className='hidden'>
          <Link to='/en/common-q-and-a' className='header-link'>
            {data.contentfulNavigationLinks.qandaPageEnglish}
          </Link>
        </div>
        <div className='hidden'>
          <Link to='/en/contact-and-location' className='header-link'>
            {data.contentfulNavigationLinks.contactAndLocationPageEnglish}
          </Link>
        </div>
        <div className='ms-auto'>
          <LanguageSelectorKo />
        </div>
        <div className=' ms-auto display'>
          <OffCanvasMenu />
        </div>
      </Stack>
    )}
  />
);

export default Header;
