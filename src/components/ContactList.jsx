import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Contact from "./Contact";
import {Link} from "react-router-dom";

const ContactList = ({contacts , onDelete}) => {

    const renderList = () => {
        if(contacts.length === 0) return <tr><td colSpan={4} style={{textAlign:"center" , color:"#ff0000"}}>please add a contact</td></tr>;
        else{
            return contacts.map(c => {
                const {id , name , email} = c;
                return <Contact
                        key={id}
                        id={id}
                        name={name}
                        email={email}
                        onDelete={() => onDelete(id)}/>
                    })
                }
            }

    return (
        <section className="table-responsive mt-5">
            <div className='d-flex justify-content-center align-items-center m-5'>
            <Button variant='primary' className="AddContactLink"><Link to="/add" style={{textDecoration:"none" , color:"#fff"}}>Add New Contact?</Link></Button>
            </div>
            <Table striped bordered hover className='table-info w-75 m-auto'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </Table>
        </section>
    );
}

export default ContactList;