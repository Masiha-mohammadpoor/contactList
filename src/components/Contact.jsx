import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = ({ id, name, email, phone, number, onDelete }) => {

    const [showTooltip , setShowTooltip] = useState(true);


    const options = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }

    const propsOfLink = {
        to: `/contact/${id}`,
        state: { name, email, phone },
    }

    

    return (
        <>
        <tr>
            <td>{+(number) + 1}</td>

            <td><Link {...propsOfLink}>
                {name.length > 30 ? name.slice(0, 30) + "..." : name}
            </Link></td>

            <td><Link {...propsOfLink}>
                {email.length > 30 ? email.slice(0, 30) + "..." : email}
            </Link></td>

            <td><Link {...propsOfLink}>
                {phone.length > 15 ? phone.slice(0,15) + "..." : phone}
            </Link>
            </td>

            <td style={options}>
                <button className="optionsBtn" style={{ color: "#ff0000" }} onClick={onDelete}><FaTrashAlt /></button>
                <Link to={`/edit/${id}`}><button className="optionsBtn" style={{ color: "#2027ed" }}><FaEdit /></button></Link>
            </td>
        </tr>
        </>
    );
}

export default Contact;

//09057277318