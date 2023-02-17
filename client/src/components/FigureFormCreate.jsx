import axios from 'axios'
import { useState }  from "react"


const FigureFormCreate = () => {

  const [newForm, setNewForm] = useState({
    name: '',
    description: '',
    class: '',
    brand: '',
    releaseDate: '',
    price: '',
    image: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/api/figures', newForm)
    .then((response)=> {
      console.log(response)
    }) 
    .catch((error) => {
      console.error(error)
    })
    console.log(newForm)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setNewForm((prevState)=>(
      {...prevState, [name]: value}
    ))
  }

  return(
    <div class="container-for-form">
      <h2>Post Figure</h2>
      <form onSubmit={handleSubmit} class="form">
        <input type="text" value={newForm.name} onChange={handleChange} name="name" placeholder="Figure Name"></input>
        <input type="text" value={newForm.description} onChange={handleChange} name="description" placeholder="Description"></input>
        <input type="text" value={newForm.class} onChange={handleChange} name="class" placeholder="Class"></input>
        <input type="text" value={newForm.brand} onChange={handleChange} name="brand" placeholder="Brand"></input>
        <input type="text" value={newForm.releaseDate} onChange={handleChange} name="releaseDate" placeholder="Release Year"></input>
        <input type="number" value={newForm.price} onChange={handleChange} name="price" placeholder="Price"></input>
        <input type="text" value={newForm.image} onChange={handleChange} name="image" placeholder="Image Link"></input>
        <button class ="submit-button">Submit</button>
      </form>
    </div>
  )
}

export default FigureFormCreate