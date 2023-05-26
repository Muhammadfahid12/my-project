import React, { useState, useRef } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { IoIosArrowDown } from "react-icons/io";
// import imputRef
const MyForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [about, setAbout] = useState("");
  const [option, setOption] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional logic here with the submitted data
    console.log("Submitted:", { firstName, lastName, about, option });
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
    <div className="w-auto  h-auto flex justify-center items-center sm:mt-3">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md  rounded-lg px-16 pt-6 pb-8 mb-4 flex flex-col sm:flex-row"
      >
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

        <div className="ml-8">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name <span>*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-5  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name <span>*</span>
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
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="identification"
            >
              Identification <span>*</span>
            </label>
            <div className="relative">
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="identification"
                value={option}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <IoIosArrowDown className="absolute top-0 right-0 h-full w-4 mr-4 opacity-50  text-gray-500 pointer-events-none" />
            </div>
          </div>

          <button className="  bg-white rounded-xl drop-shadow-3xl text-black hover:bg-ImageBg  py-2 my-6 px-20">
            Use Current Location
          </button>

          <div className="mb-auto">
            <label
              className="block text-gray-700  text-sm font-bold mb-2"
              htmlFor="countries"
            >
              Enter Location <span>*</span>
            </label>
            <div className="relative">
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="countries"
                value={option}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="USA">USA</option>
                <option value="PAK">PAK</option>
              </select>
              <IoIosArrowDown className="absolute top-0 right-0 h-full opacity-50 w-4 mr-4 text-gray-500 pointer-events-none" />
            </div>
            <div className="my-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="about"
              >
                About Yourself <span>*</span>
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="about"
                placeholder="Write a brief description about yourself"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="  bg-ButtonColor rounded-xl opacity-90 hover:opacity-100 text-white  py-1 my-6 px-24">
              Register
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
