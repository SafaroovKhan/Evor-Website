import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import LoginCard from "../Elements/LoginCard";
import DecorCard from "../Elements/DecorCard";
import AboutusCard from "../Elements/AboutusCard";
import ToolsCard from "../Elements/ToolsCard";
import ServicesCard from "../Elements/Services";
import ContactCard from "../Elements/ContactCard";

function Navbar () {
    const [showLoginCard, setShowLoginCard] = useState(false); 
    const [isDecorCardVisible, setIsDecorCardVisible] = useState(false);
    const [isAboutusCardVisible, setIsAboutusCardVisible] = useState(false);
    const [isToolsCardVisible, setIsToolsCardVisible] = useState(false);
    const [isServicesCardVisible, setIsServicesCardVisible] = useState(false);
    const [isContactCardVisible, setIsContactCardVisible] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState("transparent");

    const handleLoginCard = () => {
        setShowLoginCard(!showLoginCard);
    }
    const handleDecorCardEnter = () => {
        setIsDecorCardVisible(true);
      };
      
    const handleDecorCardLeave = () => {
        setIsDecorCardVisible(false);
      };
    const handleAboutusCardEnter = () => {
        setIsAboutusCardVisible(true);
      };
      
    const handleAboutusCardLeave = () => {
        setIsAboutusCardVisible(false);
      };
    const handleToolsCardEnter = () => {
        setIsToolsCardVisible(true);
      };
      
    const handleToolsCardLeave = () => {
        setIsToolsCardVisible(false);
      };
    const handleServicesCardEnter = () => {
        setIsServicesCardVisible(true);
      };
      
    const handleServicesCardLeave = () => {
        setIsServicesCardVisible(false);
      };
    const handleContactCardEnter = () => {
        setIsContactCardVisible(true);
      };
      
    const handleContactCardLeave = () => {
        setIsContactCardVisible(false);
      };

    useEffect(() => {
        document.querySelector(".navbar-section").classList.add("animate-navbar");
        document.querySelector(".navlinks").classList.add("animate-navlinks");
        document.querySelector(".navicons").classList.add("animate-navlinks");
        document.querySelector(".lang-btns").classList.add("animate-navlinks");

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 500) {
              setNavbarBackground("#DFD3C3");
            } else {
              setNavbarBackground("transparent");
            }
          };
      
          window.addEventListener("scroll", handleScroll);
      
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
      }, []);

    return (
        <>
            <div className="navbar-section"  style={{ backgroundColor: navbarBackground }}>
                <div className="navbar-container">
                    <div className="navbar-header">
                            <h1 className="navbar-txt">Evor'da Satış Et</h1>
                    </div>
                    <nav className="navbar">
                        <div className="navbar-navigation-bar">
                            <div className="lang-btns">
                                <button className="lang-btn">Az</button>
                                <button className="lang-btn">Eng</button>
                                <button className="lang-btn">Rus</button>
                            </div>
                            <div className="navlinks">
                                <button className="navbtn">
                                    <Link to={"/"} className="navlink navlink-right-brdr" >Ana Səhifə</Link>
                                </button>
                                <div>
                                    <button className="navbtn " onMouseEnter={handleAboutusCardEnter}
                                    onMouseLeave={handleAboutusCardLeave}>
                                        <Link to={"/haqqımızda"} className="navlink navlink-right-brdr">Haqqımızda</Link>
                                    </button>
                                    {isAboutusCardVisible && <AboutusCard />}
                                </div>
                                <div>
                                    <button className="navbtn" onMouseEnter={handleDecorCardEnter}
                                    onMouseLeave={handleDecorCardLeave}>
                                            <Link to={"/haqqımızda"} className="navlink navlink-right-brdr">Dekorlar</Link>
                                    </button>
                                    {isDecorCardVisible && <DecorCard />}
                                </div>
                                <div>
                                    <button className="navbtn" onMouseEnter={handleToolsCardEnter}
                                    onMouseLeave={handleToolsCardLeave}>
                                        <Link to={"/haqqımızda"} className="navlink navlink-right-brdr" >Ləvazimatlar</Link>
                                    </button>
                                    {isToolsCardVisible && <ToolsCard />}
                                </div>
                                <div>
                                    <button className="navbtn"  onMouseEnter={handleServicesCardEnter}
                                    onMouseLeave={handleServicesCardLeave}>
                                        <Link to={'/xidmətlərimiz'} className="navlink navlink-right-brdr" >Xidmətlər</Link>
                                    </button>
                                    {isServicesCardVisible && <ServicesCard />}
                                </div>
                                <div>
                                    <button className="navbtn"  onMouseEnter={handleContactCardEnter}
                                    onMouseLeave={handleContactCardLeave}>
                                        <Link to={"/"} className="navlink" >Əlaqə</Link>
                                    </button>
                                    {isContactCardVisible && <ContactCard />}
                                </div>
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
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
export default Navbar;