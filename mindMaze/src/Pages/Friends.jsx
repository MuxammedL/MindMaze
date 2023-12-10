import { useEffect } from "react"
import { Link } from "react-router-dom"

const Friends = () => {

    useEffect(() => {
        const addBtn = document.querySelector('.add-button')
        const oldFriend = document.querySelectorAll('.old-friend')
        const newFriend = document.querySelectorAll('.new-friend')
        addBtn.addEventListener("click", () => {

            oldFriend.forEach(item => {
                item.style.display = "none"
            })

            newFriend.forEach(item => {
                item.style.display = "block"
            })

        })
    })



    return (
        <>

            <main>
                <div className="friends">

                    <div className="friends-wrapper">
                        <div className="buttons">
                            <Link to="/gamer-modes/profile" className="button back-button">
                                <span>Geri</span>
                            </Link>
                            <button type="button" className="button add-button">
                                <span>Əlavə et</span>
                                <img src="../images/add-friends.svg" alt="" />
                            </button>
                        </div> 


                        <div className="page-title">
                            <div className="title-content">
                                <img src="../images/social-icon.svg" alt="" className="list-img"/>
                                <span className="list-name">Dostlar</span>
                            </div>
                        </div> 
                    </div>


                    <div className="add-friends">
                        <div className="friends-inner">
                            <div className="searchbox">
                                <div className="searchbox-wrapper">
                                    <input type="text" className="search-input" placeholder="username"/>
                                    <div className="search-icon">
                                        <img src="./images/searchbox-icon.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="friends-cards">
                                <div className="friend-card old-friend">

                                    <div className="card-wrapper">

                                        <div className="card-content">
                                            <div className="player-profile"  style={{ backgroundImage: "url('./images/group-profile-bg.svg')" }}>
                                                <img src="./images/group-profile-img.svg" alt="" />
                                            </div>
                                            <h3 className="name">Apokalapsa</h3>

                                        </div>

                                        <span className="score">10000</span>
                                    </div>
                                </div>

                                <div className="friend-card old-friend">

                                    <div className="card-wrapper">

                                        <div className="card-content">
                                            <div className="player-profile"  style={{ backgroundImage: "url('./images/group-profile-bg.svg')" }}>
                                                <img src="./images/group-profile-img.svg" alt="" />
                                            </div>
                                            <h3 className="name">Apokalapsa</h3>

                                        </div>

                                        <span className="score">10000</span>
                                    </div>
                                </div>


                                <div className="friend-card new-friend">
                                    <div className="card-wrapper">


                                        <div className="card-content">
                                            <div className="player-profile"  style={{ backgroundImage: "url('./images/group-profile-bg.svg')" }}>
                                                <img src="./images/group-profile-img.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h3 className="name">Apokalipsis</h3>
                                                <span className="score">10000</span>
                                            </div>

                                        </div>

                                        <div className="card-icon">
                                            <img src="../images/adding-icon-1.svg" alt="" />
                                        </div>

                                    </div>
                                </div>

                                <div className="friend-card new-friend">
                                    <div className="card-wrapper">


                                        <div className="card-content">
                                            <div className="player-profile"  style={{ backgroundImage: "url('./images/group-profile-bg.svg')" }}>
                                                <img src="./images/group-profile-img.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h3 className="name">Apokalipsis</h3>
                                                <span className="score">10000</span>
                                            </div>

                                        </div>

                                        <div className="card-icon">
                                            <img src="../images/adding-icon-2.svg" alt="" />
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

export default Friends