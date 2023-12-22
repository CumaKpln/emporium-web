import { Carousel } from "react-carousel-minimal";
import { useDispatch, useSelector } from "react-redux";
import { favItem } from "../../../control/slices/favSlice"; // Redux reducer'ınızdan gelen action

function Slider() {
  //redux'a giden veriler yapımı
  const dispatch = useDispatch();

  const favoriteItem = (product) => {
    // Redux store'a seçilen ürünü gönderme
    dispatch(favItem(product));
  };

  //! For Slider

  //reduxtan gelen veriler
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  const product = useSelector((state) => state.products);

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const images = selectedProduct.selectedFiles.map((file, index) => ({
    image: file.url,
    index: index, // Dizi içindeki her bir dosya için index değeri oluşturuluyor
  }));

  return (
    <div className="App">
      <div onClick={() => favoriteItem(product)} className="fav-icon">
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
  );
}

export default Slider;
