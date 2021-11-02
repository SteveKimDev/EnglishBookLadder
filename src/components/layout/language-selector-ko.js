import * as React from 'react';
import { Link } from 'gatsby';

const LanguageSelectorKo = () => (
  <>
    <Link to='/' className='home-selector header-link selector-hidden'>
      En | Ko
    </Link>
    <Link
      to='/about-ebl'
      className='about-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/common-q-and-a'
      className='q-and-a-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/contact-and-location'
      className='contact-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/programs/library-membership'
      className='library-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/programs/young-readers'
      className='yr-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/programs/adult-classes'
      className='adult-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/programs/summer-programs'
      className='summer-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/programs/winter-programs'
      className='winter-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
    <Link
      to='/404'
      className='four-o-four-selector header-link selector-hidden'
    >
      En | Ko
    </Link>
  </>
);

export default LanguageSelectorKo;
