import React from 'react';
import { Link } from 'react-router-dom';

const BotMode = () => {
    return (
        <>
            <main className='bot-mode'>
                <div className="mode-wrapper">
                    <div className="name">
                        <h2>
                            Mind<span>Maze</span>
                        </h2>
                    </div>

                    <div className="content">
                        <div className="content-wrapper">
                            <Link to="/questions">
                                <span>10</span>
                            </Link>
                            <Link to="/questions">
                                <span>15</span>
                            </Link>
                            <Link to="/questions">
                                <span>20</span>
                            </Link>
                        </div>
                    </div>

                    <Link className='back-button' to="/single-player-mode">
                        <span>Geri</span>
                    </Link>
                </div>

            </main>
        </>
    )
}

export default BotMode