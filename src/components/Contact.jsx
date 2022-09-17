import {FaTrashAlt , FaEdit} from "react-icons/fa";
import {Link} from "react-router-dom";


const Contact = ({id , name , email,phone , onDelete}) => {

    const options = {
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center"
    }

    return (
        <tr>
            <td>{id}</td>
            <td><Link to={`/contact/${id}`} state={{name , email , phone}}>{name}</Link></td>
            <td><Link to={`/contact/${id}`} state={{name , email , phone}}>{email}</Link></td>
            <td><Link to={`/contact/${id}`} state={{name , email , phone}}>{phone}</Link></td>
            <td style={options}>
            <button className="optionsBtn" style={{color:"#ff0000"}} onClick={onDelete}><FaTrashAlt/></button>
            <Link to={`/edit/${id}`}><button className="optionsBtn" style={{color:"#2027ed"}}><FaEdit/></button></Link>
            </td>
        </tr>
    );
}

export default Contact;