import { useEffect, useState } from "react";
import axios from "axios";
import Post from './Post'


const Posts = (props) => {

  const [postsCollection, setPostsCollection] = useState([])

  const getPosts = async () => {
    const props = await axios.get('https://transformers-reviewers-api.onrender.com/api/')
    console.log(props)
    setPostsCollection(props.data.posts)
  }

  const delPost = async (post_id) => {
    const props = await axios.delete(`https://transformers-reviewers-api.onrender.com/api/posts/${post_id}`)
    getPosts()
  }



  useEffect(()=> {
    getPosts()
  }, [])


  return(
    <div className="posts">
      <h2 class="page-title">Recent Reviews</h2>
      <section class="posts-feed">
        {postsCollection.map((post) => (
          <div key={post._id}>
            <Post post={post} />
            
            <button onClick={() => delPost(post._id)}>Delete</button>
          </div>
        ))}
      </section>
    </div>
  )

}

export default Posts