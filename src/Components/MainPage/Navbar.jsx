import {useState} from "react";
import { Link } from "react-router-dom";
import LoginCard from "../LoginCard";
import img08 from "./assets/Evorlogo2.png"

function Navbar () {
    const [showLoginCard, setShowLoginCard] = useState(false); 

    const handleLoginCard = () => {
        setShowLoginCard(!showLoginCard);
    }


    return (
        <>
            <div className="navbar-section">
                <div className="navbar-container">
                    <div className="navbar-header">
                            <h1 className="navbar-txt">Evor'da Satış Et</h1>
                    </div>
                    <nav className="navbar">
                        <img src={img08} alt="Evor Logo" className="navimg" />
                        <div className="navlinks">
                            <button className="navbtn">
                                <Link to={"/"} className="navlink" target="_blank">Ana Səhifə</Link>
                            </button>
                            <button className="navbtn">
                                <Link to={"/haqqımızda"} className="navlink">Haqqımızda</Link>
                            </button>
                            <button className="navbtn">
                                <Link to={'/xidmətlərimiz'} className="navlink" target="_blank">Xidmətlər</Link>
                            </button>
                            <button className="navbtn">
                                <Link to={"/"} className="navlink" target="_blank">Bloq</Link>
                            </button>
                            <button className="navbtn">
                                <Link to={"/"} className="navlink" target="_blank">Əlaqə</Link>
                            </button>
                        </div>
                        <div className="navicons">
                            <div>
                                <button className="navbtn" onClick={handleLoginCard}>
                                    <i class="fa-regular fa-user  navicon"></i>
                                </button>
                                {showLoginCard && <LoginCard/>}
                            </div>
                            <button className="navbtn">
                                <i class="fa-regular fa-heart navicon"></i>
                            </button>
                            <button className="navbtn" >
                                <i class="fa-solid fa-cart-shopping navicon"></i>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
export default Navbar;