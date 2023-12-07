import React, { useState } from "react";
import { Link } from "react-router-dom";

const Result = () => {

    const [result,setResult] = useState(true);




    return (
        <>
            <main>
                <section className="result">
                    <div className="result-wrapper">
                        <div className="name">
                            <h2>
                            Mind<span>Maze</span>
                            </h2>
                        </div>

                        <div className={`message-text ${result ? 'success' : 'warning'}`}>
                            <h3>{result ? 'QAZANDINIZ!' : "MƏĞLUB OLDUNUZ!"}</h3>
                        </div>


                    <div className="buttons">
                
                        <div className="button">
                            <button className={`scor-button ${result ? 'success-btn' : 'warning-btn'}`}>
                                <span>{result ? '0080' : '-0010' }</span>
                            </button>
                        </div>


                        <div className="button">
                            <Link className="back-button" to="/gamer-modes">
                                <span>Geri</span>
                            </Link>
                        </div>

                    </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Result