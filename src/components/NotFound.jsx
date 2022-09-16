import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <section className="notFound">
            <h1 className="text-danger">404</h1>
            <p>not found</p>
            <Link to="/">go to contact List</Link>
            <Link to="/add">Add contact ?</Link>
        </section>
    );
}
 
export default NotFound;