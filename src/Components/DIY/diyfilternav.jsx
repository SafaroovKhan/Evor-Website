export default function DiyFilterNav () {
    return (
        <>
            <div className="decorfilternav">
                <div className="decorfilternav-container">
                    <div className="decorfilternav-search">
                        <form action="" className="decorfilter-form">
                            <input type="text" className="searchbar" />
                            <button className="searchbar-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                    <div className="decorfilternav-filters">
                        <button className="decorfilternav-btn">Şarlar</button>
                        <button className="decorfilternav-btn border-btn1">Güllər</button>
                        <button className="decorfilternav-btn ">Muncuqlar</button>
                        <button className="decorfilternav-btn border-btn2">Tüllər</button>
                        <button className="decorfilternav-btn border-btn3">Lələklər</button>
                        <button className="decorfilternav-btn">Balonlar</button>
                    </div>
                </div>
            </div>
        </>
    )
}