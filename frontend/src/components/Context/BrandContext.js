import React, { createContext, useContext, useState } from "react";

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
    const [selectedBrand, setSelectedBrand] = useState([]);

    const handleBrandClick = ({ brand }) => {
        if (selectedBrand.includes(brand)) {
            setSelectedBrand(selectedBrand.filter((item) => item !== brand));
        }
        else {
            setSelectedBrand([...selectedBrand, brand]);
        }
    };

    return (
        <BrandContext.Provider
            value={{ selectedBrand, handleBrandClick }}
        >
            {children}
        </BrandContext.Provider>
    );
};

export const useBrand = () => {
    const context = useContext(BrandContext);
    if (!context) {
        throw new Error("useBrand must be used within a BrandProvider");
    }
    return context;
}