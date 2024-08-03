"use client"
import React, { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    // Load the Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='h-screen bg-white'>
      <iframe 
        data-tally-src="https://tally.so/r/mO0GxY?transparentBackground=1" 
        width="100%" 
        height="100%"  
        title="ENQUIRE NOW"
        frameBorder="0"
      />
    </div>
  );
};

export default Page;