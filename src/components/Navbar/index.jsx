import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/slices/authSlice';
import './Navbar.scss';

function Navbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='nav-content'>
          <div className='logo'>BOOKMARKER</div>
          <ul className='items'>
            <li>
              <Link to='/bookmarks'>Bookmarks</Link>
            </li>
            <li>
              <a href='#!' onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
