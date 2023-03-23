import React, { useState, useEffect } from 'react';
import './stylesheets/NavBar.scss';
import logo from './images/logo.png';
import burger from './images/burger.png';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function NavBar() {
  const { user, logout, loginWithRedirect } = useAuth0();
  const [modalStatus, setModalStatus] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState('LOGIN');
  const [userPhoto, setUserPhoto] = useState<string>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [toggleButton, setToggleButton] = useState('SWITCH TO HOSTING');

  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseDropDown() {
    setAnchorEl(null);
  }

  function handleOpenModal() {
    setModalStatus(true);
  }

  function handleCloseModal() {
    setModalStatus(false);
  }

  function logUserOut() {
    logout({ logoutParams: { returnTo: window.location.origin } });
  }

  // this function changes users host/guest status if necessary later
  // function handleViewChange() {
  //   // checks the current view status of user
  //   const stored = localStorage.getItem('view'); 
  //   // 
  //   if (stored === 'null') localStorage.setItem('view', 'Host');
  //   if (stored === 'Host') {
  //     setToggleButton('SWITCH TO GUEST')
  //     localStorage.setItem('view', 'Guest')
  //     navigate('/createListing')
  //   }
  //   if (stored === 'Guest') {
  //     setToggleButton('SWITCH TO HOST')
  //     localStorage.setItem('view', 'Host')
  //     navigate('/map')
  //   }
  // }

  useEffect(() => {
    if (user) {
      setIsLoggedIn('LOGOUT');
      setUserPhoto(user.picture);
    } else {
      setIsLoggedIn('LOGIN');
    }
  }, [user]);

  return (
    <div className='navBarWrapper'>
      <div className='left'>
        <button id='burgerButton' onClick={() => handleOpenModal()}>
          <img id='burgerImg' alt='burgerImg' src={burger} />
        </button>
        {modalStatus && (
          <div
            onClick={() => {
              handleCloseModal();
            }}
            className={modalStatus ? 'growOverlay' : 'overlay'}
          >
            <ul className='modalText'>
              <li>
                <a href='/'>HOME</a>
              </li>
              <li>
                <a href='/'>ABOUT</a>
              </li>
              <li>
                <a href='/'>TEAM</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className='spacer'></div>
      <img id='logo' src={logo} alt='logo' />
      <div className='spacer'></div>
      <div className='right'>
        <button
          onClick={() => (!user ? loginWithRedirect() : logUserOut())}
          className='accessButton'
        >
          {isLoggedIn}
        </button>

        {/* <button onClick={() => handleViewChange()} className='accessButton'>
          {toggleButton}
        </button> */}

        <button
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <img id='userPhoto' alt='userPhoto' src={userPhoto} />{' '}
        </button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseDropDown}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleCloseDropDown}>Profile</MenuItem>
          <MenuItem onClick={handleCloseDropDown}>My Account</MenuItem>
          <MenuItem onClick={handleCloseDropDown}>Messages</MenuItem>
          <MenuItem onClick={handleCloseDropDown}>Bookings</MenuItem>
          <MenuItem onClick={() => navigate('/createlisting')}>Create Listing</MenuItem>
          <MenuItem onClick={handleCloseDropDown}>Manage Listings</MenuItem>
          <MenuItem onClick={handleCloseDropDown}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar;
