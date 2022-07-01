import React from 'react'
import stays from '../data/stays.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Locations = (props) => {

    const locations = new Set();
    stays.forEach(stay => {
        locations.add(`${stay.city}, ${stay.country}`)
    })
    const locationElements = Array.from(locations).map(location => (
        <li key={location} className='mb-4'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span className='ml-4'>{location}</span>
        </li>
    ))

  return (
    <div className='mx-auto px-6 my-8 '>
        <ul>
            {locationElements}
        </ul>
    </div>
  )
}

export default Locations