import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function Card() {
  const [value, setValue] = useState()
  const handleInputChange = (inputValue) => {
    setValue(inputValue);
  }; 
  return (
    <>
<div className=' bg-orangelight  w-96 h-96 flex flex-col justify-center items-center'>
<h2 className='font-bold '>Verify Your Phone Number</h2>
<div className="mt-11 ">
               <PhoneInput
               className='w-56 '
  international
  countryCallingCodeEditable={false}
  initialValueFormat="national"
  defaultCountry="US"
  value={value}
  onChange={handleInputChange}/>
  </div>
  <button className='bg-ButtonColor rounded-xl text-white  py-1 my-6 px-24'>Verify</button>

</div>

    </>
  )
}
