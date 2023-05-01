import React, { useEffect, useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

function App() {
  const [items, setItems] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setMenuItems(result);
        setCategories(["all", ...new Set(result.map((item) => item.category))]);
      });
  }, []);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  if (items === null) {
    return <div className="loading"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> ;
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>Shop Store</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
