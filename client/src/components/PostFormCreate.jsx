import axios from 'axios'
import { useState }  from "react"


const PostFormCreate = () => {

  const [newForm, setNewForm] = useState({
    user: '',
    figure:'',
    title: '',
    date: '',
    image: '',
    content:'',
    rating: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/api/posts', newForm)
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
      <h2>Post Review</h2>
      <form onSubmit={handleSubmit} class="form">
        <input type="text" value={newForm.user} onChange={handleChange} name="name" placeholder='User' ></input>
        <input type="text" value={newForm.figure} onChange={handleChange} name="description" placeholder='Figure Name (Be Exact!!)' ></input>
        <input type="text" value={newForm.title} onChange={handleChange} name="class"></input>
        <input type="text" value={newForm.date} onChange={handleChange} name="brand"></input>
        <input type="text" value={newForm.image} onChange={handleChange} name="releaseDate"></input>
        <input type="number" value={newForm.content} onChange={handleChange} name="price"></input>
        <input type="text" value={newForm.rating} onChange={handleChange} name="image"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default PostFormCreate