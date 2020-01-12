import React from 'react';

/* Images */
import FirebaseLogo from '../assets/firebase.png'
import ReactLogo from '../assets/react.png'
import MongoLogo from '../assets/mongodb.jpg'
import ThreeLogo from '../assets/threejs.png'
import Rocket from '../assets/rocket.png'

function Work(){
    return (
        <section id="work"  className="col-xs-12 row">
            {/* Firts Work - card */}
            <div className="card row">
                <div className="card-image col-xs-12 col-sm-6">
                </div>
                <div className="card-body col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h5 className="card-title">X-Cape the Maze</h5>
                    <p className="card-text">Run for your life! escape the maze. And don't die!</p>
                    <div class="card-skills col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <img className="imageLogo" src={ReactLogo} alt="react" />
                        <img className="imageLogo2" src={FirebaseLogo} alt="mongo" />

                    </div>                
                </div>
                <div className="card-link col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p>More...</p>
                </div>
            </div>
            {/* Second Work - card */}
            <div className="card row">
                <div className="card-image col-xs-12 col-sm-6">
                </div>
                <div className="card-body col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h5 className="card-title">X-Cape the Maze</h5>
                    <p className="card-text">Run for your life! escape the maze. And don't die!</p>
                    <div class="card-skills col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <img className="imageLogo" src={ReactLogo} alt="react" />
                        <img className="imageLogo3" src={MongoLogo} alt="mongo" />
                        <img className="imageLogo4" src={ThreeLogo} alt="three" />
                    </div>                
                </div>
                <div className="card-link col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p>More...</p>
                </div>
            </div>
            <div className="MoreWork">
                <img className="rocket" src={Rocket} alt="rocket" />
                <h1>MORE PROJECTS COMMING SOON</h1>
            </div>
        </section>
    );
}

export default Work;