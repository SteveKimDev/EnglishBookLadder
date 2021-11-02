import * as React from 'react';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'gatsby';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import LanguageSelectorKo from '../layout/language-selector-ko';
import OffCanvasMenu from './off-canvas-menu-en';

const Header = () => (
  <Stack direction='horizontal' gap={5} className='header-section'>
    <div className='header-brand'>EBL</div>
    {/* Header Links */}
    <div className='ms-auto hidden'>
      <Link to='/en' className='header-link'>
        Home
      </Link>
    </div>

    {/* Dropdown Menu */}
    <div className='hidden'>
      <DropdownButton id='dropdown-basic-button' title='Programs'>
        <Dropdown.Item href='/en/programs/library-membership'>
          Library Membership
        </Dropdown.Item>
        <Dropdown.Item href='/en/programs/young-readers'>
          Young Readers
        </Dropdown.Item>
        <Dropdown.Item href='/en/programs/adult-classes'>
          Adult Classes
        </Dropdown.Item>
        <Dropdown.Item href='/en/programs/adult-classes/#private-classes'>
          Private Classes
        </Dropdown.Item>
        <Dropdown.Item href='/en/programs/summer-programs'>
          Summer Program
        </Dropdown.Item>
        <Dropdown.Item href='/en/programs/winter-programs'>
          Winter Program
        </Dropdown.Item>
      </DropdownButton>
    </div>
    {/* End Dropdown Menu */}

    <div className='hidden'>
      <Link to='/en/about-ebl' className='header-link'>
        About EBL
      </Link>
    </div>
    <div className='hidden'>
      <Link to='/en/common-q-and-a' className='header-link'>
        Common Q&amp;A
      </Link>
    </div>
    <div className='hidden'>
      <Link to='/en/contact-and-location' className='header-link'>
        Contact &amp; Location
      </Link>
    </div>
    <div className='ms-auto'>
      <LanguageSelectorKo />
    </div>
    <div className=' ms-auto display'>
      <OffCanvasMenu />
    </div>
  </Stack>
);

export default Header;
