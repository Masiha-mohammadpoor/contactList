import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import {useState} from "react";
import {Routes , Route} from "react-router-dom";
import NotFound from "./components/NotFound";

const App = () => {

    const [contacts , setContacts] = useState([]);


    const addContactHandler = (value) => {
        setContacts([...contacts , value]);
    }

    const deleteContactHandler = (id) => {
        const filteredContacts = contacts.filter(c => c.id !== id);
        setContacts(filteredContacts);
    }


    return (
        <>
        <Routes>
            <Route path="/" element={<ContactList contacts={contacts} onDelete={deleteContactHandler}/>}/> 
            <Route path="/add" element={<AddContact onClick={addContactHandler}/>}/>
            <Route path="contact/:id" element={<ContactDetail/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </>
    );
}
 
export default App;