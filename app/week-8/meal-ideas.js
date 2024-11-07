"use client";
import { useState } from "react";
import { useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        if (!response.ok) {
            console.log(response.statusText);
            return [];
        }
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return [];
    }
}

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);
    function loadMealIdeas() {
      fetchMealIdeas(ingredient).then((data) => setMeals(data));
    };

    useEffect(() => {
      loadMealIdeas();
    }, [ingredient]);


    return (
      <div>
        <header className="text-xl font-extrabold">Meal Ideas</header>
        <h2>Here are some meal ideas using {ingredient} :</h2>
        <ul>
          {meals && meals.length > 0 ? (
            meals.map((meal) => (
              <li
                className="bg-gray-100 p-3 my-2 rounded shadow-sm flex justify-between items-center"
                key={meal.idMeal}
              >
                {meal.strMeal}{" "}
                <img
                  className="w-20 inline-block"
                  src={meal.strMealThumb}
                ></img>
              </li>
            ))
          ) : (
            <li>No meal ideas found.</li>
          )}
        </ul>
      </div>
    );
}