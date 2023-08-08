import React from 'react';
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className='Footer'>
        <ul className='footer-items'>
            <li className='footer__item'><a>Contact Us</a></li>
            <li className='footer__item'><a>Faq</a></li>
        </ul>
    </footer>
  )
}

export default Footer