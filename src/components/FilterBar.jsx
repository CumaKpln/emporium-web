import { filters } from "./Filtering";
const brands = ["Volkwagen", "Opel", "Séat", "Renault"];
function BrandSection({ brands }) {
    return <div>
        {brands.map((b) => (<div><input type="checkbox" onInput={(e) => {
            if (filters.brands.includes(b)) {
                const temp = [];
                filters.brands.forEach((brand) => {
                    if (brand !== b) {
                        temp.push(brand);
                    }
                });
                filters.brands = temp;
            }
            else {
                filters.brands.push(b);
            }
        }} />{b}</div>))}
    </div>
}
function FilterBar() {
    return <div>
        <BrandSection brands={brands} />
    </div >
}
export default FilterBar;