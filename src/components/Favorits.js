import { useSelector } from "react-redux";


function Favorits() {
    const { quantity } = useSelector((store) => store.Favorits);

    return (
        <>

            <div className="card" style={{ width: "18rem", marginTop: "50px" }} >
                {/* data.selectedFiles[0].url'yi kullanmak yerine product veya ilgili veriye erişim yapılmalı */}
                <img src="" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                    <a href="#/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default Favorits;

