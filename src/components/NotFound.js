import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry</h1>
            <p>Oops,This page is not available</p>
            <Link to="/">Click here to go back to homepage</Link>
        </div>
     );
}
 
export default NotFound;