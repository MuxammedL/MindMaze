import { useEffect } from "react"
import { Link } from "react-router-dom"

const History = () => {
    return (
        <>

            <main>
                <div className="history">
                    <Link to="/gamer-modes/profile" className="button back-button">
                        <span>Geri</span>
                    </Link>

                    <div className="page-title">
                        <div className="title-content">
                            <img src="../images/clock-icon.svg" alt="" className="list-img"/>
                            <span className="list-name">Keçmiş</span>
                        </div>
                    </div>


                    <div className="history-cards">
                        <div className="cards">
                            <div className="cards-wrapper">
                                <div className="history-card win">
                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Sən
                                            </h3>
                                            <span className="user-score">
                                                600
                                            </span>
                                        </div>
                                    </div>


                                    <div className="card-line">

                                    </div>

                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Apokalipsis
                                            </h3>
                                            <span className="user-score">
                                                450
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-card defeat">
                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Sən
                                            </h3>
                                            <span className="user-score">
                                                600
                                            </span>
                                        </div>
                                    </div>


                                    <div className="card-line">

                                    </div>

                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Apokalipsis
                                            </h3>
                                            <span className="user-score">
                                                450
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-card win">
                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Sən
                                            </h3>
                                            <span className="user-score">
                                                600
                                            </span>
                                        </div>
                                    </div>


                                    <div className="card-line">

                                    </div>

                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Apokalipsis
                                            </h3>
                                            <span className="user-score">
                                                450
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-card defeat">
                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Sən
                                            </h3>
                                            <span className="user-score">
                                                600
                                            </span>
                                        </div>
                                    </div>


                                    <div className="card-line">

                                    </div>

                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Apokalipsis
                                            </h3>
                                            <span className="user-score">
                                                450
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-card win">
                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Sən
                                            </h3>
                                            <span className="user-score">
                                                600
                                            </span>
                                        </div>
                                    </div>


                                    <div className="card-line">

                                    </div>

                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Apokalipsis
                                            </h3>
                                            <span className="user-score">
                                                450
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-card defeat">
                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Sən
                                            </h3>
                                            <span className="user-score">
                                                600
                                            </span>
                                        </div>
                                    </div>


                                    <div className="card-line">

                                    </div>

                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Apokalipsis
                                            </h3>
                                            <span className="user-score">
                                                450
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-card win">
                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Sən
                                            </h3>
                                            <span className="user-score">
                                                600
                                            </span>
                                        </div>
                                    </div>


                                    <div className="card-line">

                                    </div>

                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Apokalipsis
                                            </h3>
                                            <span className="user-score">
                                                450
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-card defeat">
                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Sən
                                            </h3>
                                            <span className="user-score">
                                                600
                                            </span>
                                        </div>
                                    </div>


                                    <div className="card-line">

                                    </div>

                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Apokalipsis
                                            </h3>
                                            <span className="user-score">
                                                450
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-card win">
                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Sən
                                            </h3>
                                            <span className="user-score">
                                                600
                                            </span>
                                        </div>
                                    </div>


                                    <div className="card-line">

                                    </div>

                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Apokalipsis
                                            </h3>
                                            <span className="user-score">
                                                450
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-card defeat">
                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Sən
                                            </h3>
                                            <span className="user-score">
                                                600
                                            </span>
                                        </div>
                                    </div>


                                    <div className="card-line">

                                    </div>

                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Apokalipsis
                                            </h3>
                                            <span className="user-score">
                                                450
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-card win">
                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Sən
                                            </h3>
                                            <span className="user-score">
                                                600
                                            </span>
                                        </div>
                                    </div>


                                    <div className="card-line">

                                    </div>

                                    <div className="user-card">
                                        <div className="user-img">
                                            <img src="../images/history-profile.svg" alt="" />
                                        </div>
                                        <div className="user-content">
                                            <h3 className="user-name">
                                                Apokalipsis
                                            </h3>
                                            <span className="user-score">
                                                450
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default History