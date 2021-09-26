import React from "react";
import { GrInstagram, GrTwitter, GrYoutube } from "react-icons/gr";
import { FiLinkedin } from "react-icons/fi";

export default function Homepage() {
  return (
    <div>
      {/* Header */}

      <header id='header' className='header-tops'>
        <div className='container'>
          <h1>Agnibha Sarkar</h1>
          <h2>
            Web-Developer |<span> Tech Enthusiast </span>
          </h2>
        </div>
      </header>

      {/* Social Media */}
      <div className='social-media'>
        <a href='#' className='instagram'>
          <GrInstagram />
        </a>
        <a href='#' className='twitter'>
          <GrTwitter />
        </a>
        <a href='#' className='linkedin'>
          <FiLinkedin />
        </a>
        <a href='#' className='yt'>
          <GrYoutube />
        </a>
      </div>
    </div>
  );
}
