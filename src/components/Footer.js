import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Discover">
                    <span style={{fontSize: '30px'}}>Discover</span>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/about">About</Link>
                    <Link to="/news">News</Link>
                    <Link to="/reach-us">Reach Us</Link>
                </div>
                <div className="ContactSupport">
                    <span style={{fontSize: '30px'}}>Connect</span>
                    <span>+91 124 4965500</span>
                    <span>info@saifpartners.com</span>
                </div>
                <div className="ContactSupport">
                    <span style={{fontSize: '30px'}}>Subscribe to our Newsletter</span>
                    <span><input type="email"  style={{border: '0px', padding: '10px', fontWeight: "bold", backgroundColor: '#333333',borderBottom: '2px solid white', color: 'white'}} placeholder="Email"/></span>
                    <span style={{padding: '10px', border: '2px solid white', width: 'min-content', marginTop: '5px'}}>Subscribe</span>
                </div>
            </div>
        )
    }
}

export default Footer
