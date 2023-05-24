import React, { useState } from 'react';

const UNI = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const buttonColor = isChecked ? 'green' : 'red'; 
  

  return (
    <div className="flex flex-col justify-center mt-3 mb-5">
      <label htmlFor="checkbox" className="mr-2 mb-2">
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
         
        />
        <span className="ml-2 ">I have read the T&C</span>
      </label>
      <button className={`py-2 px-20  rounded text-white `} style={{background:buttonColor,color:'white'}}>
        Proceed
      </button>
    </div>
  );
};

export default UNI;
