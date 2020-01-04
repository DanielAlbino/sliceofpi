import React, {Component} from 'react'
import logo from '../assets/logo.png'
class Home extends Component {
    render(){
        return(
            <section id="home" class="col-xs-12 row">
                <div class="col-xs-3">
                    <img id="logo" src={logo} alt="logo"/>
                </div>
                <div class="col-xs-7 ">
                    <h1 class="title">Slice of PI</h1>
                    <h5 class="subtitle">The future is here</h5>
                </div>
            </section>
        );
    }
    }

export default Home;