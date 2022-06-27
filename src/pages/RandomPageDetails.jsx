import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

const RandomPageDetails = () => {
  const [randomBeer, setRandomBeer] = useState({})

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log("response.data:", response.data)
        setRandomBeer(response.data)
      })
  }, [])

  return (
    <div>
      <img src={randomBeer.image_url} alt="" />
      <div className="name-and-tagline">
        <h3>{randomBeer.name}</h3>
        <p>{randomBeer.attenuation_level}</p>
      </div>
      <div className="attenuation-and-date">
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
      </div>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  )
}

export default RandomPageDetails
