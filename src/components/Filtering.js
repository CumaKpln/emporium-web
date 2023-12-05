export const filters =
{
    nameFilter: "",
    minPrice: "",
    maxPrice: "",
    provinceFilter: "",
    districtFilter: "",
    brands: [],
    FilterByName({ name }) {
        if (this.nameFilter === null || this.nameFilter === "") return true;
        else return name.contains(this.nameFilter);
    },
    FilterByPrice({ price }) {
        if (isNaN(this.minPrice) || isNaN(this.maxPrice)) return true; // Control null condition.
        else return parseInt(this.minPrice) < price && parseInt(this.maxPrice) > price;
    },
    FilterByProvince({ province }) {
        if (this.provinceFilter === "") return true;
        else return province === this.provinceFilter;
    },
    FilterByDistrict({ district }) {
        if (this.districtFilter === "") return true;
        else return district === this.districtFilter;
    },
    FilterByBrand({ brand }) {
        if (this.brands.length === 0) return true;
        else return this.brands.contains(brand);
    }
}