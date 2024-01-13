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


  // Tüm ürünleri filtreleme
  const filteredProducts = allProduct.filter((product) => {
    // Kategori filtresi: Eğer bir kategori seçilmişse, ürünün kategorisi seçilen kategoriye eşit olmalıdır. Aksi halde true.
    const categoryMatch = selectedCategory
      ? product.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    // Alt kategori filtresi: Eğer bir alt kategori seçilmişse, ürünün alt kategorisi seçilen alt kategoriye eşit olmalıdır. Aksi halde true.
    const subCategoryMatch = selectedSubCategory
      ? product.subcategory.toLowerCase() === selectedSubCategory.toLowerCase()
      : true;

    // Ürün adı filtresi: Eğer bir ürün adı filtresi varsa, ürün adı filtresini içermelidir. Aksi halde true.
    const nameMatch = nameFilter
      ? product.productTitle.toLowerCase().includes(nameFilter.toLowerCase())
      : true;

    // İl filtresi: Eğer bir il seçilmişse, ürünün ili seçilen ile eşit olmalıdır. Aksi halde true.
    const provinceMatch = selectedProvince
      ? product.province.toLowerCase() === selectedProvince.toLowerCase()
      : true;

    // Marka filtresi: Eğer bir marka seçilmişse ve ürünün markası tanımlıysa, ürün markası seçilen markaya eşit olmalıdır. Aksi halde true.
    let brandMatch = true;
    if (selectedBrand.length !== 0 && product.brand !== undefined)
      selectedBrand.forEach(
        (brand) =>
        (brandMatch =
          brandMatch && product.brand.toLowerCase() === brand.toLowerCase())
      );

    // Fiyat filtresi: Ürünün fiyatı, seçilen minimum ve maksimum fiyat aralığı içinde olmalıdır. Aksi halde true.
    const priceMatch =
      parseInt(product.price) >= minPrice &&
      parseInt(product.price) <= maxPrice;

    // Tüm filtreleme koşullarının sağlanması durumunda true, aksi halde false döndürülür.
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

  }, [token]);
console.log(allProduct)
  return (
    <>
      <div className="products row">
        {allProduct.map((product) => (
          <div className="img col-xl-3 col-lg-4 col-md-6 col-12 mb-4" key={product.id} style={{ border: "1px solid", cursor: "pointer" }}>

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

    </>
  );
}

export default Products;