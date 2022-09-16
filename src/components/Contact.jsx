const Contact = ({id , name , email }) => {

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td></td>
        </tr>
    );
}

export default Contact;