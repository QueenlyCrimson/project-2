import axios from 'axios'
import { useState }  from "react"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'


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
    axios.post('https://transformers-reviewers-api.onrender.com/api/posts', newForm)
    .then((response)=> {
      console.log(response)
    }) 
    .catch((error) => {
      console.error(error)
    })
    
    
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setNewForm((prevState)=>(
      {...prevState, [name]: value}
    ))
  }

  return(
    <div class="container-for-form">
      <h2>Post Review</h2>
      <form onSubmit={handleSubmit} class="form">
        <input type="text" value={newForm.user} onChange={handleChange} name="user" placeholder='User' ></input>
        <input type="text" value={newForm.figure} onChange={handleChange} name="figure" placeholder='Figure Name (Be Exact!)' ></input>
        <input type="text" value={newForm.title} onChange={handleChange} name="title" placeholder="Review Title"></input>
        <input type="text" value={newForm.date} onChange={handleChange} name="date" placeholder="Today's Date"></input>
        <input type="text" value={newForm.image} onChange={handleChange} name="image" placeholder="Image Link"></input>
        <input type="text" value={newForm.content} onChange={handleChange} name="content" placeholder="Review Content"></input>
        <input type="text" value={newForm.rating} onChange={handleChange} name="rating" placeholder="Rating (1-10)"></input>
        <button type="submit" class ="submit-button" >Submit</button>
      </form>
    </div>
  )
}

export default PostFormCreate