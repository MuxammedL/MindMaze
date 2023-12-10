import { useEffect } from "react"
import { Link } from "react-router-dom"

const Rosettes = () => {
    return (
        <>
            <main>
                <div className="rosettes">

                    <div className="rosettes-wrapper">
                        <Link to="/gamer-modes/profile" className="button back-button">
                            <span>Geri</span>
                        </Link>

                        <div className="page-title">
                            <div className="title-content">
                                <img src="../images/rosette-icon.svg" alt="" className="list-img"/>
                                <span className="list-name">Rozetlərim</span>
                            </div>
                        </div>

                    </div>



                    <div className="rosettes-container">
                        <div className="rosette-wrapper">
                            <div className="rosette-cards">
                                <div className="rosette-card">
                                    <div className="rosette-img">
                                        <img src="../images/achievement.svg" alt="" />
                                    </div>
                                    <div className="rosette-content">
                                        <span>Oyun həvəskarı</span>
                                    </div>
                                </div>

                                <div className="rosette-card">
                                    <div className="rosette-img">
                                        <img src="../images/badge.svg" alt="" />
                                    </div>
                                    <div className="rosette-content">
                                        <span>Gümüş oğrusu</span>
                                    </div>
                                </div>

                                <div className="rosette-card">
                                    <div className="rosette-img">
                                        <img src="../images/achievement.svg" alt="" />
                                    </div>
                                    <div className="rosette-content">
                                        <span>Xal qənimi</span>
                                    </div>
                                </div>

                                <div className="rosette-card">
                                    <div className="rosette-img">
                                        <img src="../images/achievement-2.svg" alt="" />
                                    </div>
                                    <div className="rosette-content">
                                        <span>Oyun həvəskarı</span>
                                    </div>
                                </div>

                                <div className="rosette-card">
                                    <div className="rosette-img">
                                        <img src="../images/cup-2.svg" alt="" />
                                    </div>
                                    <div className="rosette-content">
                                        <span>Gümüş oğrusu</span>
                                    </div>
                                </div>

                                <div className="rosette-card">
                                    <div className="rosette-img">
                                        <img src="../images/activity.svg" alt="" />
                                    </div>
                                    <div className="rosette-content">
                                        <span>Xal qənimi</span>
                                    </div>
                                </div>

                                <div className="rosette-card">
                                    <div className="rosette-img">
                                        <img src="../images/finish.svg" alt="" />
                                    </div>
                                    <div className="rosette-content">
                                        <span>Oyun həvəskarı</span>
                                    </div>
                                </div>

                                <div className="rosette-card closed-badge">
                                    <div className="rosette-img">
                                        <img src="../images/smartwatch.svg" alt="" />
                                    </div>
                                    <div className="rosette-content">
                                        <span>Gümüş oğrusu</span>
                                    </div>
                                </div>

                                <div className="rosette-card closed-badge">
                                    <div className="rosette-img">
                                        <img src="../images/badge-2.svg" alt="" />
                                    </div>
                                    <div className="rosette-content">
                                        <span>Xal qənimi</span>
                                    </div>
                                </div>


                                <div className="rosette-card closed-badge">
                                    <div className="rosette-img">
                                        <img src="../images/bottle.svg" alt="" />
                                    </div>
                                    <div className="rosette-content">
                                        <span>Oyun həvəskarı</span>
                                    </div>
                                </div>

                                <div className="rosette-card closed-badge">
                                    <div className="rosette-img">
                                        <img src="../images/achievement.svg" alt="" />
                                    </div>
                                    <div className="rosette-content">
                                        <span>Gümüş oğrusu</span>
                                    </div>
                                </div>

                                <div className="rosette-card closed-badge">
                                    <div className="rosette-img">
                                        <img src="../images/award.svg" alt="" />
                                    </div>
                                    <div className="rosette-content">
                                        <span>Xal qənimi</span>
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

export default Rosettes