import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';
const Logo = () => {
	return (
		<div className='ma3 nt0'>
		 <Tilt className="Tilt br1 shadow-2" options={{ max : 55 }} style={{ height: 140, width: 140 }}>
		  <div className="Tilt-inner pa3">
		   <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
		</div>
	   </Tilt>
	  </div>
	);
}

export default Logo;