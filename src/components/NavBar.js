import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return(
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <ul className="left">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/schedule">Schedule</Link></li>
                    </ul>
                </div>

            </nav>
        )
    }
}

export default NavBar