// components/TwitterEmbed.js
"use client"
import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Heading from "./ui/Heading";

const TwitterEmbed = () => {
  return (
    <div className='flex justify-center items-center flex-col w-full'>

      <div className='mx-auto mt-6 w-[600px]'>
      <TwitterTweetEmbed tweetId={'1798095205716947040'}  />
      </div>
    </div>
  );
};

export default TwitterEmbed;
