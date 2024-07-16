import { useEffect, useState } from "react";
export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "f54de83a922b4097b4e84e9e369e24c4";

  const [food, setFood] = useState({});
  const [Isloading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false)
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} />
      </div>
      <span>
        <strong>🕐 {food.readyInMinutes} Minutes</strong>
      </span>
      <br />
      <span>
        <strong>
          {food.vergetarian ? "🥕 Vegetarian" : "🍖 Non-vegetarian"}
        </strong>
      </span>
      <br />
      <span>
        <strong>👨‍👨‍👦 {food.servings}</strong>
      </span>
      <br />
      <span>
        <strong>{food.vegan ? "🐂 Vegan" : "Non-Vegan"}</strong>
      </span>
      <br />
      <span>
        <strong>$ {food.pricePerServing / 100} Per Serving</strong>
      </span>
      <br />
      <h2>Instructions</h2>
      <div>
      <ol>
      {Isloading ? <p>Loading..</p> :  food.analyzedInstructions[0].steps.map((step) => (
           <li>{step.step}</li>
        ))}
      </ol>
        
      
      </div>
    </div>
  );
}
