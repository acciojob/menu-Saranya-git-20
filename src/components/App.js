import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

const dishes = [
  { id: 1, name: "Pancakes", category: "Breakfast", price: "$5", image: "https://via.placeholder.com/150?text=Pancakes" },
  { id: 2, name: "Burger", category: "Lunch", price: "$8", image: "https://via.placeholder.com/150?text=Burger" },
  { id: 3, name: "Milkshake", category: "Shakes", price: "$4", image: "https://via.placeholder.com/150?text=Shake" },
  { id: 4, name: "Omelette", category: "Breakfast", price: "$6", image: "https://via.placeholder.com/150?text=Omelette" },
  { id: 5, name: "Steak", category: "Lunch", price: "$15", image: "https://via.placeholder.com/150?text=Steak" },
  { id: 6, name: "Chocolate Shake", category: "Shakes", price: "$5", image: "https://via.placeholder.com/150?text=Shake" }
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Categories in the order Cypress expects
  const categories = ["All", "Breakfast", "Lunch", "Shakes"];

  return (
    <div id="main"> 
      <h1 className="title">Restaurant Menu</h1>
      <div className="categories">
        {categories.map((cat, index) => (
          <button
            key={cat}
            id={`filter-btn-${index}`}
            className={`category-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <Menu dishes={dishes} activeCategory={activeCategory} />
    </div>
  );
}

export default App;
