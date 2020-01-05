import React, {Component} from 'react'

class Navbar extends Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars fa-2x"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-item nav-link" href="#home">Home</a>
                        <a class="nav-item nav-link" href="#work">Work</a>
                        <a class="nav-item nav-link" href="#about">About</a>
                        <a class="nav-item nav-link" href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;