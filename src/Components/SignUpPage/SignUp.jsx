import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../MainPage/Footer"
import googleimg from "./images/googlelogo.png"
import loginimg from "./images/loginbackground.png"
import LoginCard from "../LoginCard"
export default function SignUp () {

    const [showLoginCard, setShowLoginCard] = useState(false); 

    const handleLoginCard = () => {
        setShowLoginCard(!showLoginCard);
    }

    return (
        <>
                <div className="login-navbar">
                    <div className="login-navbar-container">
                        <div className="login-nav-btns">
                            <button className="login-nav-btn"><Link to={"/"} className="navlink" >Ana Səhifə</Link></button>
                            <button className="login-nav-btn"><Link to={"/haqqımızda"} className="navlink" >Haqqımızda</Link></button>
                            <button className="login-nav-btn"><Link to={"/xidmətlərimiz"} className="navlink" >Xidmətlər</Link></button>
                            <button className="login-nav-btn"><Link to={"/"} className="navlink" >Bloq</Link></button>
                            <button className="login-nav-btn"><Link to={"/"} className="navlink" >Əlaqə</Link></button>
                        </div>
                        <div className="login-nav-icons">
                            <div>
                                <button className="login-nav-icon" onClick={handleLoginCard}><i class="fa-regular fa-user  "></i></button>
                                {showLoginCard && <LoginCard/>}
                            </div>
                            <button className="login-nav-icon"><i class="fa-regular fa-heart "></i></button>
                            <button className="login-nav-icon"><i class="fa-solid fa-cart-shopping "></i></button>
                        </div>
                    </div>
                </div>
                <div className="loginpage">
                
                <div className="loginpage-background">
                    <img src={loginimg} alt="loginimg" className="loginimg" />
                </div>
                <div className="signpage-form">
                    <div className="signpage-header-box">
                        <h1 className="signuppage-header">Üzv Ol</h1>
                    </div>
                    <form action="" netlify>
                        <div className="signup-form-box" >
                            <label htmlFor="">Ad, Soyad</label>
                            <input type="text"  className="signpage-input"/>
                        </div>
                    </form>
                    <form action="" netlify>
                        <div className="signup-form-box">
                            <label htmlFor="">E-Poçt</label>
                            <input type="text"  className="signpage-input"/>
                        </div>
                    </form>
                    <form action="" netlify>
                        <div className="signup-form-box">
                            <label htmlFor="">Telefon nömrəsi</label>
                            <input type="text"  className="signpage-input"/>
                        </div>
                    </form>
                    <form action="" netlify>
                        <div className="signup-form-box">
                            <label htmlFor="">Şifrə</label>
                            <input type="text" placeholder="6+ simvol" className="signpage-input"/>
                        </div>
                    </form>
                    <div className="form-check">
                        <div className="formcheck-remember">
                            <form action="">
                                <input type="checkbox" />
                                <label htmlFor="" className="formcheck-txt">Bütün Üzvlük şərtləri ilə razılaşıram.</label>
                            </form>
                        </div>
                    </div>
                    <div className="loginbtns">
                        <button className="loginbtn-signuppage" type="submit">Üzv Ol</button>
                        <button className="signbtn">Daxil Ol</button>
                    </div>
                    <div className="googlebtn-box">

                        <button className="signup-googlebtn">
                            <img src={googleimg} alt="google logo" className="google-logo" />
                            Google ilə üzv ol
                        </button>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
}