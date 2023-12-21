import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import data from "../data/db.json";
import "../Styles/Product.css";
import { Link } from "react-router-dom";
import { selectProduct } from "../control/slices/productSlice"; // Redux reducer'ınızdan gelen action

const brands = ["Volkswagen", "Opel", "Séat", "Renault", "BMW", "Regal Raptor"];
const provinces = ["Ankara", "Antalya", "İstanbul", "İzmir", "Aydın", "Mardin", "Diyarbakır", "Yozgat", "Erzurum"];

function Products() {
  const [MinP, setMinP] = useState(0);
  const [MaxP, setMaxP] = useState(1000000000);
  const [NameF, setNameF] = useState("");
  const [BrandF, setBrandF] = useState([]);
  const [ProvinceF, setProvinceF] = useState("");
  const [DistrictF, setDistrictF] = useState("");

  function NameSection() {
    return <input id="nameInput" type="text" value={NameF} onChange={(e) => { setNameF(e.target.value); }} onFocus={() => {
      console.log("focus");
    }} />

  }

  function BrandSection() {
    return <div key={"brands"}>
      {brands.map((b) => (<div key={b}><input type="checkbox" onChange={(e) => {
        if (BrandF.includes(b)) {
          const temp = [];
          BrandF.forEach((brand) => {
            if (brand !== b) {
              temp.push(brand);
            }
          });
          setBrandF(temp);
        }
        else {
          setBrandF([...BrandF, b]);
        }
      }} />{b}</div>))}
    </div>
  }

  function PriceSection() {
    return <div key={"price"}>
      <input key="minp" type="number" onChange={(e) => (setMinP(parseInt(e.target.value)))} />
      <input key="maxp" type="number" onChange={(e) => (setMaxP(parseInt(e.target.value)))} />
    </div>
  }

  function ProvinceSection() {
    return <div key={"province"}>
      <select key="province" onChange={(e) => (setProvinceF(e.target.value))}>
        {provinces.map((p) => (<option key={p} value={p}>{p}</option>))}
      </select>
    </div>
  }

  function FilterBar({ category = "" }) {
    return <div className="filter-bar">
      <NameSection />
      <BrandSection />
      <PriceSection />
      <ProvinceSection />
    </div>
  }

  function FilterProduct(product) {
    if (NameF !== "" && !product.title.toLowerCase().includes(NameF.toLowerCase())) return false;
    if (product.price < MinP || product.price > MaxP) return false;
    if (ProvinceF !== "" && product.province !== ProvinceF) return false;
    if (DistrictF !== "" && product.district !== DistrictF) return false;
    if (BrandF.length !== 0 && !BrandF.includes(product.brand)) return false;
    return true;
  }

  const dispatch = useDispatch();

  const selectedProduct = (product) => { // Redux store'a seçilen ürünü gönderme
    dispatch(selectProduct(product));
  };



  return (
    <div className="products" >
      {data["ilan-ver"].filter((p) => FilterProduct(p)).map((product, id) => (
        <div className="img p-3" key={id} style={{ cursor: "pointer" }}>
          <Link to={`/urun-detayi/${id}`} onClick={() => selectedProduct(product)}>
            <img src={product.selectedFiles[0].url} alt="foto" />
            <p className="title" style={{ flex: "1" }}>{product.title}</p>
          </Link>
        </div>
      )
      )}
      <FilterBar />
    </div>
  );

}
export default Products;

