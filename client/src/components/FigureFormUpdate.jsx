import axios from "axios"
import { useState } from "react"


const FigureFormUpdate = ({ figure, getFigs }) => {

  const [updateFigure, setUpdateFigure] = useState(figure)

  const handleChange = (e) => {
    const {name, value} = e.target
    setUpdateFigure((updateFigure)=>(
      {...updateFigure, [name]: value}
    ))
  }

  const updateCall = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/api/figures/${figure._id}`, updateFigure)
    getFigs()
  }

  return(
    <div class="form-container">
      <h1 class="edit">Edit</h1>
      <form onSubmit={updateCall} class="form">
        <input type="text" value={updateFigure.name} onChange={handleChange} name="name"></input>
        <input type="text" value={updateFigure.description} onChange={handleChange} name="description"></input>
        <input type="text" value={updateFigure.class} onChange={handleChange} name="class"></input>
        <input type="text" value={updateFigure.brand} onChange={handleChange} name="brand"></input>
        <input type="text" value={updateFigure.releaseDate} onChange={handleChange} name="releaseDate"></input>
        <input type="number" value={updateFigure.price} onChange={handleChange} name="price"></input>
        <input type="text" value={updateFigure.image} onChange={handleChange} name="image"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FigureFormUpdate