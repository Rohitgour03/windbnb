import React from 'react'
import Guests from '../Guests'
import Locations from '../Locations'
import Input from '../Input/Input'
import SearchBtn from '../SearchBtn/SearchBtn'

const DesktopModel = (props) => {
    const [isLocationFocus, setIsLocationFocus] = React.useState(false);
    const [isGuestFocus, setIsGuestFocus] = React.useState(false);

    function locationInputHandler(event){
        props.setLocationValue(event.target.value)
    }

    function focusHandler(event){   
        if(event.target.name === 'location'){
            setIsLocationFocus(true)
        } else if(event.target.name === 'guests'){
            setIsGuestFocus(true)
        }
    }

  
  return (
    <React.Fragment>
        <div className='max-w-7xl w-11/12 my-20 mx-auto font-mulish'>
            <form onSubmit={props.formSubmitHandler}> 
                <div className='mx-auto grid grid-cols-3 shadow-sm'>
                    <div className='focus-within:outline outline-1 rounded-2xl outline-[#333333]'>
                        <Input 
                            label="location" 
                            name="location"
                            type="text"
                            placeholderText="Enter the Location" 
                            focusHandler={focusHandler} 
                            onChange={locationInputHandler}
                            value={props.locationValue}
                        />
                    </div>
                    <div className='focus-within:outline outline-1 rounded-2xl outline-[#333333]'>
                        <Input 
                            label="guests" 
                            name="guests"
                            type="text"
                            placeholderText="Add Guests"
                            focusHandler={focusHandler}
                            onChange={focusHandler}
                            value={`${props.adultCount + props.childrenCount} guests`}
                        />
                    </div>
                    <div className='justify-self-center self-center'><SearchBtn /></div>
                </div>
            </form>

            <div className='max-w-7xl mx-auto grid grid-cols-3'>
                <div>
                    {isLocationFocus && <Locations />}
                </div>
                <div>
                    {isGuestFocus && 
                        <Guests 
                            adultCount={props.adultCount}
                            childrenCount={props.childrenCount}
                            setAdultCount={props.setAdultCount} 
                            setChildrenCount={props.setChildrenCount} />}
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default DesktopModel;