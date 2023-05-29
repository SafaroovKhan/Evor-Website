import { useState } from "react";
import PriceSlider from "../DecorPage/PriceSlider";



export default function DiyFilterCard () {

    const [showFilterCard, setShowFilterCard] = useState(true);
  
    const handleShowFilterCard = () => {
        setShowFilterCard(!showFilterCard)
    }



    return (
        <>
        {showFilterCard && (
            <div className="decorfiltercard">
            <div className="decorfiltercard-container">
                <div className="filtercard-btn-box">
                    <button className="filtercard-btn" onClick={handleShowFilterCard}>Filterlə</button>
                </div>
                <div className="filtercard-firstsection">
                    <div className="filterbox">
                        <input type="checkbox" />
                        <label htmlFor="">Açıq Hava</label>
                    </div>
                    <div className="filterbox">
                        <input type="checkbox" />
                        <label htmlFor="">Qapalı Hava</label>
                    </div>
                    <div className="filterbox-large">
                        <div className="filterbox">
                            <input type="checkbox" />
                            <label htmlFor="">Dəniz Kənarı</label>
                        </div>
                        <div className="filterbox-alt">
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Ev</label>
                            </div>
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Restoran</label>
                            </div>
                        </div>
                    </div>
                    <div className="filterbox">
                        <input type="checkbox" />
                        <label htmlFor="">Yaşıllıq</label>
                    </div>
                </div>
                <div className="filtercard-secondsection">
                    <div className="filterbox">
                        <input type="checkbox" />
                        <label htmlFor="">Rəng</label>
                    </div>
                    <div className="filtercard-colors">
                        <button className="filtercard-color white"></button>
                        <button className="filtercard-color black"></button>
                        <button className="filtercard-color light-blue"></button>
                        <button className="filtercard-color yellow"></button>
                        <button className="filtercard-color red"></button>
                        <button className="filtercard-color green"></button>
                        <button className="filtercard-color purple"></button>
                        <button className="filtercard-color pink"></button>
                        <button className="filtercard-color orange"></button>
                        <button className="filtercard-color blue"></button>
                        <button className="filtercard-color brown"></button>
                        <button className="filtercard-color gold"></button>
                        <button className="filtercard-color silver"></button>
                        <button className="filtercard-color gray"></button>
                    </div>
                </div>
                <div className="filtercard-thirdsection">
                        <h1 className="thirdsection-header">Istifadə olunan materiallar</h1>
                        <div className="thirdsection-container">
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Şar</label>
                            </div>
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Tül</label>
                            </div>
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Şam</label>
                            </div>
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Şamdan</label>
                            </div>
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">İşıq</label>
                            </div>
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Tumba şüşə</label>
                            </div>
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Dəmir tumba</label>
                            </div>
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Plastmas tumba</label>
                            </div>
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Plastmas hərflər</label>
                            </div>
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">İşıq hərflər</label>
                            </div>
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Xalı</label>
                            </div>
                            <div className="filterbox-large">      
                                <div className="filterbox">
                                    <input type="checkbox" />
                                    <label htmlFor="">Pərdəlik</label>
                                </div>
                                <div className="filterbox-alt">
                                    <div className="filterbox">
                                        <input type="checkbox" />
                                        <label htmlFor="">Parıltılı</label>
                                    </div>
                                    <div className="filterbox">
                                        <input type="checkbox" />
                                        <label htmlFor="">Mat</label>
                                    </div>
                                </div>
                            </div>
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Çiçək</label>
                            </div>
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Çələng</label>
                            </div>
                        </div>
                    </div>
                    <div className="filtercard-forthsection">
                        <div className="filterbox-large">
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Arka</label>
                            </div>
                            <div className="filterbox-alt-large">
                                <div className="filterbox">
                                    <input type="checkbox" />
                                    <label htmlFor="">Taxta arka</label>
                                </div>
                                <div className="filterbox">
                                    <input type="checkbox" />
                                    <label htmlFor="">Plastmas arka</label>
                                </div>
                                <div className="filterbox">
                                    <input type="checkbox" />
                                    <label htmlFor="">Görünməz arka</label>
                                </div>
                            </div>
                        </div>
                        <div className="filterbox-large">
                            <div className="filterbox">
                                <input type="checkbox" />
                                <label htmlFor="">Arka formaları</label>
                            </div>
                            <div className="filterbox-alt-large">
                                <div className="filterbox">
                                    <input type="checkbox" />
                                    <label htmlFor="">Kvadrat</label>
                                </div>
                                <div className="filterbox">
                                    <input type="checkbox" />
                                    <label htmlFor="">Dairə</label>
                                </div>
                                <div className="filterbox">
                                    <input type="checkbox" />
                                    <label htmlFor="">Yarım Dairə</label>
                                </div>
                                <div className="filterbox">
                                    <input type="checkbox" />
                                    <label htmlFor="">Düzbucaqlı</label>
                                </div>
                                <div className="filterbox">
                                    <input type="checkbox" />
                                    <label htmlFor="">Altı bucaqlı</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filtercard-fifthsection">
                       <h1 className="fitercard-header">Qiymət</h1>
                       <PriceSlider/>
                    </div>
            </div>
        </div>
        )}
            
        </>
    );
}