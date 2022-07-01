import React from 'react'

const Input = (props) => {
    const bottomBorder = (props.label === 'location') ? 'border-b border-[#F2F2F2]' : "";
  return (
    <div className={`px-6 py-3 w-full ${bottomBorder}`} >
        <label className='block mb-1 text-xs font-bold leading-3 uppercase' htmlFor="location">{props.label}</label>
        <input 
          className='text-sm font-normal leading-[18px] placeholder:text-slate-400 py-1 pl-0 pr-3 block bg-white w-full focus:outline-none' 
          name={props.name} 
          type="text" 
          value={props.value}
          placeholder={props.placeholderText}
          onChange={props.onChange}
          onFocus={props.focusHandler}
          // onBlur={props.focusHandler}
          />
    </div>
  )
}

export default Input;