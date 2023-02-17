

const Post = (props) => {

  let post = props.post

  return(
    <div className="post">
      <div className="postTitle">{post.title}</div>
      <div className="postFigure">Figure: {post.figure}</div>
      <div className="postDate">Date: {post.date}</div>
      <div className="postUser">User: {post.user}</div>
      <div className="rating">{post.rating}</div>
      <div>
        <img className="figureImage" src={post.image}></img>
      </div>
      <div className="postContent">{post.content}</div>

    </div>
  )
}

export default Post