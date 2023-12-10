import { useEffect } from "react"
import { Link } from "react-router-dom"


const Profile = () => {


    useEffect(() => {
        const logOut = document.querySelector(".logout")
        const logOutContent = document.querySelector(".logout-modal")
        const offcanvas = document.querySelector('.offcanvas')
        const notificationIndicator = document.querySelector('.notification-indicator')
        const closeButton = document.querySelector('.close-button')

        logOut.addEventListener("click", () => {
            logOutContent.classList.add('show')
        })
        notificationIndicator.addEventListener("click", () => {
            offcanvas.parentElement.classList.add('show')
        })
        closeButton.addEventListener('click',()=>{
            offcanvas.parentElement.classList.remove('show')
        })
        const noBtn = document.querySelector(".no-button")
        noBtn.addEventListener("click", () => {
            logOutContent.classList.remove('show')
        })


    })

    const handleClick =()=>{
        localStorage.setItem("navbar", "gamer-modes");
        localStorage.removeItem('response')
        localStorage.removeItem('opponentinfo')
    }
   const response = JSON.parse(localStorage.getItem("response"));


    return (
        <>
        <main>
            <div className="profile">
                <div className="profile-info">
                    <div className="notification-indicator">
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
                                    <h3>{response&&response.userName}</h3>

                                    <div className="edit">
                                        <img src="../images/edit-icon.svg" alt="" />
                                    </div>
                                </div>
                                <div className="id">
                                    ID:<span> {response&&response.idToken}</span>
                                </div>

                            </div>
                        </div>
                        <div className="profile-score">
                            <span>{response&&response.point}</span>
                        </div>
                        <div className="profile-result">
                            <div className="win-count result">
                                <div className="result-content">
                                    <img src="../images/crown-win.svg" alt="" />
                                    <span className="result-count">35</span>
                                </div>
                                <div className="result-title">
                                    <h3>Qalibiyyət</h3>
                                </div>
                            </div>

                            <div className="defeat-count result">
                                <div className="result-content">
                                    <img src="../images/skull-defeat.svg" alt="" />
                                    <span className="result-count">23</span>
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
                            <Link to="/rossetes">
                                <img src="../images/rosette-icon.svg" alt="" className="list-img"/>
                                <span className="list-name">Rozetlərim</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/friends">
                                <img src="../images/social-icon.svg" alt="" className="list-img"/>
                                <span className="list-name">Dostlar</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/change-password">
                                <img src="../images/key-icon.svg" alt="" className="list-img"/>
                                <span className="list-name">Şifrəni dəyiş</span>
                            </Link>
                        </li>

                        <li className="logout">
                            <Link to="">
                                <img src="../images/logout-icon.svg" alt="" className="list-img"/>
                                <span className="list-name">Çıxış</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="logout-modal">
                <div className="modal">
                    <div className="modal-inner">
                        <div className="modal-text">
                            <p>Çıxmaq istədiyinizə əminsiniz?</p>
                        </div>
                        <div className="modal-buttons">
                            <button className="modal-button no-button">
                                <span>Xeyr</span>
                            </button>
                            <Link onClick={handleClick} to="/registration" className="modal-button yes-button">
                                <span>Bəli</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <div className="notification-offcanvas">
            <div className="offcanvas">
                <div className="offcanvas-wrapper">
                    <div className="notifications">
                        <button className="close-button">
                            <img src="../images/close-icon.svg" alt="" />
                        </button>

                        <div className="notifications-container">
                            <div className="notifications-inner">
                                <div className="notification  notification-1">
                                    <div className="notification-title">
                                        <h2>Apokalipsi sənə dostluq istəyi göndərdi</h2>
                                    </div>
                                    <div className="notification-details">
                                        <div className="notification-buttons">
                                            <button className="reject-button button">
                                                <img src="../images/close-icon-small.svg" alt="" />
                                            </button>
                                            <button className="access-button button">
                                                <img src="../images/tick-icon.svg" alt="" />
                                            </button>
                                        </div>
                                        <div className="notification-time">
                                            <span className="time">indi</span>
                                            <span className="day">Bu gün</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="notification  notification-2">
                                    <div className="notification-title">
                                        <h2>Apokalipsi sənə dostluq istəyi göndərdi</h2>
                                    </div>
                                    <div className="notification-details">
                                        <div className="notification-buttons">
                                            <button className="reject-button button">
                                                <img src="../images/close-icon-small.svg" alt="" />
                                            </button>
                                            <button className="access-button button">
                                                <img src="../images/tick-icon.svg" alt="" />
                                            </button>
                                        </div>
                                        <div className="notification-time">
                                            <span className="time">indi</span>
                                            <span className="day">Bu gün</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="notification  notification-3">
                                    <div className="notification-title">
                                        <h2>Apokalipsi sənə dostluq istəyi göndərdi</h2>
                                    </div>
                                    <div className="notification-details">
                                        <div className="notification-buttons">
                                            <button className="reject-button button">
                                                <img src="../images/close-icon-small.svg" alt="" />
                                            </button>
                                            <button className="access-button button">
                                                <img src="../images/tick-icon.svg" alt="" />
                                            </button>
                                        </div>
                                        <div className="notification-time">
                                            <span className="time">indi</span>
                                            <span className="day">Bu gün</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="notification  notification-1">
                                    <div className="notification-title">
                                        <h2>Apokalipsi sənə dostluq istəyi göndərdi</h2>
                                    </div>
                                    <div className="notification-details">
                                        <div className="notification-buttons">
                                            <button className="reject-button button">
                                                <img src="../images/close-icon-small.svg" alt="" />
                                            </button>
                                            <button className="access-button button">
                                                <img src="../images/tick-icon.svg" alt="" />
                                            </button>
                                        </div>
                                        <div className="notification-time">
                                            <span className="time">indi</span>
                                            <span className="day">Bu gün</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="notification  notification-1">
                                    <div className="notification-title">
                                        <h2>Apokalipsi sənə dostluq istəyi göndərdi</h2>
                                    </div>
                                    <div className="notification-details">
                                        <div className="notification-buttons">
                                            <button className="reject-button button">
                                                <img src="../images/close-icon-small.svg" alt="" />
                                            </button>
                                            <button className="access-button button">
                                                <img src="../images/tick-icon.svg" alt="" />
                                            </button>
                                        </div>
                                        <div className="notification-time">
                                            <span className="time">indi</span>
                                            <span className="day">Bu gün</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="notification  notification-1">
                                    <div className="notification-title">
                                        <h2>Apokalipsi sənə dostluq istəyi göndərdi</h2>
                                    </div>
                                    <div className="notification-details">
                                        <div className="notification-buttons">
                                            <button className="reject-button button">
                                                <img src="../images/close-icon-small.svg" alt="" />
                                            </button>
                                            <button className="access-button button">
                                                <img src="../images/tick-icon.svg" alt="" />
                                            </button>
                                        </div>
                                        <div className="notification-time">
                                            <span className="time">indi</span>
                                            <span className="day">Bu gün</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="notification  notification-1">
                                    <div className="notification-title">
                                        <h2>Apokalipsi sənə dostluq istəyi göndərdi</h2>
                                    </div>
                                    <div className="notification-details">
                                        <div className="notification-buttons">
                                            <button className="reject-button button">
                                                <img src="../images/close-icon-small.svg" alt="" />
                                            </button>
                                            <button className="access-button button">
                                                <img src="../images/tick-icon.svg" alt="" />
                                            </button>
                                        </div>
                                        <div className="notification-time">
                                            <span className="time">indi</span>
                                            <span className="day">Bu gün</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="notification  notification-1">
                                    <div className="notification-title">
                                        <h2>Apokalipsi sənə dostluq istəyi göndərdi</h2>
                                    </div>
                                    <div className="notification-details">
                                        <div className="notification-buttons">
                                            <button className="reject-button button">
                                                <img src="../images/close-icon-small.svg" alt="" />
                                            </button>
                                            <button className="access-button button">
                                                <img src="../images/tick-icon.svg" alt="" />
                                            </button>
                                        </div>
                                        <div className="notification-time">
                                            <span className="time">indi</span>
                                            <span className="day">Bu gün</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="notification  notification-1">
                                    <div className="notification-title">
                                        <h2>Apokalipsi sənə dostluq istəyi göndərdi</h2>
                                    </div>
                                    <div className="notification-details">
                                        <div className="notification-buttons">
                                            <button className="reject-button button">
                                                <img src="../images/close-icon-small.svg" alt="" />
                                            </button>
                                            <button className="access-button button">
                                                <img src="../images/tick-icon.svg" alt="" />
                                            </button>
                                        </div>
                                        <div className="notification-time">
                                            <span className="time">indi</span>
                                            <span className="day">Bu gün</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="notification  notification-1">
                                    <div className="notification-title">
                                        <h2>Apokalipsi sənə dostluq istəyi göndərdi</h2>
                                    </div>
                                    <div className="notification-details">
                                        <div className="notification-buttons">
                                            <button className="reject-button button">
                                                <img src="../images/close-icon-small.svg" alt="" />
                                            </button>
                                            <button className="access-button button">
                                                <img src="../images/tick-icon.svg" alt="" />
                                            </button>
                                        </div>
                                        <div className="notification-time">
                                            <span className="time">indi</span>
                                            <span className="day">Bu gün</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="notification  notification-1">
                                    <div className="notification-title">
                                        <h2>Apokalipsi sənə dostluq istəyi göndərdi</h2>
                                    </div>
                                    <div className="notification-details">
                                        <div className="notification-buttons">
                                            <button className="reject-button button">
                                                <img src="../images/close-icon-small.svg" alt="" />
                                            </button>
                                            <button className="access-button button">
                                                <img src="../images/tick-icon.svg" alt="" />
                                            </button>
                                        </div>
                                        <div className="notification-time">
                                            <span className="time">indi</span>
                                            <span className="day">Bu gün</span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </>
    )
}

export default Profile