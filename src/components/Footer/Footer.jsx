import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
          <h1 className="py-10 text-3xl font-bold text-yellow text-center">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl" />
              </div>
              <p>
                Laguna, N° 3, Jardim Pedro Balela,
                <br /> Cidade Nova - RO
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <div>
                <p>info@food.com</p>
                <p>info@food2.com</p>
              </div>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-5xl" />
              </div>
              <div>
                <p>(62) 3333-3333</p>
                <p>(62) 4444-4444</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center p-4 items-center">
            <p className="text-center mt-4">
              Copyright &copy; 2024{" "}
              <span className="text-brightRed">
                <a href="https://www.linkedin.com/in/gustavo-desenvolvedor/">
                  Gustavo Silva
                </a>
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
