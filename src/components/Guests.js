import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const Guests = (props) => {

    function handleCount(event){
        if(event.currentTarget.name === 'adultCount'){
            if(event.currentTarget.id === 'increaseCount'){
                props.setAdultCount(prevCount => prevCount + 1)
            } else if(event.currentTarget.id === 'decreaseCount' && props.adultCount > 0){
                props.setAdultCount(prevCount => prevCount - 1)
            }
        } else if(event.currentTarget.name === 'childrenCount'){
            if(event.currentTarget.id === 'increaseCount'){
                props.setChildrenCount(prevCount => prevCount + 1)
            } else if(event.currentTarget.id === 'decreaseCount' && props.childrenCount > 0){
                props.setChildrenCount(prevCount => prevCount - 1)
            }
        }
    }

  return (
    <div className='flex flex-col gap-8 my-8 px-6'>
        <div>
            <p className='font-semibold'>Adults</p>
            <p className='text-zinc-400'>Ages 13 or above</p>
            <div className='flex gap-4 mt-3'>
                <button 
                    className='flex justify-center items-center w-6 h-6 border border-[#828282] rounded-[4px] hover:cursor-pointer'
                    name='adultCount'
                    id='decreaseCount'
                    onClick={handleCount}>
                    <FontAwesomeIcon 
                        className={`${props.adultCount === 0 ? "text-zinc-400": "text-[#333333]"}`} 
                        icon={faMinus} />
                </button>
                <div className='text-base font-bold'>
                    {props.adultCount}
                </div>
                <button
                    className='flex justify-center items-center w-6 h-6 border border-[#828282] rounded-[4px] hover:cursor-pointer'
                    name='adultCount'
                    id='increaseCount'
                    onClick={handleCount}> 
                    <FontAwesomeIcon className='text-[#333333]' icon={faPlus} />
                </button>
            </div>
        </div>
        <div>
            <p className='font-semibold'>Children</p>
            <p className='text-zinc-400'>Ages 2-12</p>
            <div className='flex gap-4 mt-3'>
                <button 
                    className='flex justify-center items-center w-6 h-6 border border-[#828282] rounded-[4px] hover:cursor-pointer'
                    name='childrenCount'
                    id='decreaseCount'
                    onClick={handleCount}>
                    <FontAwesomeIcon 
                        className={`${props.childrenCount === 0 ? "text-zinc-400": "text-[#333333]"}`} 
                        icon={faMinus} />
                </button>
                <div className='text-base font-bold'>
                    {props.childrenCount}
                </div>
                <button
                    className='flex justify-center items-center w-6 h-6 border border-[#828282] rounded-[4px] hover:cursor-pointer'
                    name='childrenCount'
                    id='increaseCount'
                    onClick={handleCount}> 
                    <FontAwesomeIcon className='text-[#333333]' icon={faPlus} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Guests