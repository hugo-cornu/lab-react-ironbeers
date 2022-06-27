import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const BeerPageDetails = () => {
  const [beerDetails, setBeerDetails] = useState({})
  console.log("beerDetails:", beerDetails)

  // We want to get the id from the URL parameters
  const params = useParams()

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => {
        console.log("response.data", response.data)
        setBeerDetails(response.data)
      })
  }, [params.id])

  return (
    <div>
      <img src={beerDetails.image_url} alt="" />
      <div className="name-and-tagline">
        <h3>{beerDetails.name}</h3>
        <p>{beerDetails.attenuation_level}</p>
      </div>
      <div className="attenuation-and-date">
        <p>{beerDetails.tagline}</p>
        <p>{beerDetails.first_brewed}</p>
      </div>
      <p>{beerDetails.description}</p>
      <p>{beerDetails.contributed_by}</p>
    </div>
  )
}

export default BeerPageDetails
