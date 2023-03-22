import React from 'react';
import './stylesheets/Landing.scss';
import NYCStreet from './images/NYCStreet.jpg';
import carParking from './images/carParking.png';
import NavBar from './NavBar';

function Landing() {
  return (
    <div className='landingContainer'>
      <NavBar />
      <div className='sectionOne'>
        <img id='NYCStreetImg' src={NYCStreet} alt='NYCStreet'></img>
        <div className='sectionOneContent'>
          PARKING MADE EASY
          <br />
          <div className='searchBarContainer'>
            <div id='cover'>
              <form method='get' action=''>
                <div className='tb'>
                  <div className='td'>
                    <input type='text' required />
                  </div>
                  <div className='td' id='s-cover'>
                    <button id='searchButton' type='submit'>
                      <div id='s-circle'></div>
                      <span></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='sectionTwo'>
        <div id='left'>
          <p>PARKING IN THE CITY MADE EASY WITH</p>
          <h1>Swoop</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div id='right'>
          <img id='carParkingImg' src={carParking} alt='carParking'></img>
        </div>
      </div>
    </div>
  );
}

export default Landing;
