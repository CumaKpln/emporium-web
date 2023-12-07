import { filter } from "./Filtering";
const brands = ["Volkswagen", "Opel", "Séat", "Renault"];
function BrandSection({ brands }) {
    return <div key={"brands"}>
        {brands.map((b) => (<div key={b}><input type="checkbox" onInput={(e) => {
            if (filter.brands.includes(b)) {
                const temp = [];
                filter.brands.forEach((brand) => {
                    if (brand !== b) {
                        temp.push(brand);
                    }
                });
                filter.brands = temp;
            }
            else {
                filter.brands.push(b);
            }
            console.log(filter.brands);
        }} />{b}</div>))}
    </div>
}
function PriceSection() {
    return <div key={"price"}>
        Min Price  {filter.minPrice}
        <input key={"minp"} type="number" value={filter.minPrice} min={0} onInput={(e) => { filter.filterByPrice(Math.min(e.target.value, filter.maxPrice).toString(), filter.maxPrice); }} />
        Max Price  {filter.maxPrice}
        <input key={"maxp"} type="number" value={filter.maxPrice} min={0} onInput={(e) => { filter.filterByPrice(filter.minPrice, Math.max(e.target.value, filter.minPrice).toString()); }} />
    </div>
}
function FilterBar() {
    return <div>
        <BrandSection key={"a"} brands={brands} />
        <PriceSection key={"b"} />
    </div >
}
export default FilterBar;