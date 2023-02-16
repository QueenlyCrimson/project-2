import Post from "./Post";

const Posts = (props) => {

  let posts = props.posts

  return(
      <div className="posts">
        <h2>Recent Reviews</h2>

        <section className="container-feed">
          {posts.map((post) => (
            <Post post={post}  />
          ))}
        </section>
      </div>
  )
}

export default Posts