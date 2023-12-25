// CategoryContext.jsx
import React, { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleCategoryClick = ({ category, subCategory }) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
    setSelectedSubCategory((prevSubCategory) =>
      prevSubCategory === subCategory ? null : subCategory
    );
  };

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, selectedSubCategory, handleCategoryClick }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
