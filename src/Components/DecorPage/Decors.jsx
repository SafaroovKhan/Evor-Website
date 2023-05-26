import {useState} from "react"
import DecorNav from "./DecorNav";
import DecorFilterNav from "./DecorFilterNav";
import DecorWindow from "./DecorWindow";
import DecorFilterCard from "./DecorFilterCard";
function Decors () {

    const [showDecorFilterCard, setShowDecorFilterCard] = useState(false);

    const handleFilterCard = () => {
        setShowDecorFilterCard(!showDecorFilterCard)
    }
    return (
        <>
            <DecorNav/>
            <DecorFilterNav/>
            <DecorWindow/>

            <div className="decorsidebar">
                <div className="decorsiderbar-container">
                    <div>
                        <button className="sidebar-btn" onClick={handleFilterCard}><i class="fa-solid fa-sliders"></i></button>
                        {showDecorFilterCard && <DecorFilterCard/>}
                    </div>
                    <button className="sidebar-btn"><i class="fa-solid fa-house"></i></button>
                    <button className="sidebar-btn"><i class="fa-solid fa-tag"></i></button>
                    <button className="sidebar-btn"><i class="fa-solid fa-gear"></i></button>
                </div>
            </div>
        </>
    );
}

export default Decors;