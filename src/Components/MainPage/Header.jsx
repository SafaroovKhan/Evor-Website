import Navbar from "./Navbar";
import img01 from "./assets/headerwebsite.png"
import Searchbar from "../Elements/Searchbar";
import { transform } from "framer-motion";
function Header () {
    return (
        <>
        <div className="header-section">
            <div className="header-navbar">
                <Navbar/>
            </div>
            <div className="header-searcbar">
                <Searchbar />
            </div>
            <img src={img01} alt="header image" className="header-img"/>
        </div>
        </>
    );
}

export default Header;