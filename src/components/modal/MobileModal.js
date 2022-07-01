import React from 'react'
import Guests from '../Guests'
import Locations from '../Locations'
import Input from '../Input/Input'
import SearchBtn from '../SearchBtn/SearchBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const MobileModal = () => {
    const [isLocationFocus, setIsLocationFocus] = React.useState(false);
    const [isGuestFocus, setIsGuestFocus] = React.useState(false);

    function focusHandler(event){
        
        if(event.target.name === 'location'){
            setIsLocationFocus(true)
            console.log("location got focus!")
        } else if(event.target.name === 'guests'){
            setIsGuestFocus(true)
            console.log("guests got focus!")
        }
    }

  return (
    <React.Fragment>
        <div className='flex justify-between items-center w-full px-6 py-4'>
            <p className='text-sm font-bold leading-4'>Edit your Search</p>
            <FontAwesomeIcon className='text-2xl hover:cursor-pointer' icon={faXmark} />
        </div>

        <form>
            <div className='rounded-2xl border-2 border-solid border-slate-600] mx-6'>
                <Input 
                    label="location" 
                    name="location"
                    placeholderText="Enter the Location" 
                    focusHandler={focusHandler} /> 
                <Input 
                    label="guests" 
                    name="guests"
                    placeholderText="Add Guests"
                    focusHandler={focusHandler} />
            </div>
            <div className='px-6'>
                {isLocationFocus && <Locations />}
                {isGuestFocus && <Guests />}
            </div>
            <div className='flex justify-center my-8'>
                <SearchBtn />
            </div>
        </form>
    </React.Fragment>
  )
}

export default MobileModal;