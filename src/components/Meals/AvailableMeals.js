import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [mealsItems, setMealsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMealsHandler = () => {
    setIsLoading(true);

    fetch("https://react-food-order-app-cce41-default-rtdb.firebaseio.com/meals.json")
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        let loadedMeals = [];

        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }

        // console.log(data);
        // console.log(loadedMeals);

        setMealsItems(loadedMeals);
        setIsLoading(false);
      }).catch(err => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    fetchMealsHandler();
  }, []);

  const mealsList = mealsItems.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        {isLoading && <p>Loading ...</p>}
        {error && <p>{error}</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
