import "./detay.css";

function Detay() {
  return (
    <>
      {" "}
      <h4 className="fiyat">fiyat:</h4>
      <ul className="detay">
        <div>il/ilçe/mahalle</div>
        <hr />
        <li className="li d-flex gap-2">
          İlan No : <div>djkfbas</div>
        </li>
        <li className="li d-flex gap-2">İlan Tarihi :</li>
        <li className="li d-flex gap-2">Ürün Adı : </li>
        <li className="li d-flex gap-2">Kategori : </li>
        <li className="li d-flex gap-2">Marka :</li>
        <li className="li d-flex gap-2">Ürün Adresi :</li>
      </ul>
    </>
  );
}

export default Detay;
