import BlogList from "./components/BlogList";
import useFetch from "./hooks/useFetch";
const Home = () => {

  const { data: blogs, pending, error} = useFetch('http://localhost:8000/blogs')

//    const handleDelete = (id) => {
//        debugger;
//       const newBlogs = blogs.filter(blog => blog.id !== id);
//        setBlogs(newBlogs);
//     }

  return (
      <div className="home">
          {error && <div>{error}</div>}
          {pending  && <div>Loading ...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs List!" />}
      </div>
  );
}

export default Home;