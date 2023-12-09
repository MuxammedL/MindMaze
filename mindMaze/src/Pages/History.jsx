import { useEffect } from "react"
import { Link } from "react-router-dom"

const History = () => {
    return (
        <>

            <main>

                
                <Link to="/profile" className="button back-button">
                    <span>Geri</span>
                </Link>

            </main>
        </>
    )
}

export default History