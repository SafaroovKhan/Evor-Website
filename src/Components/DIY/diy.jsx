import { useState } from "react";
import { Link } from "react-router-dom";
import DiyFilterCard from "./diyfiltercard";
import DiyFilterNav from "./diyfilternav";
import DiyNav from "./diynav";
import DiyWindow from "./diywindow";

export default function DIY () {

    const [showDiyFilterCard, setShowDiyFilterCard] = useState(false);

    const handleFilterCard = () => {
        setShowDiyFilterCard(!showDiyFilterCard)
    }


    return (
        <>
            <DiyNav/>
            <DiyFilterNav/>
            <DiyWindow/>

            <div className="decorsidebar">
                <div className="decorsiderbar-container">
                    <div>
                        <button className="sidebar-btn" onClick={handleFilterCard}><i class="fa-solid fa-sliders"></i></button>
                        {showDiyFilterCard && <DiyFilterCard/>}
                    </div>
                    <button className="sidebar-btn"><Link to={'/'} className="navlink"><i class="fa-solid fa-house"></i></Link></button>
                    <button className="sidebar-btn"><i class="fa-solid fa-tag"></i></button>
                    <button className="sidebar-btn"><i class="fa-solid fa-gear"></i></button>
                </div>
            </div>
        </>
    );
} 