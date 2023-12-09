import { useEffect } from "react"
import { Link } from "react-router-dom"



const Challenge = () => {

    useEffect(() => {
        function removeActive(items) {
            items.forEach(item => {
                item.classList.remove("active");
            })
        }
        const groupButtons = document.querySelectorAll('.group-button')
        groupButtons.forEach((button) => {
            button.addEventListener("click", () => {
                if(!button.classList.contains('active')) {
                    removeActive(groupButtons)
                    button.classList.add("active");
                } else {
                }
            })
        })



        const globalBtn = document.querySelector('.global-btn')
        const friendsBtn = document.querySelector('.friends-btn')

        const globalContent = document.querySelector('.global')
        const friendsContent = document.querySelector('.friends')



        globalBtn.addEventListener("click", () => {
            friendsContent.classList.remove("show")
            globalContent.classList.add("show")
        })

        friendsBtn.addEventListener("click", () => {
            globalContent.classList.remove("show")
            friendsContent.classList.add("show")
        })

        const filterBtn = document.querySelector('.filter-button')
        const filterContent = document.querySelector('.filter-content')

        const filters = document.querySelectorAll('.filter')

        filterBtn.addEventListener("click", () => {
            filterContent.classList.toggle('show')
        })

        window.addEventListener("click", (e) => {
            if(e.target !== filterBtn && e.target !== filterBtn.firstElementChild) {
                filterContent.classList.remove('show')
            }
        })



        filters.forEach(item => {
            item.addEventListener("click", () => {

                if(!item.classList.contains('active')) {
                    removeActive(filters)
                    item.classList.add('active')
                } 
            })
        })
    })

    return (
        <>
            <main className="challenge">
                <section className="challenge">
                    <div className="buttons">
                        <Link to="/group-player-mode" className="button back-button">
                            <span>Geri</span>
                        </Link>

                        <div className="filters">
                            <div className="button filter-button">
                                <img src="./images/filter.svg" alt="" />
                            </div>
                            <div className="filter-content">
                                <div className="content-wrapper">
                                    <div className="az-filter az-filter-1 filter"  style={{ backgroundImage: "url('./images/filter-az.svg')" }}>
                                    </div>
                                    <div className="az-filter az-filter-2 filter"  style={{ backgroundImage: "url('./images/filter-za.svg')" }}>
                                    </div>
                                    <div className="ranking-filter-1 filter ranking-filter" style={{ backgroundImage: "url('./images/filter-ranking-1.svg')" }}>
                                    </div>
                                    <div className="ranking-filter-2 filter ranking-filter" style={{ backgroundImage: "url('./images/filter-ranking-2.svg')" }}>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="bg-img" style={{ backgroundImage: "url('./images/challenge-bg.svg')" }}></div>


                    <div className="group-buttons">
                        <div className="global-btn group-button active">
                            <div className="button-inner">
                                <span>Qlobal</span>
                            </div>
                        </div>
                        <div className="friends-btn group-button">
                            <div className="button-inner">
                                <span>Dostlar</span>
                            </div>
                        </div>
                    </div>

                    <div className="global players-content show">
                        <div className="searchbox">
                            <div className="searchbox-wrapper">
                                <input type="text" className="search-input" placeholder="username"/>
                                <div className="search-icon">
                                    <img src="./images/searchbox-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="global-players">
                            <div className="player">
                                <div className="player-wrapper">
                                    <div className="player-profile"  style={{ backgroundImage: "url('./images/group-profile-bg.svg')" }}>
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

                            <div className="player">
                                <div className="player-wrapper">
                                    <div className="player-profile"  style={{ backgroundImage: "url('./images/group-profile-bg.svg')" }}>
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
                    </div>

                    <div className="friends players-content">
                        <div className="searchbox">
                            <div className="searchbox-wrapper">
                                <input type="text" className="search-input" placeholder="username və ID"/>
                                <div className="search-icon">
                                    <img src="./images/searchbox-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="friends-players">
                            <div className="player">
                                <div className="player-wrapper">
                                    <div className="player-profile"  style={{ backgroundImage: "url('./images/group-profile-bg.svg')" }}>
                                        <img src="./images/group-profile-img.svg" alt="" />
                                    </div>

                                    <div className="content">
                                        <h3>Apokalipsis</h3>
                                        <span className="score">10000</span>
                                    </div>
                                </div>
                                

                                <div className="player-details">
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

                            <div className="player">
                                <div className="player-wrapper">
                                    <div className="player-profile"  style={{ backgroundImage: "url('./images/group-profile-bg.svg')" }}>
                                        <img src="./images/group-profile-img.svg" alt="" />
                                    </div>

                                    <div className="content">
                                        <h3>Apokalipsis</h3>
                                        <span className="score">10000</span>
                                    </div>
                                </div>

                                <div className="player-details">
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

                    </div>
            </section>
        </main>
        </>
    )
}

export default Challenge