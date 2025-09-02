import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const dishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: "$12",
    image: "https://via.placeholder.com/150?text=Pizza"
  },
  {
    id: 2,
    name: "Veggie Burger",
    category: "Burger",
    price: "$8",
    image: "https://via.placeholder.com/150?text=Burger"
  },
  {
    id: 3,
    name: "Caesar Salad",
    category: "Salad",
    price: "$7",
    image: "https://via.placeholder.com/150?text=Salad"
  },
  {
    id: 4,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: "$14",
    image: "https://via.placeholder.com/150?text=Pizza"
  },
  {
    id: 5,
    name: "Chicken Burger",
    category: "Burger",
    price: "$9",
    image: "https://via.placeholder.com/150?text=Burger"
  }
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(dishes.map((dish) => dish.category))];

  return (
    <div className="app">
      <h1 className="title">Restaurant Menu</h1>
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
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
