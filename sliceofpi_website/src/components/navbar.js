import React, {Component} from 'react'

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars fa-2x"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link" href="#home">Home</a>
                        <a className="nav-item nav-link" href="#work">Work</a>
                        <a className="nav-item nav-link" href="#about">About</a>
                        <a className="nav-item nav-link" href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;