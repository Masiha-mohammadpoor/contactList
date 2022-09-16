import Alert from 'react-bootstrap/Alert';
import {useLocation , Link} from "react-router-dom";


const ContactDetail = () => {
    const location = useLocation();

    const {name , email} = location.state;


    return (
        <div className='d-flex justify-content-center align-items-center flex-column mt-5 text-center'> 
        <Alert variant='success' className='m-5 w-25'>
            <Alert.Heading>{name}</Alert.Heading>
            <p>{email}</p>
        </Alert>
        <Link to="/">go to contact List</Link>
        </div>
    );
}
 
export default ContactDetail;