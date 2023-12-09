import { useEffect } from "react"




const Ranking = () => {

    useEffect(() => {
        const mine = document.querySelector('.mine')
        const rankContainer = document.querySelector(".ranking-players")

        rankContainer.addEventListener('scroll', () => {
            if(rankContainer.scrollTop >= mine.scrollHeight) {
                mine.style.position="relative"
                mine.style.bottom="0"
                mine.style.width="100%"
            } else {
                mine.style.position="absolute"
                mine.style.bottom="19px"
                mine.style.width="calc(100% - 4px)"
            }
        })
    })

    return (
        <>
            <main>
                <div className="ranking">
                    <div className="ranking-wrapper">
                        <div className="bg-image"style={{ backgroundImage: "url('../images/ranking-star.svg')" }}></div>
                        <div className="ranking-content">
                            <div className="border-button">
                                <div className="button-inner">

                                </div>
                            </div>

                            <div className="ranking-players">
                                <div className="player">
                                    <div className="player-wrapper">
                                        <div className="player-profile"  style={{ backgroundImage: "url('../images/group-profile-bg.svg')" }}>
                                            <img src="../images/group-profile-img.svg" alt="" />
                                        </div>

                                        <div className="content">
                                            <h3>Apokalipsis</h3>
                                            <span className="score">10000</span>
                                        </div>
                                    </div>
                                    

                                    <div className="player-details">
                                        <div className="detail">
                                            <span className="rank-indicator">1</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="player">
                                    <div className="player-wrapper">
                                        <div className="player-profile"  style={{ backgroundImage: "url('../images/group-profile-bg.svg')" }}>
                                            <img src="../images/group-profile-img.svg" alt="" />
                                        </div>

                                        <div className="content">
                                            <h3>Apokalipsis</h3>
                                            <span className="score">10000</span>
                                        </div>
                                    </div>
                                    

                                    <div className="player-details">
                                        <div className="detail">
                                            <span className="rank-indicator">2</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="player">
                                    <div className="player-wrapper">
                                        <div className="player-profile"  style={{ backgroundImage: "url('../images/group-profile-bg.svg')" }}>
                                            <img src="../images/group-profile-img.svg" alt="" />
                                        </div>

                                        <div className="content">
                                            <h3>Apokalipsis</h3>
                                            <span className="score">10000</span>
                                        </div>
                                    </div>
                                    

                                    <div className="player-details">
                                        <div className="detail">
                                            <span className="rank-indicator">3</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="player">
                                    <div className="player-wrapper">
                                        <div className="player-profile"  style={{ backgroundImage: "url('../images/group-profile-bg.svg')" }}>
                                            <img src="../images/group-profile-img.svg" alt="" />
                                        </div>

                                        <div className="content">
                                            <h3>Apokalipsis</h3>
                                            <span className="score">10000</span>
                                        </div>
                                    </div>
                                    

                                    <div className="player-details">
                                        <div className="detail">
                                            <span className="rank-indicator">4</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="player">
                                    <div className="player-wrapper">
                                        <div className="player-profile"  style={{ backgroundImage: "url('../images/group-profile-bg.svg')" }}>
                                            <img src="../images/group-profile-img.svg" alt="" />
                                        </div>

                                        <div className="content">
                                            <h3>Apokalipsis</h3>
                                            <span className="score">10000</span>
                                        </div>
                                    </div>
                                    

                                    <div className="player-details">
                                        <div className="detail">
                                            <span className="rank-indicator">5</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="player">
                                    <div className="player-wrapper">
                                        <div className="player-profile"  style={{ backgroundImage: "url('../images/group-profile-bg.svg')" }}>
                                            <img src="../images/group-profile-img.svg" alt="" />
                                        </div>

                                        <div className="content">
                                            <h3>Apokalipsis</h3>
                                            <span className="score">10000</span>
                                        </div>
                                    </div>
                                    

                                    <div className="player-details">
                                        <div className="detail">
                                            <span className="rank-indicator">6</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="player mine">
                                    <div className="player-wrapper">
                                        <div className="player-profile"  style={{ backgroundImage: "url('../images/group-profile-bg.svg')" }}>
                                            <img src="../images/group-profile-img.svg" alt="" />
                                        </div>

                                        <div className="content">
                                            <h3>Apokalipsis</h3>
                                            <span className="score">10000</span>
                                        </div>
                                    </div>
                                    

                                    <div className="player-details">
                                        <div className="detail">
                                            <span className="rank-indicator">7</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="player">
                                    <div className="player-wrapper">
                                        <div className="player-profile"  style={{ backgroundImage: "url('../images/group-profile-bg.svg')" }}>
                                            <img src="../images/group-profile-img.svg" alt="" />
                                        </div>

                                        <div className="content">
                                            <h3>Apokalipsis</h3>
                                            <span className="score">10000</span>
                                        </div>
                                    </div>
                                    

                                    <div className="player-details">
                                        <div className="detail">
                                            <span className="rank-indicator">8</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="player">
                                    <div className="player-wrapper">
                                        <div className="player-profile"  style={{ backgroundImage: "url('../images/group-profile-bg.svg')" }}>
                                            <img src="../images/group-profile-img.svg" alt="" />
                                        </div>

                                        <div className="content">
                                            <h3>Apokalipsis</h3>
                                            <span className="score">10000</span>
                                        </div>
                                    </div>
                                    

                                    <div className="player-details">
                                        <div className="detail">
                                            <span className="rank-indicator">9</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="player">
                                    <div className="player-wrapper">
                                        <div className="player-profile"  style={{ backgroundImage: "url('../images/group-profile-bg.svg')" }}>
                                            <img src="../images/group-profile-img.svg" alt="" />
                                        </div>

                                        <div className="content">
                                            <h3>Apokalipsis</h3>
                                            <span className="score">10000</span>
                                        </div>
                                    </div>
                                    

                                    <div className="player-details">
                                        <div className="detail">
                                            <span className="rank-indicator">10</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="player">
                                    <div className="player-wrapper">
                                        <div className="player-profile"  style={{ backgroundImage: "url('../images/group-profile-bg.svg')" }}>
                                            <img src="../images/group-profile-img.svg" alt="" />
                                        </div>

                                        <div className="content">
                                            <h3>Apokalipsis</h3>
                                            <span className="score">10000</span>
                                        </div>
                                    </div>
                                    

                                    <div className="player-details">
                                        <div className="detail">
                                            <span className="rank-indicator">11</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-button">
                                <div className="button-inner">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Ranking