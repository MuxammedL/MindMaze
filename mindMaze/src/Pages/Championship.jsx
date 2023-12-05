import React from 'react';
import { Link } from 'react-router-dom';

const Championship = () => {


    return (
        <>

            <main className="championship">
                <div className="championship-wrapper">
                    <div className="name">
                        <h2>
                            Mind<span>Maze</span>
                        </h2>
                    </div>

                    <div className="game-mode">
                        <div className="wrapper">
                            <img src='./images/championship.svg' alt="" className='image1'/>
                            <span>Çempionat</span>
                        </div>
                    </div>


                    <div className="message-content">
                        <div className="content-wrapper">
                            <p>Bu turnir hər hansı bir təşkilat, müəssisə və ya qurumun dəstəyi və sifarişi ilə təşkil ediləcək. Turnir əsasən əyani formada olacaq. Lakin oyunu, gedişatını və nəticələrini burdan izləmək mümkün olacaq.</p>
                        </div>
                    </div>

                    <div className="back-btn">
                        <Link className='back-button' to="/group-player-mode">
                            <span>Geri</span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Championship