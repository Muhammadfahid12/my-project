import React, { useState } from 'react';

const UNI = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const buttonColor = isChecked ? 'green' : 'red'; 
  

  return (
    <div className="flex flex-col justify-center mt-5 ">
      <label htmlFor="checkbox" className="mr-2 mb-4 border border-red-500 rounded-2xl p-2">
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='ml-7 '
         
        />
        <span className="ml-2  ">I have read the T&C</span>
      </label>
      <button className={`py-2 mb-6 px-24  rounded-2xl text-white `} style={{background:buttonColor,color:'white'}}>
        Proceed
      </button>
    </div>
  );
};

export default UNI;
