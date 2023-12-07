import React, { useState } from "react";

class Filtering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameFilter: "",
            minPrice: 0,
            maxPrice: 1,
            provinceFilter: "",
            districtFilter: "",
            brands: [],
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
            this.state.brands = temp;
        }
        else {
            this.state.brands.push(brand);
        }
    }
    render() {
        return this.state;
    }
}

export const filter = new Filtering();