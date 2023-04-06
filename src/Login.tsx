import './stylesheets/Login.scss'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useState } from 'react';

interface RentalsData {
  id: number;
  date: Date;
  location: string;
  cost: number;
}

const Login = () => {
  const { user } = useAuth0();
  const [rentalHistory, setRentalHistory] = useState<RentalsData[]>([]);
  const [upcomingRentals, setUpcomingRentals] = useState<RentalsData[]>([])


  const getUserBookings = async() => {
    try {
      const url = 'http://localhost:3000/login'
      const response = await axios.get(url)
      const data = response.data;
      const upcoming:[] = []
      const old:[] = []
      // loops through all bookings and sorts them into upcoming rentals or old rentals
      // friggen typescript, can't get loop below to work.
      // data.forEach((booking: RentalsData) => {
      //   const currentDate = new Date();
      //   if (booking.date >= currentDate) {
      //     upcoming.push(booking)
      //   } else {
      //     old.push(booking)
      //   }
      // });
      setUpcomingRentals(upcoming)
      setRentalHistory(old)
    } catch (err) {
      console.log('error fetching getUserBookings', err)
    }
  }

  return (
    <div className='loginContainer'>
      <div className="leftContainer">
        <h1>Profile</h1>
      </div>
      <div className="middleContainer">
        <h1>Upcoming Rentals </h1>
        <div className="upcomingContainer">
          <h2>Rental Example</h2>
        </div>
      </div>
      <div className="rightContainer">
        <h1>History</h1>
        <div className="historyContainer">
          <h2>History Example</h2>
        </div>
      </div>

    </div>
  );
};

export default Login;
