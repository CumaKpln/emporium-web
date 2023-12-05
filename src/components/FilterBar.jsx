const brands = ["Volkwagen", "Opel", "Séat", "Renault"];

function BrandSection({ brands }) {
    return <div>
        {brands.map((b) => (<div>{b}</div>))}
    </div>
}

function FilterBar() {
    return <div>
        <BrandSection brands={brands} />
    </div >
}

export default FilterBar;