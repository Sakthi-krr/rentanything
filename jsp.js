import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/items/available')
      .then(res => res.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  return (
    <div>
      <header><h1>RentAnything</h1><p>Available Rentals</p></header>
      <main className="grid">
        {items.map(item => (
          <div key={item.id} className="card">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">${item.pricePerDay.toFixed(2)}/day</p>
            <button>Rent Now</button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;