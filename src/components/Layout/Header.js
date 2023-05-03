import classes from "./Header.module.css";
import mealseImage from "../../assets/images/meals.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return(
        <>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealseImage} alt="A table of delicious food!" />
            </div>
        </>
    );
}

export default Header;