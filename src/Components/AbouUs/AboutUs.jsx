import { Link } from "react-router-dom";
import Footer from "../MainPage/Footer"
import aboutusbackground from "./aboutusimgs/aboutusbackground.png"
import aboutuspattern from "./aboutusimgs/aboutuspattern.png"
import memberimg01 from "./aboutusimgs/uss1croped.png"
import memberimg02 from "./aboutusimgs/uss2croped.png"
import memberimg03 from "./aboutusimgs/uss3croped.png"
import memberimg04 from "./aboutusimgs/uss4croped.png"
import memberimg05 from "./aboutusimgs/uss5croped.png"
import memberimg06 from "./aboutusimgs/uss6croped.png"

export default function AboutUs () {
    return(
        <>
            <div className="aboutus-header">
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
                <img src={aboutusbackground} alt="" className="aboutus-background" />
            </div>
            <div className="aboutus-contentsection">
                <div className="contentsection-container">
                    <img src={aboutuspattern} alt="" className="contentsection-pattern" />
                    <div className="whoweare">
                        <h1 className="whoweare-header">Biz Kimik?</h1>
                        <article className="whoweare-txt">Biz EVOR komandası olaraq bəzədilmə və dekorasiya ilə məşğul olan şirkətləri bir platformada birləşdiririk. EVOR platforması özəl günlərinizin başqa dekorasiya olmaqla təşkilati məsələləri həll etməyiniz üçün ehtiyyac qarşılayır.</article>
                    </div>
                    <div className="ouraim">
                        <h1 className="ouraim-header">Məqsədimiz</h1>
                        <article className="ouraim-txt">EVOR komandası olaraq bizim əsas məqsədimiz özəl günlərinizdə sizə unudulmaz hiss etdirərək xatirələrinizi gözəlləşdirməkdir. Sizlər üçün təmin etdiyimiz rahatlıq isə baxş etdiyimiz dəyərdir.</article>
                    </div>
                </div>
            </div>
            <div className="aboutus-team">
                <div className="aboutus-team-container">
                    <div className="aboutus-title-box">
                        <h1 className="aboutus-title">Komandamız</h1>
                    </div>
                    <div className="team-container">
                        <div className="teamrow">
                            <div className="teamimg-box img-straight">
                                <img src={memberimg01} alt="" className="teamimg " />
                            </div>
                            <div className="teamcontent-box teambox1">
                                <h1 className="teamcontent-header">Zəhra İsmayılova</h1>
                                <article className="teamcontent-txt">İcraçl Direktor (CEO)</article>
                            </div>
                        </div>
                        <div className="teamrow-reverse">
                            <div className="teamcontent-box teambox2">
                                <h1 className="teamcontent-header">Musabəy Babayev</h1>
                                <article className="teamcontent-txt">Baş Marketing Meneceri (CMO)</article>
                            </div>
                            <div className="teamimg-box img-reverse-large">
                                <img src={memberimg02} alt="" className="teamimg teamimg-large" />
                            </div>
                        </div>
                        <div className="teamrow">
                            <div className="teamimg-box  img-straight">
                                <img src={memberimg03} alt="" className="teamimg" />
                            </div>
                            <div className="teamcontent-box teambox3">
                                <h1 className="teamcontent-header">Fərqanə Ağayeva</h1>
                                <article className="teamcontent-txt">İnsan Resursları üzrə Menecer (HR)</article>
                            </div>
                        </div>
                        <div className="teamrow-reverse">
                            <div className="teamcontent-box teambox4">
                                <h1 className="teamcontent-header">Elgün Nağılı</h1>
                                <article className="teamcontent-txt">İctimai Əlaqələr üzrə mütəxəssis (PR)</article>
                            </div>
                            <div className="teamimg-box img-reverse">
                                <img src={memberimg04} alt="" className="teamimg " />
                            </div>
                        </div>
                        <div className="teamrow">
                            <div className="teamimg-box img-straight">
                                <img src={memberimg05} alt="" className="teamimg" />
                            </div>
                            <div className="teamcontent-box teambox5">
                                <h1 className="teamcontent-header">Aydan Saqiyeva</h1>
                                <article className="teamcontent-txt ">Dizayner (UI/UX)</article>
                            </div>
                        </div>
                        <div className="teamrow-reverse">
                            <div className="teamcontent-box teambox6">
                                <h1 className="teamcontent-header ">Rafiq Səfərov</h1>
                                <article className="teamcontent-txt">Veb Developer (FullStack)</article>
                            </div>
                            <div className="teamimg-box img-reverse">
                                <img src={memberimg06} alt="" className="teamimg " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}