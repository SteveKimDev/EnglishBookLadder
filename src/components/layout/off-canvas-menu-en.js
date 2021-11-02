import React, { useState } from 'react';
import {
  Button,
  Offcanvas,
  Stack,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import { Link } from 'gatsby';
import { OffcanvasLinksEnglishQuery } from '../hooks/offcanvas-hook-en';

import MenuSVG from '../../svg/menu.svg';

function OffCanvasMenu({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const offcanvasquery = OffcanvasLinksEnglishQuery();
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
                to='/en'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                {offcanvaslinks.homePageLinkEnglish}
              </Link>
            </div>

            {/* Dropdown Menu */}
            <div>
              <DropdownButton id='dropdown-basic-button' title='Programs'>
                <Dropdown.Item href='/en/programs/library-membership'>
                  {offcanvaslinks.libraryMembershipProgramEnglish}
                </Dropdown.Item>
                <Dropdown.Item href='/en/programs/young-readers'>
                  {offcanvaslinks.youngReadersProgramEnglish}
                </Dropdown.Item>
                <Dropdown.Item href='/en/programs/adult-classes'>
                  {offcanvaslinks.adultClassesEnglish}
                </Dropdown.Item>
                <Dropdown.Item href='/en/programs/adult-classes/#private-classes'>
                  {offcanvaslinks.privateClassesEnglish}
                </Dropdown.Item>
                <Dropdown.Item href='/en/programs/summer-programs'>
                  {offcanvaslinks.summerProgramEnglish}
                </Dropdown.Item>
                <Dropdown.Item href='/en/programs/winter-programs'>
                  {offcanvaslinks.winterProgramEnglish}
                </Dropdown.Item>
              </DropdownButton>
            </div>
            {/* End Dropdown Menu */}

            <div>
              <Link
                to='/en/about-ebl'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                {offcanvaslinks.aboutPageEnglish}
              </Link>
            </div>
            <div>
              <Link
                to='/en/common-q-and-a'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                {offcanvaslinks.qandAPageEnglish}
              </Link>
            </div>
            <div>
              <Link
                to='/en/contact-and-location'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                {offcanvaslinks.contactAndLocationPageEnglish}
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
