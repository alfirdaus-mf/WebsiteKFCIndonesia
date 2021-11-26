import React from 'react';
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className="footer">
          <div className="socialMedia">
            <InstagramIcon /><TwitterIcon /> <FacebookIcon /><YouTubeIcon />
          </div>
          <div className="subFooter">
            <p>&copy; 2021 PT. FASTFOOD Indonesia Tbk by Alfirdaus. | All rights reserved.</p>
          </div>
        </div>
    )
}

export default Footer;
