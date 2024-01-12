import React, { useEffect, useState } from "react";
import { useCategory } from "./Context/CategoryContext";
import { useProvince } from "./Context/ProvinceContext";
import { useDispatch } from "react-redux";
import "../Styles/Product.css";
import { Link } from "react-router-dom";
import { selectProduct } from "../control/slices/productSlice";
import { useSearch } from "./Context/SearchContext";
import { useBrand } from "./Context/BrandContext";
import { usePrice } from "./Context/PriceContext";
import axios from "axios";

function Products() {
  const token = localStorage.getItem("token");
  const allProducts = localStorage.getItem("allProduct");

  const [allProduct, setAllProduct] = useState([]);


  const { selectedCategory, selectedSubCategory } = useCategory();
  const { selectedProvince } = useProvince();
  const { minPrice, maxPrice } = usePrice();
  const { selectedBrand } = useBrand();
  const { nameFilter } = useSearch();

  //redux ile ürün detay sayfasına yönlendirme
  const dispatch = useDispatch();



  // Ürün bilgilerini Redux store'a gönder
  const selectedProduct = (product) => {
    dispatch(selectProduct(product));
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  // Ürün bilgilerini localStorage'a kaydet


  const filteredProducts = allProduct.filter((product) => {
    const categoryMatch = selectedCategory
      ? product.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    const subCategoryMatch = selectedSubCategory
      ? product.subCategory.toLowerCase() === selectedSubCategory.toLowerCase()
      : true;
    const nameMatch = nameFilter
      ? product.title.toLowerCase().includes(nameFilter.toLowerCase())
      : true;
    const provinceMatch = selectedProvince
      ? product.province.toLowerCase() === selectedProvince.toLowerCase()
      : true;
    let brandMatch = true;
    if (selectedBrand.length !== 0 && product.brand !== undefined)
      selectedBrand.forEach(
        (brand) =>
        (brandMatch =
          brandMatch && product.brand.toLowerCase() === brand.toLowerCase())
      );
    const priceMatch =
      parseInt(product.price) >= minPrice &&
      parseInt(product.price) <= maxPrice;
    return (
      categoryMatch &&
      subCategoryMatch &&
      nameMatch &&
      provinceMatch &&
      priceMatch &&
      brandMatch
    );
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mysql-emporium-deploy1.onrender.com/product/getAllProduct",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAllProduct(response.data.allProducts);

  
    } catch (error) {
      console.error("Kullanıcı hatası:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products row">
      {allProduct.map((product) => (
        <div className="img col-xl-2 col-lg-4 col-md-6 col-12 mb-4" key={product.id} style={{ cursor: "pointer" }}>

          <Link
            to={`/urun-detayi/${product.id}`}
            onClick={() => selectedProduct(product)}
          >
            <div className="card">
              <img
                src={`https://mysql-emporium-deploy1.onrender.com/photo/${product.img1}`}

                className="card-img-top fixed-size-image"
                alt={product.productTitle}
              />
              <div className="card-body">
                <h6 className="card-title">{product.productTitle}</h6>


              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
