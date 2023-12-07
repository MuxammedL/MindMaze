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
                            <img src='../images/championship.svg' alt="" className='image1'/>
                            <span>Çempionat</span>
                        </div>
                    </div>


                    <div className="message-content">
                        <div className="content-wrapper">
                            <p>Bu turnir hər hansı bir təşkilat, müəssisə və ya qurumun dəstəyi və sifarişi ilə təşkil ediləcək. Turnirlər əsasən əyani formada olacaq. Turnirlərdən xəbərdar olmaq, turnirə qeydiyyat və ya turniri canlı izləmək üçün “Çempionat” bölümünü izləməyi unutmayın!ndim</p>
                        </div>
                    </div>

                    
                </div>
            </main>
        </>
    )
}

export default Championship