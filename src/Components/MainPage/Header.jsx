import Navbar from "./Navbar";
import img01 from "./assets/headerwebsite.png"
function Header () {
    return (
        <>
        <div className="header-section">
            <div className="header-navbar">
                <Navbar/>
            </div>
            <img src={img01} alt="header image" className="header-img"/>
        </div>
        </>
    );
}

export default Header;