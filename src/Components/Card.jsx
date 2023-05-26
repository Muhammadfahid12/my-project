import React, { useState,useRef } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { IoIosArrowDown } from 'react-icons/io';
// import imputRef
const MyForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [about, setAbout] = useState('');
  const [option, setOption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null)

 
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional logic here with the submitted data
    console.log('Submitted:', { firstName, lastName, about, option });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="w-auto mx-auto flex justify-center items-center ">
      <form onSubmit={handleSubmit} className="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4 flex flex-col sm:flex-row">
      <div className="flex flex-col items-center mb-4 ">
  <div className="relative w-40 h-40 rounded-full bg-ImageBg border border-black overflow-hidden">
    {selectedImage ? (
      <img
        src={selectedImage}
        alt="Selected"
        className="absolute inset-0 w-full h-full object-contain rounded-lg cursor-pointer"
        onClick={() => inputRef.current.click()} // Trigger file input click when the image is clicked
      />
    ) : (
      <label
        htmlFor="imageInput" // Associate the label with the file input
        className="absolute inset-0 flex items-center justify-center text-gray-500 cursor-pointer"
      >
        <img src={"/Images/Customer.png"} className="w-24" alt="Logo" />
        {/* <img src={"/Images/EditImage.png"} className="w-12 absolute top-5" alt="Logo" /> */}

      </label>
    )}
   
    <input
      type="file"
      id="imageInput"
      accept="image/*"
      onChange={handleImageChange}
      className="hidden" // Hide the file input
      ref={inputRef} // Reference to the file input element
    />
      
  </div>
  <span className="mt-2">Add Profile Photo</span>
</div>

      
     


        <div className='ml-8'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="about">
              About Yourself
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="about"
              placeholder="Write a brief description about yourself"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="option">
              Identification
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="option"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="option1">Male</option>
              <option value="option1">female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="option">
              Select Country
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="option"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="USA">Male</option>
              <option value="Pakistan">female</option>
            </select>
          </div>
          <div className='flex justify-center'><button className='  bg-ButtonColor rounded-xl  text-white  py-1 my-6 px-24'>Register
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyForm;





/*
import React, { useState } from 'react';

const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col"> 
      <div className="relative w-40 h-40 rounded-full border border-black overflow-hidden">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="absolute inset-0 w-full h-full object-contain rounded-lg"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            No image selected
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
    </div>
  );
};

export default ImageSelector;
 */