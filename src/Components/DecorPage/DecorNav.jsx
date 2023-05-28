import img08 from "../MainPage/assets/Evorlogo2.png"



function DecorNav () {
    return (
        <>
            <div className="decornav">
                <div className="decornav-container">
                    <div className="decornav-logo">
                        <img src={img08} alt="Evor Logo" className="navimg" />
                    </div>
                    <div className="decornav-text">
                        <h1 className="decornav-brand">Dekorlar</h1>
                    </div>
                    <div className="decornav-btns">
                        <button className="decornav-btn">
                            Özün Dizayn Et
                        </button>
                        <button className="decornav-icon"> <i class="fa-regular fa-user  navicon"></i></button>
                        <button className="decornav-icon"> <i class="fa-regular fa-heart navicon"></i></button>
                        <button className="decornav-icon"> <i class="fa-solid fa-cart-shopping navicon"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DecorNav;