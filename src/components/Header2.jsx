
import React from 'react';
import '../styles/Header2.css'; 
import messageIcon from '../assets/message.png';
import callIcon from '../assets/call.png';

const Header2 = () => {
  return (
    <header className="header2">

      <div className="logo-container">
        <img src={messageIcon}alt="Message Icon" className="messsage" />
        <span className="brand-name">AskExperts</span>
      </div>


      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#pages">Pages</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#pages">Pages</a>
        <a href="#contact">Contact</a>
      </nav>


      <div className="contact-info">
        <img src="{callIcon}" className='call' />
        <button className='button-tel'>+ (888) 452 1505</button>
      </div>
    </header>
  );
};

export default Header2;
