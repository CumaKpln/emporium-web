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
        this.setState({ nameFilter: name });
    }
    filterByPrice(minPrice, maxPrice) {
        this.state.minPrice = minPrice;
        this.state.maxPrice = maxPrice;

        console.log("min" + this.state.minPrice);
        console.log("max" + this.state.maxPrice);
    }
    filterByProvince(province) {
        this.setState({ provinceFilter: province });
    }
    filterByDistrict(district) {
        this.setState({ districtFilter: district });
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