import "./App.css";
import GroceryList from "./GroceryList";
import image from "./img1.jpg";
import imageTwo from "./img2.jpg";

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={image} className="img1" alt="groceryShop" />
      </div>

      <div className="container">
        <h1>Grocery List</h1>
      </div>

      <GroceryList />
      <div className="container">
        <img src={imageTwo} className="img2" alt="groceryMan" />
      </div>
    </div>
  );
}

export default App;
