import Table from 'react-bootstrap/Table';
import Contact from "./Contact";

const ContactList = ({contacts}) => {

    const renderList = () => {
        if(contacts.length === 0) return <tr><td colSpan={4} style={{textAlign:"center" , color:"#ff0000"}}>please add a contact</td></tr>;
        else{
            return contacts.map(c => {
                const {id , name , email} = c;
                return <Contact
                        key={id}
                        id={id}
                        name={name}
                        email={email}/>
            })
        }
    }

    return (
        <section className="table-responsive">
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