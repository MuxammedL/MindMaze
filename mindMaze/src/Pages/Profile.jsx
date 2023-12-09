import { useEffect } from "react"
import { Link } from "react-router-dom"


const Profile = () => {
    return (
        <>
        <main>
            <div className="profile">
                <div className="profile-info">
                    <div className="notification">
                        <img src="../images/notification.svg" alt="" />
                        <div className="notification-count">
                            <span>12</span>
                        </div>
                    </div>
                    <div className="info-wrapper">
                        <div className="profile-details">
                            <div className="profile-img">
                                <img src="../images/profile.svg" alt="" />
                            </div>

                            <div className="profile-content">
                                <div className="profile-name">
                                    <h3>Apokalipsis</h3>

                                    <div className="edit">
                                        <img src="../images/edit-icon.svg" alt="" />
                                    </div>
                                </div>
                                <div className="id">
                                    ID:<span> 5MIN</span>
                                </div>

                            </div>
                        </div>
                        <div className="profile-score">
                            <span>10000</span>
                        </div>
                        <div className="profile-result">
                            <div className="win-count result">
                                <div className="result-content">
                                    <img src="../images/crown-win.svg" alt="" />
                                    <span className="result-count">1000</span>
                                </div>
                                <div className="result-title">
                                    <h3>Qalibiyyət</h3>
                                </div>
                            </div>

                            <div className="defeat-count result">
                                <div className="result-content">
                                    <img src="../images/skull-defeat.svg" alt="" />
                                    <span className="result-count">1000</span>
                                </div>
                                <div className="result-title">
                                    <h3>Məğlubiyyət</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-menu">
                    <ul>
                        <li>
                            <Link to="/history">
                                <img src="../images/clock-icon.svg" alt="" className="list-img"/>
                                <span className="list-name">Keçmiş</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="">
                                <img src="../images/rosette-icon.svg" alt="" className="list-img"/>
                                <span className="list-name">Rozetlərim</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="">
                                <img src="../images/social-icon.svg" alt="" className="list-img"/>
                                <span className="list-name">Sosial</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="">
                                <img src="../images/key-icon.svg" alt="" className="list-img"/>
                                <span className="list-name">Şifrəni dəyiş</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="">
                                <img src="../images/logout-icon.svg" alt="" className="list-img"/>
                                <span className="list-name">Çıxış</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        </>
    )
}

export default Profile