export const filters =
{
    nameFilter: "",
    minPrice: "",
    maxPrice: "",
    FilterByName({ name }) {
        if (this.nameFilter === null || this.nameFilter === "") return true;
        else return name.contains(this.nameFilter);
    },
    FilterByPrice({ price }) {
        if (isNaN(this.minPrice) || isNaN(this.maxPrice)) return true;
        else return parseInt(this.minPrice) < price && parseInt(this.maxPrice) > price;
    }
}