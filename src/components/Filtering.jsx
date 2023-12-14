import React, { useState } from "react";


class Filtering {
    constructor(props) {
        this.state = {
            nameFilter: "",
            minPrice: 0,
            maxPrice: 1,
            provinceFilter: "",
            districtFilter: "",
            brands: [],
            isMounted: false
        };
    }
    filterByName(name) {
        this.state.nameFilter = name;
    }
    filterByPrice(minPrice, maxPrice) {
        this.state.minPrice = minPrice;
        this.state.maxPrice = maxPrice;

    }
    filterByProvince(province) {
        this.state.provinceFilter = province;
    }
    filterByDistrict(district) {
        this.state.districtFilter = district;
    }
    filterByBrand(brand) {
        if (this.state.brands.includes(brand)) {
            const temp = [];
            this.state.brands.forEach((b) => {
                if (b !== brand) {
                    temp.push(b);
                }
            });
            this.setState({ brands: temp });
        }
        else {
            this.state.brands.push(brand);
        }
    }
    getState() {
        return this.state;
    }
    render() {
        return null;
    }
}
const filter = new Filtering();
export default filter;