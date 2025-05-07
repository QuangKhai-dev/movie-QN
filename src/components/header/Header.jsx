
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { UserNav } from '../userNav/UserNav';

const Header = () => {

  const navRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navRef.current.classList.add('shrink');
      } else {
        navRef.current.classList.remove('shrink');
      }
    }
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, [])

  useEffect(() => {

  }, [])

  return (
    <nav ref={navRef} className='navbar'>
      <ul className="navbar-navs">
        <li className='navbar-navs_item'><Link absolute activeClass='active' to='phim' spy={true} smooth={true} duration={500}>Phim</Link></li>
        <li className='navbar-navs_item'><Link absolute activeClass='active' to='cumrap' spy={true} smooth={true} duration={500}>Cụm rạp</Link></li>
        <li className='navbar-navs_item'><Link absolute activeClass='active' to='ungdung' spy={true} smooth={true} duration={500}>Ứng dụng</Link></li>
      </ul>
      <Link to={'/'} className='navbar-logo'>MOVIE</Link>
      <UserNav />
    </nav>
  )
}

export default Header