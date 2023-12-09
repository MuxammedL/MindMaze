import { Link } from "react-router-dom"



const Challenge = () => {
    return (
        <>
            <main>
                <section className="challenge">
                    <div className="buttons">
                        <div className="button back-button">
                            <span>Geri</span>
                        </div>
                        <div className="button filter-button">
                            <img src="./images/filter.svg" alt="" />
                        </div>
                    </div>

                    <div className="bg-img" style={{ backgroundImage: "url('./images/challenge-bg.svg')" }}></div>


                    <div className="group-buttons">
                        <Link className="group-button">
                            <div className="button-inner">
                                <span>Qlobal</span>
                            </div>
                        </Link>
                        <Link className="group-button">
                            <div className="button-inner">
                                <span>Dostlar</span>
                            </div>
                        </Link>
                    </div>


                    <div className="searchbox">
                        <div className="searchbox-wrapper">
                            <input type="text" className="search-input" placeholder="username"/>
                            <div className="search-icon">
                                <img src="./images/searchbox-icon.svg" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="global-opponents">
                        <div className="opponent">
                            <div className="opponent-wrapper">
                                <div className="profile"  style={{ backgroundImage: "url('./images/group-profile-bg.svg')" }}>
                                    <img src="./images/group-profile-img.svg" alt="" />
                                </div>

                                <div className="content">
                                    <h3>Apokalipsis</h3>
                                    <span className="score">10000</span>
                                </div>
                            </div>

                            <div className="sword">
                                <img src="./images/sword.svg" alt="" />
                                <div className="plus-icon">
                                    <img src="./images/plus.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="opponent">
                            <div className="opponent-wrapper">
                                <div className="profile"  style={{ backgroundImage: "url('./images/group-profile-bg.svg')" }}>
                                    <img src="./images/group-profile-img.svg" alt="" />
                                </div>

                                <div className="content">
                                    <h3>Apokalipsis</h3>
                                    <span className="score">10000</span>
                                </div>
                            </div>

                            <div className="sword">
                                <img src="./images/green-sword.svg" alt="" />
                                <div className="plus-icon">
                                    <img src="./images/sword-tick.svg" alt="" />
                                </div>
                            </div>
                        </div>

                       
                    </div>
                    


                    <div className="friends-opponents">
                        <div className="opponent">
                            <div className="opponent-wrapper">
                                <div className="profile"  style={{ backgroundImage: "url('./images/group-profile-bg.svg')" }}>
                                    <img src="./images/group-profile-img.svg" alt="" />
                                </div>

                                <div className="content">
                                    <h3>Apokalipsis</h3>
                                    <span className="score">10000</span>
                                </div>
                            </div>
                            

                            <div className="opponent-details">
                                <div className="detail">
                                    <img src="./images/sword.svg" alt="" />
                                    <div className="plus-icon">
                                        <img src="./images/plus.svg" alt="" />
                                    </div>
                                </div>
                                <span className="line"></span>
                                <div className="detail">
                                <img src="./images/shield.svg" alt="" />
                                    <div className="plus-icon">
                                        <img src="./images/plus.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="opponent">
                            <div className="opponent-wrapper">
                                <div className="profile"  style={{ backgroundImage: "url('./images/group-profile-bg.svg')" }}>
                                    <img src="./images/group-profile-img.svg" alt="" />
                                </div>

                                <div className="content">
                                    <h3>Apokalipsis</h3>
                                    <span className="score">10000</span>
                                </div>
                            </div>

                            <div className="opponent-details">
                                <div className="detail">
                                    <img src="./images/green-sword.svg" alt="" />
                                    <div className="plus-icon">
                                        <img src="./images/sword-tick.svg" alt="" />
                                    </div>
                                </div>

                                <span className="line"></span>


                                <div className="detail">
                                    <img src="./images/green-shield.svg" alt="" />
                                        <div className="plus-icon">
                                            <img src="./images/sword-tick.svg" alt="" />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
        </>
    )
}

export default Challenge