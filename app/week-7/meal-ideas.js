"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
}

async function fetchMealIngredients(mealId) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const data = await response.json();
  return data.meals;
}

export default function MealIdeas({ingredient}) 
{
  const [meals, setMeals] = useState([]);
  const [mealIngredients, setMealIngredients] = useState(null);
  const [info, setInfo] = useState("Select an item to see meal ideas.");

  async function loadMealIdeas() {
    const data = await fetchMealIdeas(ingredient);
    setMeals(data);
  }

  async function loadMealIngredients(mealId) {
    const data = await fetchMealIngredients(mealId);
    setMealIngredients(data);
  }

  const onMealSelect = (mealId) => {
    loadMealIngredients(mealId);
  }

  useEffect(() => 
    {
        loadMealIdeas();
        if (ingredient !== null)
        {
            setInfo("No meal ideas found for "+ingredient);
        }
    }, [ingredient]);

  return (
    <main>
        <div className=" p-2 m-2 mt-6 ">
            <p className="text-xl font-bold mb-2">Meal Ideas</p>
            <ul>
                {meals === null ?  <li>{info}</li> :
                meals.map((meal) => (
                
                <li className=" p-1.5 pl-0 w-80 border-b-2 border-black border-opacity-100 hover:bg-orange-500 cursor-pointer" key={meal.idMeal} onClick={() => onMealSelect(meal.idMeal)}>
                    <h2>{meal.strMeal}</h2>
                    {mealIngredients != null &&
                    meal.idMeal === mealIngredients[0].idMeal &&
                    mealIngredients.map((mealIng) => (
                      <li className="text-white-600 text-xs font-light ml-2" key={mealIng.idMeal}>
                        <h3>Ingredients needed:</h3>
                        <ul className="ml-6">
                          <li>{mealIng.strIngredient1} {mealIng.strMeasure1!=null && mealIng.strMeasure1.length > 0  ?  mealIng.strIngredient1 + mealIng.strMeasure1.trim() && '('+mealIng.strMeasure1+')' : ''} </li>
                          <li>{mealIng.strIngredient2} {mealIng.strMeasure2!=null && mealIng.strMeasure2.length > 0  ?  mealIng.strIngredient2 + mealIng.strMeasure2.trim() && '('+mealIng.strMeasure2+')' : ''} </li>
                          <li>{mealIng.strIngredient3} {mealIng.strMeasure3!=null && mealIng.strMeasure3.length > 0  ?  mealIng.strIngredient3 + mealIng.strMeasure3.trim() && '('+mealIng.strMeasure3+')' : ''} </li>
                          <li>{mealIng.strIngredient4} {mealIng.strMeasure4!=null && mealIng.strMeasure4.length > 0  ?  mealIng.strIngredient4 + mealIng.strMeasure4.trim() && '('+mealIng.strMeasure4+')' : ''} </li>
                          <li>{mealIng.strIngredient5} {mealIng.strMeasure5!=null && mealIng.strMeasure5.length > 0  ?  mealIng.strIngredient5 + mealIng.strMeasure5.trim() && '('+mealIng.strMeasure5+')' : ''} </li>
                          <li>{mealIng.strIngredient6} {mealIng.strMeasure6!=null && mealIng.strMeasure6.length > 0  ?  mealIng.strIngredient6 + mealIng.strMeasure6.trim() && '('+mealIng.strMeasure6+')' : ''} </li>
                          <li>{mealIng.strIngredient7} {mealIng.strMeasure7!=null && mealIng.strMeasure7.length > 0  ?  mealIng.strIngredient7 + mealIng.strMeasure7.trim() && '('+mealIng.strMeasure7+')' : ''} </li>
                          <li>{mealIng.strIngredient8} {mealIng.strMeasure8!=null && mealIng.strMeasure8.length > 0  ?  mealIng.strIngredient8 + mealIng.strMeasure8.trim() && '('+mealIng.strMeasure8+')' : ''} </li>
                          <li>{mealIng.strIngredient9} {mealIng.strMeasure9!=null && mealIng.strMeasure9.length > 0  ?  mealIng.strIngredient9 + mealIng.strMeasure9.trim() && '('+mealIng.strMeasure9+')' : ''} </li>
                          <li>{mealIng.strIngredient10} {mealIng.strMeasure10!=null && mealIng.strMeasure10.length > 0  ?  mealIng.strIngredient10 + mealIng.strMeasure10.trim() && '('+mealIng.strMeasure10+')' : ''} </li>
                          <li>{mealIng.strIngredient11} {mealIng.strMeasure11!=null && mealIng.strMeasure11.length > 0  ?  mealIng.strIngredient11 + mealIng.strMeasure11.trim() && '('+mealIng.strMeasure11+')' : ''} </li>
                          <li>{mealIng.strIngredient12} {mealIng.strMeasure12!=null && mealIng.strMeasure12.length > 0  ?  mealIng.strIngredient12 + mealIng.strMeasure12.trim() && '('+mealIng.strMeasure12+')' : ''} </li>
                          <li>{mealIng.strIngredient13} {mealIng.strMeasure13!=null && mealIng.strMeasure13.length > 0  ?  mealIng.strIngredient13 + mealIng.strMeasure13.trim() && '('+mealIng.strMeasure13+')' : ''} </li>
                          <li>{mealIng.strIngredient14} {mealIng.strMeasure14!=null && mealIng.strMeasure14.length > 0  ?  mealIng.strIngredient14 + mealIng.strMeasure14.trim() && '('+mealIng.strMeasure14+')' : ''} </li>
                          <li>{mealIng.strIngredient15} {mealIng.strMeasure15!=null && mealIng.strMeasure15.length > 0  ?  mealIng.strIngredient15 + mealIng.strMeasure15.trim() && '('+mealIng.strMeasure15+')' : ''} </li>
                          <li>{mealIng.strIngredient16} {mealIng.strMeasure16!=null && mealIng.strMeasure16.length > 0  ?  mealIng.strIngredient16 + mealIng.strMeasure16.trim() && '('+mealIng.strMeasure16+')' : ''} </li>
                          <li>{mealIng.strIngredient17} {mealIng.strMeasure17!=null && mealIng.strMeasure17.length > 0  ?  mealIng.strIngredient17 + mealIng.strMeasure17.trim() && '('+mealIng.strMeasure17+')' : ''} </li>
                          <li>{mealIng.strIngredient18} {mealIng.strMeasure18!=null && mealIng.strMeasure18.length > 0  ?  mealIng.strIngredient18 + mealIng.strMeasure18.trim() && '('+mealIng.strMeasure18+')' : ''} </li>
                          <li>{mealIng.strIngredient19} {mealIng.strMeasure19!=null && mealIng.strMeasure19.length > 0  ?  mealIng.strIngredient19 + mealIng.strMeasure19.trim() && '('+mealIng.strMeasure19+')' : ''} </li>
                          <li>{mealIng.strIngredient20} {mealIng.strMeasure20!=null && mealIng.strMeasure20.length > 0  ?  mealIng.strIngredient20 + mealIng.strMeasure20.trim() && '('+mealIng.strMeasure20+')' : ''} </li>
                        </ul>
                      </li>
                    ))}
                </li>
                ))}
            </ul>
        </div>
    </main>
  );
}