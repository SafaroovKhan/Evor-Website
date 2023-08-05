import { useEffect } from "react";



function Footer () {

    useEffect(() => {
        const handleLineScroll = () => {
            const scrollFooterLineY = window.scrollY;
            if (scrollFooterLineY > 900) {
                document.querySelector(".footer-lines").classList.add("footer-line-animation")
            } else {
                document.querySelector(".footer-lines").classList.remove("footer-line-animation")
            }
          };
      
          window.addEventListener("scroll", handleLineScroll);
      
          // Clean up the event listener when the component unmounts
          return () => {
            window.removeEventListener("scroll", handleLineScroll);
          };
      }, [])

    return (
        <>
            <div className="footer-section">
                <div className="footer-lines">
                    <div className="footer-line1"></div>
                    <div className="footer-line2"></div>
                </div>
                <div className="footer-container">
                    <div className="footer-contact">
                        <div className="footer-contact-container">
                            <h1 className="contact-header">Əlaqə</h1>
                            <button className="contact-btn">
                                <i class="fa-solid fa-phone contact-icon"></i>
                                <a href="" className="contact-link">
                                    (+994)70-860-69-89
                                </a>
                            </button>
                            <button className="contact-btn">
                                <i class="fa-solid fa-envelope contact-icon"></i>
                                <a href="" className="contact-link">
                                    info@evor.az
                                </a>
                            </button>
                            <a href="" className="contact-social"><i class="fa-brands fa-instagram"></i> Evor.az</a>
                            <a href="" className="contact-social"><i class="fa-brands fa-facebook"></i> Evor.az</a>
                        </div>
                    </div>
                    <div className="footer-pages">
                        <div className="footer-pages-container">
                            <h1 className="pages-header">Səhifələr</h1>
                            <div className="pages-links">
                                <a href="" className="page-link">Ana Səhifə</a>
                                <a href="" className="page-link">Dekorlar</a>
                                <a href="" className="page-link">Ləvazimatlar</a>
                                <a href="" className="page-link">Haqqında</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-campains">
                        <div className="footer-campains-container">
                            <h1 className="campains-header">Kampaniyalar</h1>
                        </div>
                    </div>
                    <div className="footer-help">
                        <div className="footer-help-container">
                            <h1 className="help-header">Yardım</h1>
                            <div className="help-links">
                                <a href="" className="help-link">Ən Çox Verilən Suallar</a>
                                <a href="" className="help-link">Canlı Əlaqə</a>
                                <a href="" className="help-link">Sifarişi Ləğv Etmək</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;