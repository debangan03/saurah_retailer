import React from 'react';
import './loading.css'

const Loaderpage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="loader">
      {[...Array(8)].map((_, i) => (
        <div key={i} className={`dot dot-${i + 1}`}></div>
      ))}
    </div>
  </div>
  );
};

export default Loaderpage;
