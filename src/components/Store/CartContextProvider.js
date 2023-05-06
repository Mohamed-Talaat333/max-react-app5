import CartContext from "./cart-context";

const addItemToCartHandler = (item) => {};

const removeItemFronCartHander = () => {};

const cartContext = {
  items: [],
  totalAmount: 0,
  addItem: addItemToCartHandler,
  removeItem: removeItemFronCartHander,
};

const CartContextProvider = (props) => {
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
