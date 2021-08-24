import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState(``);
    const [body, setBody] = useState(``);
    const [author, setAuthor] = useState('Bhavna');
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new blog!!!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" value={title} onChange = {(e) => setTitle(e.target.value)}  required />
                <label>Blog body: </label>
                <textarea required value={body} onChange = {(e) => setBody(e.target.value)}/>
                <label>Blog author: </label>
                <select value={author} onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="Bhavna">Bhavna</option>
                    <option value="Charlie">Charlie</option>
                    <option value="Bhawana">Bhawana</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;