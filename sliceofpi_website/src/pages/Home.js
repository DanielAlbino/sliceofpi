import React from 'react'
import logo from '../assets/logo.png'

function Home(){
        return(
            <section id="home" className="col-xs-12 row">
                <div className="col-xs-3 col-sm-3">
                    <img id="logo" src={logo} alt="logo"/>
                </div>
                <div className="col-xs-8 col-sm-8">
                    <h1 className="title">Slice of PI</h1>
                    <h5 className="subtitle">The future is here</h5>
                </div>
            </section>
        );
    }

export default Home;