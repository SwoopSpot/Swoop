import React, { useState, useEffect } from 'react';
import './stylesheets/Borough.scss';

interface BoroughData {
  id: number;
  name: string;
  search: string;
  image: string;
}

function Boroughs({data}: {data: BoroughData[]}) {

  function openBorough(search: string) {
    console.log(search);
  }

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
                className='boroughImage'
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
