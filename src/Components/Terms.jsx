import React from "react";
import Checkbox from "./Checkbox";
export default function Terms() {      
  return (
    <>
      <div className="flex  ">
        {/* first portion */}
        <div className="bg-orangelight flex flex-col items-center justify-evenly pb-3 ">
          <div className=" h-24 w-44 my-4 mt-8">
            <img src={"/Images/Logo1.svg"} alt="Logo" />
          </div>
          <div>
              <h1 className="text-welcome text-3xl font-bold">Welcome to INO</h1>
              <p className="mr-2">Register now to gain access to your account</p>
          </div>

          <div className="">
            <img src={"/Images/Agreement-amico 1.png"} alt="" />
          </div>

          <div>
              <div className="flex space-x-4">
                <a href="//">License</a>
                <span>|</span>
                <a href="//">Privacy Policy</a>
                <span>|</span>
                <a href="//">Terms and Conditions</a>
              </div>
                <p className="opacity-50">Copyright © 2023 All Rights Reserved by INO</p>
          </div>
        </div>

        {/* Second portion */}
        <div className="flex flex-1 flex-col  items-center">
          <h1 className="font-bold p-4 text-2xl">Terms and Conditions</h1>
          <div className="terms-area mx-8 mb-2 ">
            <p>
              Welcome to the terms and services page of our website. By using
              our website, you agree to abide by our terms and conditions which
              are as follows:
            </p>

            <h1 className="font-bold mb-2 mt-4">1. Acceptance of Terms</h1>
            <p>
              {" "}
              By accessing or using our website, you explicitly acknowledge and
              agree to these terms and conditions. If you disagree with any of
              the terms mentioned here, you should refrain from using our
              website.
            </p>

            <h1 className="font-bold mb-2 mt-4">2. Limitation of Liabilty</h1>
            <p>
             
              We do not accept any liability for the content, accuracy, or
              quality of the information provided on our website. We reserve the
              right to remove, modify, or make changes to the content of our
              website at any time, and without notice.
            </p>

            <h1 className="font-bold mb-2 mt-4">
              3. Intellectual Property Rights
            </h1>
            <p>
              The content of our website is protected by copyright laws and
              other proprietary rights. You may not copy, reproduce, or
              distribute any of our content without our explicit permission.
            </p>

            <h1 className="font-bold mb-2 mt-4"> 4. Third-Party Websites:</h1>
            <p>
              Our website may contain links to third-party websites that are not
              owned or operated by us. We do not have control over these
              websites, and therefore, we are not responsible for the content or
              accuracy of these websites.
            </p>

            <h1 className="font-bold mb-2 mt-4"> 5. Indemnification</h1>
            <p>
              You agree to indemnify us and hold us harmless from any claims,
              costs, or damages incurred due to your use of our website.
            </p>

            <h1 className="font-bold mb-2 mt-4"> 6. Governing Law</h1>
            <p>
             
              These terms and conditions shall be governed by and construed in
              accordance with the laws of the country of our company's
              registration.
            </p>

            <p className="mb-2 mt-4">
              We reserve the right to modify or update these terms and
              conditions without prior notice. By continuing to use our website
              after any updates, you acknowledge and agree to these changes.
            </p>
          </div>
        {/* footer */}
       
<Checkbox/>
        </div>
      </div>
    </>
  );
}
