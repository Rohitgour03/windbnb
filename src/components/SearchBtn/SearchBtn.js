import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBtn = () => {
  return (
    <button 
      className='flex justify-between items-center gap-2.5 w-32 rounded-2xl py-4 px-7 bg-[#EB5757] text-[#F2F2F2] shadow-[0_1px_6px_0_rgba(0, 0, 0, 0.1)]' 
      type='submit'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <span className='text-sm font-bold leading-[18px]'>Submit</span>
    </button>
  )
}

export default SearchBtn;