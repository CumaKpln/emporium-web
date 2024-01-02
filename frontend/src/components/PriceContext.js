import React, { createContext, useContext, useState } from "react";

const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Number.MAX_VALUE);

    const handlePriceClick = ({ minPrice, maxPrice }) => {
        setMinPrice((prevMinPrice) =>
            prevMinPrice === minPrice ? 0 : minPrice
        );
        setMaxPrice((prevMaxPrice) =>
            prevMaxPrice === maxPrice ? Number.MAX_VALUE : maxPrice
        );
    };
    return (
        <PriceContext.Provider
            value={{ minPrice, maxPrice, handlePriceClick }}
        >
            {children}
        </PriceContext.Provider>
    );
};

export const usePrice = () => {
    const context = useContext(PriceContext);
    if (!context) {
        throw new Error("usePrice must be used within a PriceProvider");
    }
    return context;
}