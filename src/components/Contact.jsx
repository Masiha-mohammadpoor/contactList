import {FaTrashAlt , FaEdit} from "react-icons/fa";
import {Link} from "react-router-dom";


const Contact = ({id , name , email , onDelete}) => {

    const options = {
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center"
    }

    return (
        <tr>
            <td>{id}</td>
            <td><Link to={`/contact/${id}`} state={{name,email}}>{name}</Link></td>
            <td><Link to={`/contact/${id}`} state={{name,email}}>{email}</Link></td>
            <td style={options}>
            <button className="optionsBtn" style={{color:"#ff0000"}} onClick={onDelete}><FaTrashAlt/></button>
            <button className="optionsBtn" style={{color:"#2027ed"}}><FaEdit/></button>
            </td>
        </tr>
    );
}

export default Contact;