import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

interface BoroughData {
  id: number;
  name: string;
  search: string;
  image: string;
}

function Boroughs() {
  const { user } = useAuth0();
  const [boroughs, setBoroughs] = useState<BoroughData[]>([]);

  function openBorough(search: string) {
    // navigate to the page depending on which one was clicked
  }

  async function getBoroughs() {
    try {
      const response = await axios.get('http://localhost:3000/boroughs');
      console.log('this is the response: ', response)
      setBoroughs(response.data);
    } catch (err) {
      // error handling here
    }
  }

  useEffect(() => {
    getBoroughs();
  }, [user]);
  
  return (
    <>
      {boroughs.map((current) => {
        const { id, name, search, image } = current;
        return (
          <div className='boroughContainer'>
            <div key={id} className='boroughWrapper'>
              <img
                className='borough'
                src={image}
                alt={name}
                onClick={() => openBorough(search)}
              ></img>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Boroughs;
