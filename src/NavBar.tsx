import React, { useState } from 'react';
import './stylesheets/NavBar.scss';
import logo from './images/logo.png';
import burger from './images/burger.png';

function NavBar() {
  const [modalStatus, setModalStatus] = useState(false);

  function handleOpen() {
    setModalStatus(true);
  }

  function handleClose() {
    setModalStatus(false);
  }
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
        <a id='loginLink' href='#'>
          <button className='accessButton'>LOGIN</button>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
