import React, { useState, useEffect } from 'react';

interface BoroughData {
  id: number;
  name: string;
  search: string;
  image: string;
}

function Boroughs({data}: {data: BoroughData[]}) {

  function openBorough(data: string) {
    // navigate to the page depending on which one was clicked
  }

  // async function getBoroughs() {
  //   try {
  //     const response = await axios.get('http://localhost:3000/boroughs');
  //     console.log('this is the response: ', response)
  //     setBoroughs(response.data);
  //   } catch (err) {
  //     // error handling here
  //   }
  // }

  // useEffect(() => {
  //   getBoroughs();
  // }, [user]);
  
  return (
    <>
      {data.map((current: BoroughData) => {
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
