import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './NavBar';
import Boroughs from './Boroughs';
import './stylesheets/Main.scss';
import axios from 'axios';

interface BoroughData {
  id: number;
  name: string;
  search: string;
  image: string;
}

function Main() {
  const { user } = useAuth0();
  const [boroughs, setBoroughs] = useState<BoroughData[]>([]);

  async function getBoroughs() {
    try {
      const response = await axios.get('http://localhost:8080/boroughs');
      setBoroughs(response.data);
    } catch (err) {
      console.log(
        'There was an error retrieving borough data. Error message: ' + err
      );
    }
  }

  useEffect(() => {
    getBoroughs();
  }, [user]);

  return (
    <div className='mainContainer'>
      <NavBar />
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
      <div className='boroughWrapperContainer'>
        <div className='boroughWrapper'>
          <Boroughs data={boroughs} />
        </div>
      </div>
    </div>
  );
}

export default Main;

