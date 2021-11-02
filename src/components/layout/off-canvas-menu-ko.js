import React, { useState } from 'react';
import {
  Button,
  Offcanvas,
  Stack,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import { Link } from 'gatsby';
import { OffcanvasLinksKoreanQuery } from '../hooks/offcanvas-hook-ko';

import MenuSVG from '../../svg/menu.svg';

function OffCanvasMenu({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const offcanvasquery = OffcanvasLinksKoreanQuery();
  const offcanvaslinks = offcanvasquery.contentfulNavigationLinks;

  return (
    <>
      <Button variant='primary' onClick={handleShow} className='offcanvas-btn'>
        <span>MENU</span>
        <MenuSVG className='menu-svg' />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton closeVariant={'white'}></Offcanvas.Header>
        <Offcanvas.Body key={offcanvasquery}>
          <Stack gap={5} className='offcanvas-stack'>
            {/* Header Links */}
            <div>
              <Link
                to='/'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                {offcanvaslinks.homePageLinkKorean}
              </Link>
            </div>

            {/* Dropdown Menu */}
            <div>
              <DropdownButton id='dropdown-basic-button' title='프로그램들'>
                <Dropdown.Item href='/programs/library-membership'>
                  {offcanvaslinks.libraryMembershipProgramKorean}
                </Dropdown.Item>
                <Dropdown.Item href='/programs/young-readers'>
                  {offcanvaslinks.youngReadersProgramKorean}
                </Dropdown.Item>
                <Dropdown.Item href='/programs/adult-classes'>
                  {offcanvaslinks.adultClassesKorean}
                </Dropdown.Item>
                <Dropdown.Item href='/programs/adult-classes/#private-classes'>
                  {offcanvaslinks.privateClassesKorean}
                </Dropdown.Item>
                <Dropdown.Item href='/programs/summer-programs'>
                  {offcanvaslinks.summerProgramKorean}
                </Dropdown.Item>
                <Dropdown.Item href='/programs/winter-programs'>
                  {offcanvaslinks.winterProgramKorean}
                </Dropdown.Item>
              </DropdownButton>
            </div>
            {/* End Dropdown Menu */}

            <div>
              <Link
                to='/about-ebl'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                {offcanvaslinks.aboutPageKorean}
              </Link>
            </div>
            <div>
              <Link
                to='/common-q-and-a'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                {offcanvaslinks.qandAPageKorean}
              </Link>
            </div>
            <div>
              <Link
                to='/contact-and-location'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                {offcanvaslinks.contactAndLocationPageKorean}
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
