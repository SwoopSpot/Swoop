import React from 'react';

interface ListingsData {
  id: number;
  date: Date;
  location: string;
  cost: number;
}

const Listing = ({data}: {data:ListingsData[]}) => {
  return (
    <div className='listingContainer'>
      
    </div>
  );
};

export default Listing;
