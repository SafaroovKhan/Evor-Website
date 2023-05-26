import { Link } from "react-router-dom";
import Footer from "../MainPage/Footer"
import googleimg from "./images/googlelogo.png"
import loginimg from "./images/loginbackground.png"

export default function LoginPage () {
    return (
        <>
                <div className="login-navbar">
                    <div className="login-navbar-container">
                        <div className="login-nav-btns">
                            <button className="login-nav-btn"><Link to={"/"} className="navlink" target="_blank">Ana Səhifə</Link></button>
                            <button className="login-nav-btn"><Link to={"/haqqımızda"} className="navlink" target="_blank">Haqqımızda</Link></button>
                            <button className="login-nav-btn"><Link to={"/xidmətlərimiz"} className="navlink" target="_blank">Xidmətlər</Link></button>
                            <button className="login-nav-btn"><Link to={"/"} className="navlink" target="_blank">Bloq</Link></button>
                            <button className="login-nav-btn"><Link to={"/"} className="navlink" target="_blank">Əlaqə</Link></button>
                        </div>
                        <div className="login-nav-icons">
                            <button className="login-nav-icon"><i class="fa-regular fa-user  "></i></button>
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
                    <form action="">
                        <div className="loginpage-form-box">
                            <i className="fa-solid fa-user formicon"></i>
                            <input type="text" placeholder="İstifadəçi Adı" className="loginpage-input"/>
                        </div>
                    </form>
                    <form action="">
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