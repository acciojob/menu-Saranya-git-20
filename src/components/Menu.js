import React from "react";

function Menu({ dishes, activeCategory }) {
  const filteredDishes =
    activeCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <div className="menu">
      {filteredDishes.length > 0 ? (
        filteredDishes.map((dish) => (
          <div key={dish.id} className="menu-item">
            <img src={dish.image} alt={dish.name} className="menu-img" />
            <h3 className="menu-name">{dish.name}</h3>
            <p className="menu-category">{dish.category}</p>
            <p className="menu-price">{dish.price}</p>
          </div>
        ))
      ) : (
        <p className="no-items">No items found</p>
      )}
    </div>
  );
}

export default Menu;
