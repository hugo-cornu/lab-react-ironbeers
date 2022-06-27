import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"
import "./pages/HomePage.css"
import "./pages/AllBeers.css"
import "./pages/BeerPageDetails.css"
import "./components/NavBar.css"
import "./pages/RandomPageDetails.css"

import HomePage from "./pages/HomePage"
import NavBar from "./components/NavBar"
import AllBeers from "./pages/AllBeers"
import BeerPageDetails from "./pages/BeerPageDetails"
import RandomPageDetails from "./pages/RandomPageDetails"
import AddANewBeer from "./pages/AddANewBeer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<NavBar />}>
            <Route path="/beers" element={<AllBeers />} />
            <Route path="/beers/:id" element={<BeerPageDetails />} />
            <Route path="/random-beer" element={<RandomPageDetails />} />
            <Route path="/new-beer" element={<AddANewBeer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
