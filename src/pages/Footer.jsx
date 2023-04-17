import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <h1>Contact Us</h1>
        <p>Got some questions or ideas for us? Reach out to us at <span>hello@clikapp.com</span></p>
        <div className="social_icons">
            <span>Follow us</span>
            <div className="icon_div">
            <a href=""><img src="./icon-twitter.svg" alt="" /></a>
            <a href=""><img src="./icon-facebook.svg" alt="" /></a>
            <a href=""><img src="./icon-instagram.svg" alt="" /></a>
            <a href=""><img src="./icon-pinterest.svg" alt="" /></a>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer;