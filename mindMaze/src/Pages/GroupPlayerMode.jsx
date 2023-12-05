import React from 'react';
import { Link } from 'react-router-dom';

const GroupPlayerModes = () => {
    return (
        <>
            <main className="group-player-mode">
                <div className="images">
                    <div className="ellipse1" style={{ backgroundImage: "url('./images/ellipse-3.svg')" }}></div>
                    <div className="ellipse2" style={{ backgroundImage: "url('./images/ellipse-4.svg')" }}></div>
                    <div className="ellipse3" style={{ backgroundImage: "url('./images/ellipse-6.png')" }}></div>
                </div>

                <div className='content'>
                    <div className="name">
                        <h2>
                            Mind<span>Maze</span>
                        </h2>
                    </div>

                    <div className="game-modes">
                        <Link to="/championship" className="game-mode">
                            <div className="wrapper">
                                <img src='./images/championship.svg' alt="" className='image1'/>
                                <span>Çempionat</span>
                            </div>
                        </Link>
                        <Link to="/" className="game-mode">
                            <div className="wrapper">
                                <img src='./images/group-mode.svg' alt="" className='image2'/>
                                <span>Meydan oxu</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}


export default GroupPlayerModes