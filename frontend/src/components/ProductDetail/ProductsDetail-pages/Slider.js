import React, { useEffect } from "react";
import { Carousel } from "react-carousel-minimal";
import { useSelector } from "react-redux";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Slider() {
  // Redux store'dan gelen veriyi alıyoruz.
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  const token = localStorage.getItem("token");

  const handleFavClick = async () => {
    try {
      await axios.post(
        `https://mysql-emporium-deploy1.onrender.com/product/favorite/${selectedProduct.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then(() => {
          toast.success("Favorilerime eklendi!");

        });

    } catch (error) {
      console.error("Favori ekleme hatası:", error);
    }
  };

  useEffect(() => {
    // İlk render sırasında ve token değiştiğinde çalışacak
    // Bu, sadece favori ekleme işlemi için kullanılır
  }, [token]);

  console.log(selectedProduct);

  // Görüntü verilerini içeren bir nesne oluşturuyoruz.
  const imgData = {
    img1: `https://mysql-emporium-deploy1.onrender.com/photo/${selectedProduct.img1}`,
    img2: `https://mysql-emporium-deploy1.onrender.com/photo/${selectedProduct.img2}`,
    img3: `https://mysql-emporium-deploy1.onrender.com/photo/${selectedProduct.img3}`,
    img4: `https://mysql-emporium-deploy1.onrender.com/photo/${selectedProduct.img4}`,
    img5: `https://mysql-emporium-deploy1.onrender.com/photo/${selectedProduct.img5}`,
  };

  // imgData'daki değerleri bir diziye dönüştürüyoruz ve undefined olanları filtreliyoruz.
  const imgArray = Object.values(imgData).filter((img) => img);

  // Carousel bileşeni için stilleri tanımlıyoruz.
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  // Carousel için resim nesnelerini oluşturuyoruz.
  const images = imgArray.map((file, index) => ({
    image: file, // Resim URL'sini direkt olarak kullanıyoruz.
    index: index,
  }));

  // Bileşeni render ediyoruz.
  return (
    <>

      <Toaster
        position="center-top"
        reverseOrder={false}
      />
      <div className="App">
        {/* Favori ekleme işlemi için bir ikon ve metin ekliyoruz. */}
        <div className="fav-icon" onClick={handleFavClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          <span>Favorilere ekle</span>
        </div>
        <Carousel
          data={images}
          time={3000}
          width="100%"
          height="500px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="gray"
          slideImageFit="contain"
          thumbnails={true}
          thumbnailWidth="120px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
    </>
  );
}

export default Slider;
