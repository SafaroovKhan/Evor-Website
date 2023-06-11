import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from "../MainPage/Footer"
import googleimg from "./images/googlelogo.png"
import loginimg from "./images/loginbackground.png"
import LoginCard from "../LoginCard"
export default function SignUp () {

    const [showLoginCard, setShowLoginCard] = useState(false); 

    const handleLoginCard = () => {
        setShowLoginCard(!showLoginCard);
    }

    const {register, handleSubmit, formState: {errors}} = useForm();
    console.log(errors);

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
                                <button className="login-nav-icon" onClick={handleLoginCard}><i className="fa-regular fa-user  "></i></button>
                                {showLoginCard && <LoginCard/>}
                            </div>
                            <button className="login-nav-icon"><i className="fa-regular fa-heart "></i></button>
                            <button className="login-nav-icon"><i className="fa-solid fa-cart-shopping "></i></button>
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
                    <form  className="signup-form-box"  onSubmit={handleSubmit((data) => {
                        console.log(data);
                    })}>
                            <label htmlFor="">Ad, Soyad</label>
                            <input {...register( "full name", {required: "fill this gap"})} type="text"  className="signpage-input"/>
                            <label htmlFor="">E-Poçt</label>
                            <input {...register( "Email", {required: "fill this gap"})} type="text"  className="signpage-input"/>
                            <label htmlFor="">Telefon nömrəsi</label>
                            <input {...register( "phone number", {required: "fill this gap"})} type="text"  className="signpage-input"/>
                            <label htmlFor="">Şifrə</label>
                            <input {...register( "password", {required: "fill this gap", minLength: {value: 8, message: "Min length is 8"}})}  type="text" placeholder="8+ simvol" className="signpage-input"/>
                            <div className="formcheck-remember">
                                <input {...register( "checkbox", {required: "check this box"})} type="checkbox"  />
                                <label  className="formcheck-txt">Bütün Üzvlük şərtləri ilə razılaşıram.</label>
                            </div>
                            <div className="loginbtns">
                                <button className="loginbtn-signuppage" onClick={handleSubmit} >Üzv Ol</button>
                                <button className="signbtn">Daxil Ol</button>
                            </div>
                    </form>
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