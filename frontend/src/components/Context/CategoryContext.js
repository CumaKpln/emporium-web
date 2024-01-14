// CategoryContext.js
import React, { createContext, useState, useCallback, useEffect } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleCategoryClick = useCallback(
    ({ category, subCategory }) => {
      setSelectedCategory(category);
      setSelectedSubCategory(subCategory);
    },
    []
  );

  const resetCategories = useCallback(() => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
  }, []);

  const contextValue = {
    selectedCategory,
    selectedSubCategory,
    handleCategoryClick,
  };

  useEffect(() => {
    resetCategories();
  }, [resetCategories]);

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => {
  const context = React.useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};

export { CategoryProvider, useCategory };
