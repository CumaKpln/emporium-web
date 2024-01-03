import React, { createContext, useContext, useState } from "react";

const ProvinceContext = createContext();

export const ProvinceProvider = ({ children }) => {
    const [selectedProvince, setSelectedProvince] = useState(null);

    const handleProvinceClick = ({ province }) => {
        setSelectedProvince((prevProvince) =>
            prevProvince === province ? null : province
        );
    };

    return (
        <ProvinceContext.Provider
            value={{ selectedProvince, handleProvinceClick }}
        >
            {children}
        </ProvinceContext.Provider>
    );
};

export const useProvince = () => {
    const context = useContext(ProvinceContext);
    if (!context) {
        throw new Error("useProvince must be used within a ProvinceProvider");
    }
    return context;
};