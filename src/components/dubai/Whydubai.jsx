import React from 'react'

const Whydubai = () => {
  return (
    <div id="about" className="mt-32 overflow-hidden sm:mt-40">
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
        <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight  text-pink-600 sm:text-4xl">Why Dubai</h2>
          <p className="mt-6 font-sato">
          Dubai is rapidly becoming the global epicenter of digital transformation, with AI expected to contribute $320 billion to the MENA economy by 2030 and the gaming market set to reach $6 billion by 2025. <br/><br/>
Investors and venture capitalists, take note: Dubai&apos;s thriving startup ecosystem attracted over $2.4 billion in venture capital in 2022, making it the prime market for the next big thing in digital technology. <br/><br/>
At ABC Conclave 2024, you&apos;ll engage with industry leaders, explore cutting-edge innovations, and forge connections that could propel your ventures to new heights.

        </p>
        </div>
        <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
          <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
            <img
              src="/duba.jpg"
              alt=""
              className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
        
        </div>
      </div>
      </div></div>
  )
}

export default Whydubai