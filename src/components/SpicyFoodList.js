import React, { useState } from "react"
import { spicyFoods, getNewSpicyFood } from "../data"

function SpicyFoodList() {
   const [foods, setFoods] = useState(spicyFoods)
   const [filterBy, setFilterBy] = useState("All")
   console.log(foods)

   function handleAddFood() {
      const newFood = getNewSpicyFood()
      setFoods(foods => [...foods, newFood])
   }

   function handleLiClick(foods, food) {
      // const updateFood = foods.filter(food => food.id !== id)
      // setFoods(updateFood)
   }

   function handleChange(e) {
      let type = e.target.value
      
      
      const updateFood = foods.filter(food => food.cuisine === type)
      type === "All" ? setFoods(foods) : setFoods(updateFood)
   }

   return (
      <div>
         <button onClick={handleAddFood}>Add New Food</button>
         <ul>
            {foods.map(food => (
               <li key={food.id} onClick={() => handleLiClick(foods, food)}>
                  {food.name} || Heat: {food.heatLevel} || Cuisine: {food.cuisine}
               </li>
            ))}
         </ul>
         <select onChange={e => handleChange(e)} name="filter">
            <option value="All">All</option>
            <option value="American">American</option>
            <option value="Sichuan">Sichuan</option>
            <option value="Thai">Thai</option>
            <option value="Mexican">Mexican</option>
         </select>
      </div>
   )
}

export default SpicyFoodList
