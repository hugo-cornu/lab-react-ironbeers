import React from "react"

import { useState, useEffect } from "react" // <== IMPORT useEffect
import { Link } from "react-router-dom"
import axios from "axios" // <== IMPORT axios

const AllBeers = () => {
  const [allBeers, setAllBeers] = useState([])

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setAllBeers(response.data)
    })
  }, [])

  return (
    <>
      {allBeers.map((beer) => {
        return (
          <Link to={`/beers/${beer._id}`} key={beer._id}>
            <div className="beer-container">
              <img src={beer.image_url} alt="" />
              <div>
                <h2>{beer.name}</h2>
                <h4>{beer.tagline}</h4>
                <p>Created by {beer.name}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default AllBeers
