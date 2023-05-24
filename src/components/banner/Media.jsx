import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn ,FaInstagram } from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a className="bannerIcon" href='https://www.facebook.com/subhadip.paik.94'>
              <FaFacebookF />
            </a>
            <a className="bannerIcon"  href='https://www.instagram.com/_subha_026/'>
              <FaTwitter />
            </a >
            <a className="bannerIcon" href='https://www.instagram.com/_subha_026/'>
              <FaLinkedinIn />
            </a>
            <a className="bannerIcon" href='https://www.instagram.com/_subha_026/'>
              <FaInstagram/>
            </a>
          </div>
        </div>
        
      </div>
  )
}

export default Media