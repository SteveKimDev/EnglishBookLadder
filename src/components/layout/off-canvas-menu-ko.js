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
        <span>Menu</span>
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
                홈페이지
              </Link>
            </div>

            {/* Dropdown Menu */}
            <div>
              <DropdownButton id='dropdown-basic-button' title='프로그램들'>
                <Dropdown.Item href='/programs/library-membership'>
                  도서관 회원
                </Dropdown.Item>
                <Dropdown.Item href='/programs/young-readers'>
                  젊은 독자들
                </Dropdown.Item>
                <Dropdown.Item href='/programs/adult-classes'>
                  성인 클래스
                </Dropdown.Item>
                <Dropdown.Item href='/programs/adult-classes/#private-classes'>
                  개인 수업
                </Dropdown.Item>
                <Dropdown.Item href='/programs/summer-programs'>
                  여름 프로그램
                </Dropdown.Item>
                <Dropdown.Item href='/programs/winter-programs'>
                  겨울 프로그램
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
                EBL에 대해
              </Link>
            </div>
            <div>
              <Link
                to='/common-q-and-a'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                질문과 답변
              </Link>
            </div>
            <div>
              <Link
                to='/contact-and-location'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                연락처 및 위치
              </Link>
            </div>
            <div>
              <Link
                to='/en'
                className='header-link offcanvas-link'
                onClick={handleClose}
              >
                English
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
