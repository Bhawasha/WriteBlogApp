import BlogList from "./components/BlogList";
import useFetch from "./hooks/useFetch";
const Home = () => {

  const { data: blogs, pending, error} = useFetch('http://localhost:8000/blogs')

  return (
      <div className="home">
          {error && <div>{error}</div>}
          {pending  && <div>Loading ...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs List!" />}
      </div>
  );
}

export default Home;