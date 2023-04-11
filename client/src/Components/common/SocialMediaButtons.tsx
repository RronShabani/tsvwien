import React from 'react';
import './SocialMediaButtons.css';
import facebookLogo from '../assets/facebook.svg';
import twitterLogo from '../assets/twitter.svg';
import instagramLogo from '../assets/instagram.svg';

const SocialMediaButtons = () => {
  return (
    <div className="social-media-buttons">
      <a href="https://www.facebook.com/profile.php?id=100091061474822">
        <img src={facebookLogo} alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/tsv_wien?igshid=YmMyMTA2M2Y=">
        <img src={instagramLogo} alt="Instagram" />
      </a>
    </div>
  );
};

export default SocialMediaButtons;

