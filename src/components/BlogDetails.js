import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, pending} = useFetch('http://localhost:8000/blogs/'+ id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(
            () => {
                history.push('/');
            }
        )
    }
    return (
        <div className="blog-details">
            {pending && <div> Loading... </div>}
            {error && <div> {error} </div>}
            {blog && <div> 
                <article>
                <h2>{blog.title}</h2>
                <p> Written By- {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete</button>
            </article>
            </div>}
        </div>
    )
}

export default BlogDetails;
