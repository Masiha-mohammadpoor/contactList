import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import {useState} from "react";

const App = () => {

    const [contacts , setContacts] = useState([]);


    const addContactHandler = (value) => {
        setContacts([...contacts , value]);
    }


    return (
        <> 
        <AddContact onClick={addContactHandler}/>
        <ContactList contacts={contacts}/>
        </>
    );
}
 
export default App;