import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

// I understand now why the other method is way better ->
// Especially when you need to clear the form after the data has been sent.
// Interesting to have done this way first to realyse.

const AddANewBeer = () => {
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [firstBrewed, setFirstBrewed] = useState("")
  const [brewersTips, setBrewersTips] = useState("")
  const [attenuationLevel, setAttenuationLevel] = useState(1)
  const [contributedBy, setContributedBy] = useState("")

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    axios({
      method: "POST",
      url: "https://ih-beers-api2.herokuapp.com/beers/new",
      data: {
        name: name,
        tagline: tagline,
        description: description,
        brewers_tips: brewersTips,
        first_brewed: firstBrewed,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
        image_url: name,
      },
    }).then((response) => {
      console.log("response.data", response.data)

      // Navigate the user to the home page
      navigate("/")
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div>
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => {
              setTagline(e.target.value)
            }}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </div>
        <div>
          <label>First Brewed</label>
          <input
            type="text"
            name="first-brewed"
            value={firstBrewed}
            onChange={(e) => {
              setFirstBrewed(e.target.value)
            }}
          />
        </div>
        <div>
          <label>Brewers Tips</label>
          <input
            type="text"
            name="brewers-tips"
            value={brewersTips}
            onChange={(e) => {
              setBrewersTips(e.target.value)
            }}
          />
        </div>
        <div>
          <label>Attenuation Level</label>
          <input
            type="number"
            name="attenuation"
            value={attenuationLevel}
            onChange={(e) => {
              setAttenuationLevel(e.target.value)
            }}
          />
        </div>
        <div>
          <label>Contributed by</label>
          <input
            type="text"
            name="contribution"
            value={contributedBy}
            onChange={(e) => {
              setContributedBy(e.target.value)
            }}
          />
        </div>

        <button type="submit">ADD NEW</button>
      </form>
    </div>
  )
}
export default AddANewBeer
