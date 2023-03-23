import React from 'react';
import './stylesheets/CreateListing.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { useForm } from 'react-cool-form';
import NavBar from './NavBar';
// import Autocomplete from 'react-google-autocomplete';

function CreateListing() {
  const { user } = useAuth0();

  const { form, use } = useForm({
    defaultValues: {
      nameYourSpot: '',
      address: '',
      parkingSpotDescription: '',
      neighborhoodDescription: '',
      defaultRate: '',
      numberOfCars: '',
      framework: '',
    },
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2)),
  });

  const errors = use('errors');

  return (
    <div>
      <NavBar />
      <div className='formContainer'>
        <form ref={form} noValidate>
          <div>
            <input
              className='smallField'
              name='nameYourSpot'
              placeholder='Name your spot'
              required
            />
            {errors.nameYourSpot && <p>{errors.nameYourSpot}</p>}
          </div>
          <div>
            <input
              className='smallField'
              name='address'
              placeholder='Address'
              required
            />
            {errors.address && <p>{errors.address}</p>}
          </div>
          <div>
            <input
              className='smallField'
              name='defaultRate'
              placeholder='Default rate'
              required
            />
            {errors.address && <p>{errors.defaultRate}</p>}
          </div>
          <div>
            <input
              className='largeField'
              name='parkingSpotDescription'
              placeholder='Parking spot description'
              required
            />
            {errors.description && <p>{errors.parkingSpotDescription}</p>}
          </div>
          <div>
            <input
              className='largeField'
              name='neighborhoodDescription'
              placeholder='Neighborhood description'
              required
            />
            {errors.description && <p>{errors.neighborhoodDescription}</p>}
          </div>
          <div>
            <input
              className='smallField'
              name='numberOfCars'
              placeholder='Number of cars'
              required
            />
            {errors.description && <p>{errors.numberOfCars}</p>}
          </div>
          <div className = 'checkBox'>
            <label>
              <input type='checkbox' />
              Flexible swoop-in & out
            </label>
            <label>
              <input type='checkbox' />
              Security 
            </label>
            <label>
              <input type='checkbox' />
              Covered spot
            </label>
          </div>
          {/* <select name='framework'>
            <option value=''>I'm interesting in...</option>
            <option value='react'>React</option>
            <option value='vue'>Vue</option>
            <option value='angular'>Angular</option>
            <option value='svelte'>Svelte</option>
          </select> */}
          <input type='submit' />
        </form>
      </div>
    </div>
  );
}

export default CreateListing;
