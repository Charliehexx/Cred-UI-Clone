import React from "react";
import p1 from '../../../images/pic.png'

const Footer = () => {
  return (
    <div className="footer flex absolute-center max-width">
      Cloned by Aditya Patel 💖 aka CHARLIEHEXX
      <img style={{height:'100px',width:'100px', backgroundColor:'#000'}} src={p1}/>
    </div>
  );
};

export default Footer;