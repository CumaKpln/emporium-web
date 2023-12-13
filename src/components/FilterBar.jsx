import { filter } from "./Filtering";
import React from "react";
const brands = ["Volkswagen", "Opel", "Séat", "Renault"];
const provinces = ["Ankara", "Antalya", "İstanbul", "İzmir", "Aydın", "Mardin", "Diyarbakır", "Yozgat", "Erzurum"];
function NameSection() {
    return <div key={"name"}>
        <input type="text" onInput={(e) => { filter.filterByName(e.target.value); }} />
    </div>

}
function BrandSection({ brands }) {
    return <div key={"brands"}>
        {brands.map((b) => (<div key={b}><input type="checkbox" onInput={(e) => {
            if (filter.state.brands.includes(b)) {
                const temp = [];
                filter.state.brands.forEach((brand) => {
                    if (brand !== b) {
                        temp.push(brand);
                    }
                });
                filter.state.brands = temp;
            }
            else {
                filter.state.brands.push(b);
            }
            console.log(filter.state.brands);
        }} />{b}</div>))}
    </div>
}
function PriceSection() {
    return <div key={"price"}>
        Min Price  {filter.state.minPrice}
        <input key={"minp"} type="number" onInput={(e) => { filter.filterByPrice(e.target.value, filter.state.maxPrice); e.target.value = filter.state.minPrice; }} />
        Max Price  {filter.state.maxPrice}
        <input key={"maxp"} type="number" onInput={(e) => { filter.filterByPrice(filter.state.minPrice, e.target.value); e.target.value = filter.state.maxPrice; }} />
    </div>
}
function ProvinceSection() {
    return <div key={"province"}>
        Province
        <input list="province" />
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