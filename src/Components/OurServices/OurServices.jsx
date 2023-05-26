import Navbar from "../MainPage/Navbar"
import Footer from "../MainPage/Footer"
import rowimg01 from "./servicesimg/XİDMET1croped.png"
import rowimg02 from "./servicesimg/XİDMET2croped.png"
import rowimg03 from "./servicesimg/XİDMET3croped.png"
import rowimg04 from "./servicesimg/XİDMET4croped.png"

export default function OurServices () {
    return (
        <>
            <Navbar/>
            <div className="ourservices-header">
                <div className="ourservices-header-container">
                    <div className="ourservices-header-title-box">
                        <h1 className="ourservices-header-title">Xidmətlər nədir?</h1>
                    </div>
                    <div className="ourservices-header-text-box">
                        <article className="ourservices-header-text">
                            Özəl günlərinizi təşkil edərkən ehtiyca duyduğunuz dəstəkləri Xidmətlərimiz vasitəsilə rahatlıqla əldə edə bilərsiniz. Xidmətlərimiz sizin üçün restoran rezervasiyası, fotoqraf, qida və içki təminatı kimi müxtəlif proseslərin həyata keçirilməsini sürətləndirir və asanlaşdırır. Bu üstünlüklədən faydalanmaq üçün ehtiyacınıza uyğun xanaya klikləyib müxtəlif seçimlərə nəzər yetirə bilərsiniz! 
                        </article>
                    </div>
                </div>
            </div>
            <div className="ourservices">
                <div className="ourservice-row">
                    <div className="row-img">
                        <img src={rowimg01} alt="row img"  className="rowimg"/>
                    </div>
                    <div className="row-contet">
                        <h1 className="row-header">Restoranlar</h1>
                        <article className="row-txt">Tələbatınıza uyğun, möhtəşəm restoranlar tapmaq üçün Restoranlar xidmətimizdən istifadə edin! Burada müxtəlif kateqoriyalar uyğun restoranların görünüşü, menyusu, oturacaq sayı və qiyməti yerləşdirilmişdir.</article>
                    </div>
                </div>
                <div className="ourservice-row-reverse">
                    <div className="row-contet">
                        <h1 className="row-header">Fotoqrafiya</h1>
                        <article className="row-txt">Özəl günlərinizi unudulmaz etmək üçün Fotoqraf xidmətimizdən faydalanın! Buradan müxtəlif foroqraflar haqqında ətraflı məlumatları əldə edə bilər və birbaşa əlaqə yarada bilərsiniz.</article>
                    </div>
                    <div className="row-img">
                        <img src={rowimg02} alt="row img" className="rowimg" />
                    </div>
                </div>
                <div className="ourservice-row">
                    <div className="row-img">
                        <img src={rowimg03} alt="row img"  className="rowimg"/>
                    </div>
                    <div className="row-contet">
                        <h1 className="row-header">Qida və İçki</h1>
                        <article className="row-txt">Əvəzolumaz dadlar kəşf etmək üçün ketring şirkətləri ilə tanış olun! Burada müxtəlif ketring şirkətlərini tanıya və yeməklər sifariş edə bilərsiniz.</article>
                    </div>
                </div>
                <div className="ourservice-row-reverse">
                    <div className="row-contet">
                        <h1 className="row-header">Dost</h1>
                        <article className="row-txt">Dost Xidməti çətin günlərinizdə sizə dəstək olcaq insanlar yönləndirilməsini təmin edir.</article>
                    </div>
                    <div className="row-img">
                        <img src={rowimg04} alt="row img" className="rowimg" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}