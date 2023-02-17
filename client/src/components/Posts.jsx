import { useEffect, useState } from "react";
import axios from "axios";
import Post from './Post'
import PostFormUpdate from "./PostFormUpdate";

const Posts = (props) => {

  const [postsCollection, setPostsCollection] = useState([])

  const getPosts = async () => {
    const props = await axios.get('http://localhost:3001/api/')
    console.log(props)
    setPostsCollection(props.data.posts)
  }

  const delPost = async (post_id) => {
    const props = await axios.delete(`http://localhost:3001/api/${post_id}`)
    getPosts()
  }



  useEffect(()=> {
    getPosts()
  }, [])


  return(
    <div className="posts">
      <h2>Recent Reviews</h2>
      <section class="posts-feed">
        {postsCollection.map((post) => (
          <div key={post._id}>
            <Post post={post} />
            {/* <PostFormUpdate post={post} getPosts={getPosts} /> */}
            <button onClick={() => delPost(post._id)}>Delete</button>
          </div>
        ))}
      </section>
    </div>
  )

}

export default Posts