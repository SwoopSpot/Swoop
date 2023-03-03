import React, { useState, useEffect } from 'react';
import './stylesheets/NavBar.scss';
import logo from './images/logo.png';
import burger from './images/burger.png';
import { useAuth0 } from '@auth0/auth0-react';

function NavBar() {
  const { user, logout, loginWithRedirect } = useAuth0();
  const [modalStatus, setModalStatus] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState('LOGIN');

  function handleOpen() {
    setModalStatus(true);
  }

  function handleClose() {
    setModalStatus(false);
  }

  function logUserOut() {
    logout({logoutParams: {returnTo: window.location.origin}})
  }
  
  useEffect(() => {
    if (user) {
      setIsLoggedIn('LOGOUT')
    } else {
      setIsLoggedIn('LOGIN')
    }
  }, [user])
  
  
  return (
    <div className='navBarWrapper'>
      <div className='left'>
        <button id='burgerButton' onClick={() => handleOpen()}>
          <img id='burgerImg' alt='burgerImg' src={burger} />
        </button>
        {modalStatus && (
          <div
            onClick={() => {
              handleClose();
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
        <button onClick={() => !user ? loginWithRedirect() : logUserOut()} className='accessButton'>
          {isLoggedIn}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
