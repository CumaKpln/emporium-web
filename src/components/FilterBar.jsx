import { filter } from "./Filtering";
const brands = ["Volkswagen", "Opel", "Séat", "Renault"];

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
function FilterBar() {
    return <div>
        <BrandSection key={"a"} brands={brands} />
        <PriceSection key={"b"} />
    </div >
}
export default FilterBar;