import { useState } from "react";
import LoginCard from "../Elements/LoginCard"
import img08 from "../MainPage/assets/Evorlogo2.png"


function DecorNav () {
    const [showLoginCard, setShowLoginCard] = useState(false); 

    const handleLoginCard = () => {
        setShowLoginCard(!showLoginCard);
    }
    return (
        <>
            <div className="decornav">
                <div className="decornav-container">
                    <div className="decornav-logo">
                        <img src={img08} alt="Evor Logo" className="navimg" />
                    </div>
                    <div className="decornav-text">
                        <h1 className="decornav-brand">Dekorlar</h1>
                    </div>
                    <div className="decornav-btns">
                        <button className="decornav-btn">
                            Özün Dizayn Et
                        </button>
                        <div>
                            <button className="decornav-icon" onClick={handleLoginCard}><i class="fa-regular fa-user  navicon"></i></button>
                            {showLoginCard && <LoginCard/>}
                        </div>
                        <button className="decornav-icon"> <i class="fa-regular fa-heart navicon"></i></button>
                        <button className="decornav-icon"> <i class="fa-solid fa-cart-shopping navicon"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DecorNav;