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
    <div>
      <h2>Post Figure</h2>
      <form onSubmit={handleSubmit} class="form">
        <input type="text" value={newForm.name} onChange={handleChange} name="name"></input>
        <input type="text" value={newForm.description} onChange={handleChange} name="description"></input>
        <input type="text" value={newForm.class} onChange={handleChange} name="class"></input>
        <input type="text" value={newForm.brand} onChange={handleChange} name="brand"></input>
        <input type="text" value={newForm.releaseDate} onChange={handleChange} name="releaseDate"></input>
        <input type="number" value={newForm.price} onChange={handleChange} name="price"></input>
        <input type="text" value={newForm.image} onChange={handleChange} name="image"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FigureFormCreate