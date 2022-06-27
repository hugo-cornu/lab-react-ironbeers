import React from "react"
import { Link } from "react-router-dom"

import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"

const HomePage = () => {
  return (
    <>
      <Link to="/beers">
        <section>
          <img src={beers} alt="" />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
      </Link>

      <Link to="/random-beer">
        <section>
          <img src={newBeer} alt="" />
          <h2>Random Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
      </Link>

      <Link to="/new-beer">
        <section>
          <img src={randomBeer} alt="" />
          <h2>New Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
      </Link>
    </>
  )
}

export default HomePage
