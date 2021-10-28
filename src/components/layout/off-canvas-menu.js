import React, { useState } from 'react';
import {
  Button,
  Offcanvas,
  Stack,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import { Link } from 'gatsby';

import MenuSVG from '../../svg/menu.svg';

function OffCanvasMenu({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow} className='offcanvas-btn'>
        <span>MENU</span>
        <MenuSVG className='menu-svg' />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton closeVariant={'white'}></Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={5} className='offcanvas-stack'>
            {/* Header Links */}
            <div>
              <Link
                to='/'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                Home
              </Link>
            </div>

            {/* Dropdown Menu */}
            <div>
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

            <div>
              <Link
                to='/'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                About EBL
              </Link>
            </div>
            <div>
              <Link
                to='/'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                Common Q&amp;A
              </Link>
            </div>
            <div>
              <Link
                to='/'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                Contact &amp; Location
              </Link>
            </div>
            <div>
              <Link
                to='/'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                Korean
              </Link>
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function OffCanvasBtn() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasMenu key={idx} placement={placement} />
      ))}
    </>
  );
}

export default OffCanvasBtn;
