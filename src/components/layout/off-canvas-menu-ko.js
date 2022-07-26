import React, { useState } from 'react';
import { Button, Offcanvas, Stack, Accordion } from 'react-bootstrap';
import { Link } from 'gatsby';
import { OffcanvasLinksKoreanQuery } from '../hooks/offcanvas-hook-ko';

import MenuSVG from '../../svg/menu.svg';
import DownArrowSVG from '../../svg/down-arrow.svg';

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
            <div>
              <Link
                to='/about-ebl'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                {offcanvaslinks.aboutPageKorean}
              </Link>
            </div>

            {/* Accordion Menu */}
            <div>
              <Accordion>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    프로그램들 <DownArrowSVG className='accordion-arrow' />
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <Link
                        to='/programs/library-membership'
                        className='accordion-link'
                        onClick={handleClose}
                      >
                        {offcanvaslinks.libraryMembershipProgramKorean}
                      </Link>
                    </div>
                    <div>
                      <Link
                        to='/programs/young-readers'
                        className='accordion-link'
                        onClick={handleClose}
                      >
                        {offcanvaslinks.youngReadersProgramKorean}
                      </Link>
                    </div>
                    <div>
                      <Link
                        to='/programs/adult-classes'
                        className='accordion-link'
                        onClick={handleClose}
                      >
                        {offcanvaslinks.adultClassesKorean}
                      </Link>
                    </div>
                    <div>
                      <Link
                        to='/programs/adult-classes/#private-classes'
                        className='accordion-link'
                        onClick={handleClose}
                      >
                        {offcanvaslinks.privateClassesKorean}
                      </Link>
                    </div>
                    <div>
                      <Link
                        to='/programs/summer-winter-programs'
                        className='accordion-link'
                        onClick={handleClose}
                      >
                        {offcanvaslinks.summerProgramKorean}
                      </Link>
                    </div>
                    <div>
                      <Link
                        to='/programs/summer-winter-programs/#winter-program'
                        className='accordion-link'
                        onClick={handleClose}
                      >
                        {offcanvaslinks.winterProgramKorean}
                      </Link>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            {/* End Accordion Menu */}

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
