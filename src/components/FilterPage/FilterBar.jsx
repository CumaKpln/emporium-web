import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
const brands = ["Volkswagen", "Opel", "Séat", "Renault"];
const provinces = ["Ankara", "Antalya", "İstanbul", "İzmir", "Aydın", "Mardin", "Diyarbakır", "Yozgat", "Erzurum"];



let minP = 0, maxP = 1000000000, nameF = "", brandF = [], provinceF = "", districtF = "";

function NameSection() {
    const [name, setName] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
        nameF = name;
    };

    return <div key={"name"} id="name">
        {name}
        <input type="text" onChange={handleNameChange} />
    </div>

}
function BrandSection({ brands }) {
    const [brand, setBrand] = useState([]);
    return <div key={"brands"}>
        {brands.map((b) => (<div key={b}><input type="checkbox" onChange={(e) => {
            if (brand.includes(b)) {
                const temp = [];
                brand.forEach((brand) => {
                    if (brand !== b) {
                        temp.push(brand);
                    }
                });
                setBrand(temp);
            }
            else {
                setBrand([...brand, b]);
            }
        }} />{b}</div>))}
    </div>
}
function PriceSection() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1);
    return <div key={"price"}>
        <input key="minp" type="number" onChange={(e) => (setMinPrice(parseInt(e.target.value)), minP = minPrice)} />
        <input key="maxp" type="number" onChange={(e) => (setMaxPrice(parseInt(e.target.value)), maxP = maxPrice)} />
    </div>
}
function ProvinceSection() {
    const [province, setProvince] = useState("");
    return <div>
        <input key={"province"} list="province" onChange={(e) => { setProvince(e.target.value); provinceF = province }} />
        <datalist id="province">
            {provinces.map((p) => (<option value={p} />))}
        </datalist>

    </div>
}
function FilterBar({ category = "" }) {
    return <div>
        <NameSection key={"n"} />
        <ProvinceSection />
        {((category.toString().toLowerCase() === "car" || category.toString().toLowerCase() === "electronics") && <BrandSection key={"a"} brands={brands} />)}
        <PriceSection key={"b"} />
    </div >
}
export default FilterBar;

export let filters =
{
    minP, maxP, nameF, brandF, provinceF, districtF
};