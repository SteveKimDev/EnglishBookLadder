import React, { useState } from 'react';
import { Button, Offcanvas, Stack, Accordion } from 'react-bootstrap';
import { Link } from 'gatsby';
import { OffcanvasLinksEnglishQuery } from '../hooks/offcanvas-hook-en';

import MenuSVG from '../../svg/menu.svg';
import DownArrowSVG from '../../svg/down-arrow.svg';

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

            {/* Accordion Menu */}
            <div>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    Programs <DownArrowSVG className='accordion-arrow' />
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <Link
                        to='/en/programs/library-membership'
                        className='accordion-link'
                        onClick={handleClose}
                      >
                        {offcanvaslinks.libraryMembershipProgramEnglish}
                      </Link>
                    </div>
                    <div>
                      <Link
                        to='/en/programs/young-readers'
                        className='accordion-link'
                        onClick={handleClose}
                      >
                        {offcanvaslinks.youngReadersProgramEnglish}
                      </Link>
                    </div>
                    <div>
                      <Link
                        to='/en/programs/adult-classes'
                        className='accordion-link'
                        onClick={handleClose}
                      >
                        {offcanvaslinks.adultClassesEnglish}
                      </Link>
                    </div>
                    <div>
                      <Link
                        to='/en/programs/adult-classes/#private-classes'
                        className='accordion-link'
                        onClick={handleClose}
                      >
                        {offcanvaslinks.privateClassesEnglish}
                      </Link>
                    </div>
                    <div>
                      <Link
                        to='/en/programs/summer-winter-programs'
                        className='accordion-link'
                        onClick={handleClose}
                      >
                        {offcanvaslinks.summerProgramEnglish}
                      </Link>
                    </div>
                    <div>
                      <Link
                        to='/en/programs/summer-winter-programs/#winter-program'
                        className='accordion-link'
                        onClick={handleClose}
                      >
                        {offcanvaslinks.winterProgramEnglish}
                      </Link>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            {/* End Accordion Menu */}

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
