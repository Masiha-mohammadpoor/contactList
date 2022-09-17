import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Contact from "./Contact";
import { Link } from "react-router-dom";
import deleteContact from "../services/deleteContact";
import { useState , useEffect} from 'react';
import getAllContacts from "../services/getAllcontacts";

const ContactList = () => {

    const [contacts , setContacts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try{
                const {data} = await getAllContacts();
                setContacts([...data])
            }catch(err){
                console.error(err)
            }
        }
        getData()
    } , [])



    const deleteContactHandler = async (id) => {
        try{
            await deleteContact(id);
            const filtered = contacts.filter(c => c.id !== id);
            setContacts(filtered);
        }catch(err){
            console.error(err)
        }
    }

    const renderList = () => {
        if (contacts.length === 0) return <tr><td colSpan={5} style={{ textAlign: "center", color: "#ff0000" }}>please add a contact</td></tr>;
        else {
            return contacts.map((c , index) => {
                const { id, name, email, phone } = c;
                return <Contact
                    key={id}
                    id={id}
                    name={name}
                    email={email}
                    phone={phone}
                    number={index}
                    onDelete={() => deleteContactHandler(id)} />
            })
        }
    }

    return (
        <section className="table-responsive mt-5">
            <div className='d-flex justify-content-center align-items-center m-5'>
                <Button variant='primary' className="AddContactLink">
                    <Link to="/add" style={{ textDecoration: "none", color: "#fff" }}>Add New Contact ?</Link>
                </Button>
            </div>
            <Table striped bordered hover className='table-info w-75 m-auto'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody className='flex-column-reverse'>
                    {renderList()}
                </tbody>
            </Table>
        </section>
    );
}

export default ContactList;