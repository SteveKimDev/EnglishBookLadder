import * as React from 'react';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'gatsby';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import LanguageSelectorEn from '../layout/language-selector-en';
import OffCanvasMenu from './off-canvas-menu-ko';

const Header = () => (
  <Stack direction='horizontal' gap={5} className='header-section'>
    <div className='header-brand'>EBL</div>
    {/* Header Links */}
    <div className='ms-auto hidden'>
      <Link to='/' className='header-link'>
        홈페이지
      </Link>
    </div>

    {/* Dropdown Menu */}
    <div className='hidden'>
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

    <div className='hidden'>
      <Link to='/about-ebl' className='header-link'>
        EBL에 대해
      </Link>
    </div>
    <div className='hidden'>
      <Link to='/common-q-and-a' className='header-link'>
        질문과 답변
      </Link>
    </div>
    <div className='hidden'>
      <Link to='/contact-and-location' className='header-link'>
        연락처 및 위치
      </Link>
    </div>
    <div className='ms-auto'>
      <LanguageSelectorEn />
    </div>
    <div className=' ms-auto display'>
      <OffCanvasMenu />
    </div>
  </Stack>
);

export default Header;
