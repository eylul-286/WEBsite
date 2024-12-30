import React from 'react';
import '../styles/Main1.css'; 
import anaekranIcon from '../assets/anaekran.png'; // İmi (icon) görselini buraya ekleyin
import notIcon from '../assets/not.png'; 
import a1Icon from '../assets/a1.png';
import a2Icon from '../assets/a2.png';
import a3Icon from '../assets/a3.png';
import a4Icon from '../assets/a4.png';
import a5Icon from '../assets/a5.png';
import a6Icon from '../assets/a6.png';
import businessIcon from '../assets/business.png';
import happyIcon from '../assets/happy.png';
import teamIcon from '../assets/team.png';
import marketIcon from '../assets/market.png';
import photo2Icon from '../assets/photo2.png';

const Main1 = () => {
  return (
    <div className="card-container">
      {/* Üstteki İcon */}
      <img src={anaekranIcon} alt="Anaekran Icon" className="icon-A" />

      {/* Kart İçeriği */}
      <div className="card">
        <h2 className="card-title">Your small business <br />
growth advisors</h2>
        <p className="card-paragraph">
        Get help from Alex Moore, a professional business coach with <br /> advanced experience on growth and business scaling.
        </p>

        {/* Butonlar */}
        <div className="card-buttons">
          <button className="button-service">Our Service</button>
          <button className="button-not">
            <img src={notIcon} alt="Not Icon" className="not-icon" />
            Book a Meeting
          </button>
        </div>

      </div>
      <div className='marka'>
          <img src={a1Icon}  alt="a1 Icon" className='a1'/>
          <img src={a2Icon}  alt="a2 Icon" className='a2'/>
          <img src={a3Icon}  alt="a3 Icon" className='a3'/>
          <img src={a4Icon}  alt="a4 Icon" className='a4'/>
          <img src={a5Icon}  alt="a5 Icon" className='a5'/>
          <img src={a6Icon}  alt="a6 Icon" className='a6'/>
        </div>
        
        <div className="about-us-container">
      <div className="about-us">
        <div className="about-text">
          <span className="about-label">ABOUT US</span>
          <h3>About our Consulting <br />Agency Team</h3>
          <p className='parag1'>We create experiences and build products that <br />
             make businesses grow.</p>
          <p className='parag2'>Get help from Alex Moore, a professional business coach <br />with advanced experience on growth and business scaling.</p>
          
          <hr className='horizontal-line'></hr>
          <div className="service-info">
            <div className="service-item">
              <img src={businessIcon} alt="Business Icon" className='business-icon'/>
              <span className='dort'>400+ </span>
                <span className='bus'>Business Services</span>
            </div>
            <hr class="vertical-line"></hr>

            <div className="service-item">
            <img src={happyIcon} alt="Happy Icon" className='happy-icon' />
              <span className='yuz'>100+ </span>
              <span className='hap'>Happy Customer</span>
            </div>
          </div>
          <div className="about-image">
        <div className='photo2'>
          <img src={photo2Icon} alt="Photo Icon" className='photo-icon'/>
        </div>
         <img src={teamIcon} alt="Team Icon"  className='team-icon'/>
          <div className="market-experience">
          <img src={marketIcon} alt="Market Icon" className='market-icon' />
          <p className='elli'>50+</p>
            <span className='market-title'>Market <br />
              Experiences</span>
          </div>
        </div>
        </div>

    
      </div>
    </div>
    </div>
    
  );
};

export default Main1;
