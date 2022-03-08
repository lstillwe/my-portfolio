import React from "react"

import github from '../../assets/images/Github-logo.png'
import linkedIn from '../../assets/images/Linkedin-logo.jpg'
import instagram from '../../assets/images/Instagram-logo.png'
 
function Footer(props) {
  return (
    <footer className="sticky-footer">
      <img src={github} alt="" onClick={() => window.open('https://github.com/lstillwe')}/>
      <img src={linkedIn} alt="" onClick={() => window.open('https://www.linkedin.com/in/lstillwell')}/>
      <img src={instagram} alt="" onClick={() => window.open('https://www.instagram.com/lisastillwell/')}/>
    </footer>
  )
}
 
export default Footer;