import React, { Component } from 'react'
import "../styles.css"

export class Header extends Component {
  render() {
    return (
        <header>
            <img src="./logo 1.png" alt="" className="header_logo" />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Key Features</a></li>
                    <li><a href="#">Join Our Community</a></li>
                </ul>
            </nav>
        </header>
    )
  }
}

export default Header;