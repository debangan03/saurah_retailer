import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import solarPanel from '../../assets/loginnew.png'; // Ensure you have some images in the src/images directory
import financeIcon from '../../assets/finance.jpg'; //
import Image from 'next/image';

const WelcomePage = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Welcome to Solar Finance', 'Your Sustainable Investment Partner'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <div className="mb-4">
          <Image src={solarPanel} alt="Solar Panel" className="w-24 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-blue-500">
          <span ref={typedElement}></span>
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Invest in a brighter, greener future with our solar finance solutions.
        </p>
        <div className="flex justify-center space-x-4">
          <Image src={financeIcon} alt="Finance Icon" className="w-12" />
          <Image src={solarPanel} alt="Solar Panel" className="w-12" />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
