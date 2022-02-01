import { Component } from 'react'
import { CONTENT_TEXT } from './const.js'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <header className="header">
        <div className="container container_footer">
          <div className="info-company">
            <h3>Our company:</h3>
            <p>{CONTENT_TEXT}</p>
          </div>
          <div className="contacts">
            <div className="info-wrap">
              <h3>Contact us</h3>
              <div className="dbox">
                <div className="icon">
                  <span className="fa fa-map-marker"></span>
                </div>
                <div className="text">
                  <p>
                    <span>Address:</span> 198 West 21th Street, Suite 721 New
                    York
                  </p>
                </div>
              </div>
              <div className="dbox">
                <div className="icon">
                  <span className="fa fa-phone"></span>
                </div>
                <div className="text">
                  <p>
                    <span>Phone:</span>{' '}
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </p>
                </div>
              </div>
              <div className="dbox">
                <div className="icon">
                  <span className="fa fa-paper-plane"></span>
                </div>
                <div className="text">
                  <p>
                    <span>Email:</span>{' '}
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                </div>
              </div>
              <div className="dbox">
                <div className="icon">
                  <span className="fa fa-globe"></span>
                </div>
                <div className="text">
                  <p>
                    <span>Website</span> <a href="#">yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export { Footer }
