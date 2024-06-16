import { Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Body />}></Route>
        <Route path="/restaurantMenu/:id" element={<RestaurantMenu />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
