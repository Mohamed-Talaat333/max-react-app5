import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const  numberOfCarItems = cartCtx.items.reduce((curNumber, item) => {return curNumber + item.amount }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {numberOfCarItems > 0 && <span className={classes.badge}>{numberOfCarItems}</span>}
    </button>
  );
};

export default HeaderCartButton;
