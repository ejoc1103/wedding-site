import React from 'react';
import '../../App.css';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  return (
    <>
      <div></div>
      <div className='nav'>
        <ul className='nav-list'>
          <NavLink
            className={
              'nav-link' + (location.pathname === '/' ? ' active' : '')
            }
            end
            to='/'
            id='homeTab'
          >
            Home
          </NavLink>
          <NavLink
            className={
              'nav-link' + (location.pathname === '/photos' ? ' active' : '')
            }
            to='/photos'
          >
            Photos
          </NavLink>
          <NavLink
            className={
              'nav-link' + (location.pathname === '/travel' ? ' active' : '')
            }
            to='/travel'
          >
            Travel
          </NavLink>
          <NavLink
            className={
              'nav-link' + (location.pathname === '/registry' ? ' active' : '')
            }
            to='/registry'
          >
            Registry
          </NavLink>
          <a
            target='_blank'
            rel='noreferrer'
            activeclassname='is-active'
            className='nav-link'
            href='https://www.theknot.com/us/shelly-applegate-and-ed-o-connor-jul-2023/rsvp'
          >
            RSVP
          </a>
        </ul>
      </div>
      <div></div>
      <hr className='main-hr' />
    </>
  );
};

export default Nav;

{/* <NavLink
  className={'nav-link' + (location.pathname === '/rsvp' ? ' active' : '')}
  to='/rsvp'
>
  RSVP
</NavLink>; */}
