import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


export default function Terms() {     
  const [value, setValue] = useState()
  const handleInputChange = (inputValue) => {
    setValue(inputValue);
  }; 
  return (
    <div className="bg-orangelight w-screen h-screen">
      <div className="flex flex-col sm:flex-row  overflow-hidden">
        {/* first portion */}
        <div className=" flex flex-col items-center ml-10  pb-3 px-16">
          <div className=" h-24 w-44 my-4 mt-8">
            <img src={"/Images/Logo1.svg"} alt="Logo" />
          </div>
          <div>
          <h1 className="text-welcome text-3xl font-bold  text-center">Welcome to INO</h1>
              <p className="mr-2">Register now to gain access to your account</p>
          </div>

          <div className="w-96 h-96">
            <img src={"/Images/Agreement-amico 1.png"} alt="" />
          </div>

          <div className="mb-2">
              <div className="flex space-x-4">
                <a href="//">License</a>
                <span>|</span>
                <a href="//">Privacy Policy</a>
                <span>|</span>
                <a href="//">Terms and Conditions</a>
              </div>
              <span className="opacity-50">Copyright © 2023 All Rights Reserved by </span><span className="text-ButtonColor font-bold">INO</span>

          </div>
        </div>
      

        {/* Second portion */}
      
        
        <div className="flex justify-center flex-col items-center w-screen bg-orangelight  ">
          <div className=' bg-white w-auto h-auto flex flex-col p-11 justify-around items-center rounded-lg'>
          <h2 className='font-bold '>Verify Your Phone Number</h2>
          <div className="mt-11 ">
                 <PhoneInput
                 className='w-auto p-4 border border-black-500 rounded-lg overflow-hidden'
            international
            countryCallingCodeEditable={false}
            initialValueFormat="national"
            defaultCountry="US"
            value={value}
            onChange={handleInputChange}/>
            </div>
            <button className='bg-ButtonColor rounded-xl text-white  py-1 my-6 px-24'>Verify</button>
          
          </div>
        </div>

          



        </div>
     
    </div>
  );
}
