import React, { createContext, useContext, useState } from "react";

const DistrictContext = createContext();

export const DistrictProvider = ({ children }) => {
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    const handleDistrictClick = ({ district }) => {
        setSelectedDistrict((prevDistrict) =>
            prevDistrict === district ? null : district
        );
    };

    return (
        <DistrictContext.Provider
            value={{ selectedDistrict, handleDistrictClick }}
        >
            {children}
        </DistrictContext.Provider>
    );
};

export const useDistrict = () => {
    const context = useContext(DistrictContext);
    if (!context) {
        throw new Error("useDistrict must be used within a DistrictProvider");
    }
    return context;
};