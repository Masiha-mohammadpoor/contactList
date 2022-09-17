import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import {useEffect, useState} from "react";
import {Routes , Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import getAllContacts from "./services/getAllcontacts";
import postContact from "./services/postContact";
import deleteContact from "./services/deleteContact";


const App = () => {

    const [contacts , setContacts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try{
                const {data} = await getAllContacts();
                setContacts([...data])
            }catch(err){

            }
        }
        getData()
        // getAllContacts().then(res => setContacts([...res.data]))
    } , [])

    const addContactHandler = async (value) => {
        try{
            const {data} = await postContact(value);
            console.log(data)
            setContacts([...contacts , data])
        }catch(err){
            console.error(err)
        }

    }

    const deleteContactHandler = async (id) => {
        try{
            await deleteContact(id);
            const filtered = contacts.filter(c => c.id !== id);
            setContacts(filtered);
        }catch(err){
            console.error(err)
        }
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