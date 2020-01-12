import React from 'react'

/* Images */
import mobile from '../assets/mobile_icon.png'
import web from '../assets/web_icon.png'
import design from '../assets/compass_icon.png'
import responsive from '../assets/responsive_icon.png'
import git from '../assets/git_icon.png'
import database from '../assets/database_icon.png'


function WhatWeDo() {
    return(
        <section id="whatwedo" className="col-xs-12 row">
            {/* First Card */}
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 column cards">
                <div id="card-image" class="col-12">
                    <img src={mobile} alt="mobile"/>
                </div>
                <div id="card-text" class="row">
                    <div id="title" class="col-12">
                        <h1>MOBILE APPs</h1>
                    </div>
                    <div id="text" class="col-11">
                        <p>Developed in REACT-NATIVE</p>
                    </div>
                </div>
            </div>
            {/* Second Card */}
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 column cards">
                <div id="card-image" class="col-12">
                    <img src={web} alt="mobile"/>
                </div>
                <div id="card-text" class="row">
                    <div id="title" class="col-12">
                        <h1>WEB APPs</h1>
                    </div>
                    <div id="text-web" class="col-9">
                        <p>Developed in REACT</p>
                    </div>
                </div>
            </div>
            {/* Third Card */}
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 column cards">
                <div id="card-image" class="col-12">
                    <img src={design} alt="mobile"/>
                </div>
                <div id="card-text" class="row">
                    <div id="title" class="col-12">
                        <h1>DESIGN</h1>
                    </div>
                    <div id="text" class="col-11">
                        <p>Mockups for mobile and web Logos   Banners   Covers</p>
                    </div>
                </div>
            </div>
            {/* Fourth Card */}
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 column cards">
                <div id="card-image" class="col-12">
                    <img src={responsive} alt="mobile"/>
                </div>
                <div id="card-text" class="row">
                    <div id="title" class="col-12">
                        <h1>RESPONSIVE LAYOUT</h1>
                    </div>
                    <div id="text" class="col-11">
                        <p>Works in any device</p>
                    </div>
                </div>
            </div>
            {/* Fifth Card */}
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 column cards">
                <div id="card-image" class="col-12">
                    <img src={git} alt="mobile"/>
                </div>
                <div id="card-text" class="row">
                    <div id="title" class="col-12">
                        <h1>VERSION CONTROL</h1>
                    </div>
                    <div id="text" class="col-11">
                        <p>Controling Development xwith Git </p>
                    </div>
                </div>
            </div>
            {/* Sixth Card */}
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 column cards">
                <div id="card-image" class="col-12">
                    <img src={database} alt="mobile"/>
                </div>
                <div id="card-text" class="row">
                    <div id="title" class="col-12">
                        <h1>DATABASE</h1>
                    </div>
                    <div id="text" class="col-11">
                        <p>MongoDB and Firebase</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;