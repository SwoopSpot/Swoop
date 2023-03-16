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
      console.log('this is the response: ', response);
      setBoroughs(response.data);
    } catch (err) {
      // error handling here
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
                <input type='text' placeholder='Search' required />
              </div>
              <div className='td' id='s-cover'>
                <button type='submit'>
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

/*
[x] make a table in SQL for all five boroughs (names, search key and image)
[] populate components for each borough as cards
  [] cards should have the name of the borough in uppercase on them 
  [] when you hover over the card they should go from black and white to color photos 
  [] click on cards to open up a page with:
      [] a map of that area
      [] search bar
      [] details of any parking spots in that area 
[] create a search bar 
[] populate a user icon on the top right of the nav bar


*/
