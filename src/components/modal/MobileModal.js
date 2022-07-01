import React from 'react'
import Guests from '../Guests'
import Locations from '../Locations'
import Input from '../Input/Input'
import SearchBtn from '../SearchBtn/SearchBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const MobileModal = (props) => {
    const [isLocationFocus, setIsLocationFocus] = React.useState(false);
    const [isGuestFocus, setIsGuestFocus] = React.useState(false);

    function locationInputHandler(event){
        props.setLocationValue(event.target.value)
    }

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

        <form onSubmit={props.formSubmitHandler}>
            <div className='rounded-2xl border-2 border-solid border-slate-600] mx-6'>
                <Input 
                    label="location" 
                    name="location"
                    type="text"
                    placeholderText="Enter the Location" 
                    focusHandler={focusHandler} 
                    onChange={locationInputHandler}
                    value={props.locationValue} /> 
                <Input 
                    label="guests" 
                    name="guests"
                    type="text"
                    placeholderText="Add Guests"
                    focusHandler={focusHandler}
                    onChange={focusHandler}
                    value={`${props.adultCount + props.childrenCount} guests`} />
            </div>
            <div className='px-6'>
                {isLocationFocus && <Locations />}
                {isGuestFocus && 
                    <Guests
                        adultCount={props.adultCount}
                        childrenCount={props.childrenCount}
                        setAdultCount={props.setAdultCount} 
                        setChildrenCount={props.setChildrenCount} />}
            </div>
            <div className='flex justify-center my-8'>
                <SearchBtn />
            </div>
        </form>
    </React.Fragment>
  )
}

export default MobileModal;