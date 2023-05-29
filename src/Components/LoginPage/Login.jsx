import { useState } from "react";
import { Link } from "react-router-dom";
import LoginCard from "../LoginCard";
import Footer from "../MainPage/Footer"
import googleimg from "./images/googlelogo.png"
import loginimg from "./images/loginbackground.png"

export default function LoginPage () {
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
                <div className="loginpage-form">
                    <h1 className="loginpage-header">Daxil Ol</h1>
                    <form action="" netlify>
                        <div className="loginpage-form-box">
                            <i className="fa-solid fa-user formicon"></i>
                            <input type="text" placeholder="İstifadəçi Adı" className="loginpage-input"/>
                        </div>
                    </form>
                    <form action="" netlify>
                        <div className="loginpage-form-box">
                            <i className="fa-solid fa-lock formicon"></i>
                            <input type="text" placeholder="Şifrə" className="loginpage-input"/>
                        </div>
                    </form>
                    <div className="form-check">
                        <div className="formcheck-remember">
                            <form action="">
                                <input type="checkbox" />
                                <label htmlFor="" className="formcheck-txt">Yadda Saxla</label>
                            </form>
                        </div>
                        <div className="formcheck-forgot">
                            <button className="forgot-btn">Şifrəmi Unutdum ?</button>
                        </div>
                    </div>
                    <div className="loginbtns">
                        <button className="loginbtn">Daxil Ol</button>
                        <button className="signbtn">Üzv Ol</button>
                    </div>
                    <div className="googlebtn-box">

                        <button className="googlebtn">
                            <img src={googleimg} alt="google logo" className="google-logo" />
                            Google ilə daxil ol
                        </button>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
}