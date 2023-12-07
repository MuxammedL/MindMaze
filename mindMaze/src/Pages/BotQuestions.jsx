import React from 'react';
import { Link } from 'react-router-dom';
import {useContext} from "react";
import {PostContext} from '../context/PostContext'

const BotQuestions = () => {

    const {seconds} = useContext(PostContext)

    return (
        <>
             <main className='questions'>
                <div className="question-wrapper">
                    <div className="name">
                        <h2>
                            Mind<span>Maze</span>
                        </h2>
                    </div>

                    <div className="question-content">
                        <div className="timer">
                            <span>{`00:${seconds < 10 ? '0' : ''}${seconds}`}</span>
                        </div>
                        <div className="content">
                            <div className="question">
                                <p>1. Lorem ipsum dolor sit amet consectetur. Est venenatis faucibus egestas aliquet at morbi nascetur turpis convallis. Nec est aenean malesua?</p>
                            </div>
                            <div className="variants">
                                <div className="variant correct">
                                    <div className="variant-wrapper">
                                        <span>A</span>
                                        <p>Aorem ipsum dolor sit</p>
                                    </div>
                                </div>

                                <div className="variant wrong">
                                    <div className="variant-wrapper">
                                        <span>B</span>
                                        <p>Borem ipsum dolor sit</p>
                                    </div>
                                </div>

                                <div className="variant">
                                    <div className="variant-wrapper">
                                        <span>C</span>
                                        <p>Corem ipsum dolor sit</p>
                                    </div>
                                </div>

                                <div className="variant">
                                    <div className="variant-wrapper">
                                        <span>D</span>
                                        <p>Dorem ipsum dolor sit</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>


                    <div className="score-buttons">

                        <div className='score-button'>
                            <span>0000</span>
                        </div>

                        <Link className='pass-button' to="/gamer-modes">
                            <span>Pass</span>
                        </Link>
                    </div>
                </div>

            </main>
        </>
    )
}

export default BotQuestions;