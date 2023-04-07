import React from 'react';
import './stylesheets/Listing.scss';

interface ListingsData {
  id: number;
  name: string;
  image: string;
  date: string;
  location: string;
  cost: number;
}

const Listing = ({ data }: { data: ListingsData[] }) => {
  return (
    // <>
    //   {data.map((listing: ListingsData) => {
    //     const { id, name, image, date, location, cost } = listing;
    //     return (
    //       <div key={name + id} className='listingContainer'>
    //         <div className='listingName'>Name: {name}</div>
    //         <div className='listingName'>Date: {date}</div>
    //         <div className='listingLocation'>Location: {location}</div>
    //         <div className='listingTotal'>Total: {cost}</div>
    //       </div>
    //     );
    //   })}
    // </>
    <div className='listingContainer'>
      <div className='listingName'>Name: Test</div>
      <div className='listingDate'>Date: Jan 17, 2023</div>
      <div className='listingLocation'>Location: SF</div>
      <div className='listingTotal'>Total: $134</div>
    </div>
  );
};

export default Listing;
