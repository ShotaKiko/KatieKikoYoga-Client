import React from 'react'
import '../styles/Footer.scss'

function Footer() {
    return (
        <div className="footerContainer">
            <img
            className="logoImage"
            src="../../KKYLogo.png"
            alt="Logo for KatieKikoYoga"
          />
          <div>

          <div className="footerText">
            <p>Copyright &#169; 2020 KatieKikoYoga </p> <span> • </span>
            <p> Photography courtesy of Dee Evans</p>
          </div>
          </div>
        </div>
    )
}

export default Footer
