import { dispatch, useSelector } from "react-redux";
import { removeItemFromCart, addItemToCart } from "../redux/cartActions"; // Örnek eylemler

function Favorites() {
    // const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items); // Redux store'dan sepet verilerini al

  const handleRemoveFromCart = (itemId) => {
    // Sepetten ürün çıkarma eylemi
    dispatch(removeItemFromCart(itemId));
  };

  const handleAddToCart = (item) => {
    // Sepete ürün ekleme eylemi
    dispatch(addItemToCart(item));
  };

  return (
    <>
      <div className="container">
        {cartItems.map((item) => (
          <div className="card" style={{ width: "18rem", marginTop: "50px" }} key={item.id}>
            <h1 className="text-center">Sepetim</h1>
            <img src={item.image} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <button onClick={() => handleRemoveFromCart(item.id)} className="btn btn-danger">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Favorites;
