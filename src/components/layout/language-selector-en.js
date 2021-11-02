import * as React from 'react';
import { Link } from 'gatsby';

const LanguageSelectorEn = () => (
  <>
    <Link to='/en' className='home-selector header-link selector-hidden'>
      En | Ko
    </Link>
    <Link
      to='/en/about-ebl'
      className='about-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/en/common-q-and-a'
      className='q-and-a-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/en/contact-and-location'
      className='contact-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/en/programs/library-membership'
      className='library-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/en/programs/young-readers'
      className='yr-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/en/programs/adult-classes'
      className='adult-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/en/programs/summer-programs'
      className='summer-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/en/programs/winter-programs'
      className='winter-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/en/404'
      className='four-o-four-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
  </>
);

export default LanguageSelectorEn;
