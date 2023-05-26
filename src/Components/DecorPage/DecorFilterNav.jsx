export default function DecorFilterNav () {
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
                        <button className="decorfilternav-btn">Toy</button>
                        <button className="decorfilternav-btn border-btn1">Doğum Günü</button>
                        <button className="decorfilternav-btn ">Nişan</button>
                        <button className="decorfilternav-btn border-btn2">Uşaq</button>
                        <button className="decorfilternav-btn border-btn3">Xına</button>
                        <button className="decorfilternav-btn">BabyShower</button>
                    </div>
                </div>
            </div>
        </>
    )
}