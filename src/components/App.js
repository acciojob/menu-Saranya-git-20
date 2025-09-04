import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Order must match Cypress expectations
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
