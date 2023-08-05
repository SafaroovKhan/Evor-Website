import Searchbar from "../Elements/Searchbar"


export default function DecorFilterNav () {
    return (
        <>
            <div className="decorfilternav">
                <div className="decorfilternav-container">
                    <Searchbar/>
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