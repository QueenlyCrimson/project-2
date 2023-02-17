import Posts from "../components/Posts";

const Home = (props) => {
  let posts = props.posts;

  return (
    <div>
      <Posts />
    </div>
  );
};

export default Home;
