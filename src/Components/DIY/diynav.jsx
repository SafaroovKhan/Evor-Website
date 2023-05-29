import { useState } from "react";
import LoginCard from "../LoginCard"
import img08 from "../MainPage/assets/Evorlogo2.png"


function DiyNav () {
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
                        <h1 className="decornav-brand">Özün dizayn et</h1>
                    </div>
                    <div className="decornav-btns">
                        <button className="decornav-btn">
                            Dekorlar
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
export default DiyNav;