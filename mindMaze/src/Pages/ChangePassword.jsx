import { useEffect } from "react"
import { Link } from "react-router-dom"


const ChangePassword = () => {


    useEffect(() => {
        const showPassword = document.querySelectorAll('.show-password')

        showPassword.forEach(item => {
            item.addEventListener("click", () => {
                item.classList.toggle('show')
            })
        })

        const form = document.querySelector('.password-form')
        const changePassword = document.querySelector('.change-password-btn')
        const message = document.querySelector('.message')


        changePassword.addEventListener("click", () => {
            form.classList.add('hide')
            message.classList.add("show")
        })

    })


    return (
        <>
            <main>
                <div className="change-password">
                    <Link to="/gamer-modes/profile" className="button back-button">
                        <span>Geri</span>
                    </Link>

                    <div className="page-title">
                        <div className="title-content">
                            <img src="../images/key-icon.svg" alt="" className="list-img"/>
                            <span className="list-name">Şifrəni dəyiş</span>
                        </div>
                    </div> 


                    <div className="password-form">
                        <form>
                            <input type="text" placeholder="Köhnə şifrə"/>

                            <div className="new-password">
                                <input type="text" placeholder="Yeni şifrə"/>

                                <div className="show-password" style={{backgroundImage: "url('../images/ClosedEye-2.svg')"}}>

                                </div>
                            </div>

                            <div className="new-password">
                                <input type="text" placeholder="Yeni şifrə"/>

                                <div className="show-password" style={{backgroundImage: "url('../images/ClosedEye-2.svg')"}}>

                                </div>
                            </div>


                            <div className="form-button">
                                <button type="button" className="save-button">
                                    <span>Saxla</span>
                                </button>
                            </div>
                        </form>   


                        <div className="change-password-btn">
                            <span>Şifrəni unutmuşam</span>
                        </div>
                         
                    </div>


                    <div className="message ">
                        <div className="message-inner">
                            <div className="message-text">
                                <p>Şifrənizi yeniləmək üçün mail ünvanınıza mesaj göndərildi</p>
                            </div>
                            <div className="message-button">
                                <button type="button">
                                    <span>OK</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ChangePassword