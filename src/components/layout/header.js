import * as React from 'react';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'gatsby';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import OffCanvasMenu from './off-canvas-menu';

const Header = () => (
  <Stack direction='horizontal' gap={5} className='header-section'>
    <div className='header-brand'>EBL</div>
    {/* Header Links */}
    <div className='ms-auto hidden'>
      <Link to='/' className='header-link'>
        Home
      </Link>
    </div>

    {/* Dropdown Menu */}
    <div className='hidden'>
      <DropdownButton id='dropdown-basic-button' title='Programs'>
        <Dropdown.Item href='/'>Library Membership</Dropdown.Item>
        <Dropdown.Item href='/'>Young Readers</Dropdown.Item>
        <Dropdown.Item href='/'>Adult Classes</Dropdown.Item>
        <Dropdown.Item href='/'>Private Classes</Dropdown.Item>
        <Dropdown.Item href='/'>Summer Program</Dropdown.Item>
        <Dropdown.Item href='/'>Winter Program</Dropdown.Item>
      </DropdownButton>
    </div>
    {/* End Dropdown Menu */}

    <div className='hidden'>
      <Link to='/' className='header-link'>
        About EBL
      </Link>
    </div>
    <div className='hidden'>
      <Link to='/' className='header-link'>
        Common Q&amp;A
      </Link>
    </div>
    <div className='hidden'>
      <Link to='/' className='header-link'>
        Contact &amp; Location
      </Link>
    </div>
    <div className='ms-auto hidden'>
      <Link to='/' className='header-link'>
        Korean
      </Link>
    </div>
    <div className=' ms-auto display'>
      <OffCanvasMenu />
    </div>
  </Stack>
);

export default Header;
