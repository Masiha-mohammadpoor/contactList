import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import {Routes , Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import EditContact from "./components/EditContact";


const App = () => {

    // const [contacts , setContacts] = useState([]);

    // useEffect(() => {
    //     const getData = async () => {
    //         try{
    //             const {data} = await getAllContacts();
    //             setContacts([...data])
    //         }catch(err){

    //         }
    //     }
    //     getData()
    // } , [])

    // const addContactHandler = async (value) => {
    //     try{
    //         const {data} = await postContact(value);
    //         console.log(data)
    //         setContacts([...contacts , data])
    //     }catch(err){
    //         console.error(err)
    //     }
    // }

    // const deleteContactHandler = async (id) => {
    //     try{
    //         await deleteContact(id);
    //         const filtered = contacts.filter(c => c.id !== id);
    //         setContacts(filtered);
    //     }catch(err){
    //         console.error(err)
    //     }
    // }

    // const editContactHandler = async (id , value) => {
    //     try{
    //         await editContact(id , value);
    //         const {data} = await getAllContacts();
    //         setContacts([...data]);
            
    //     }catch(err){
    //         console.error(err)
    //     }
    // }

    return (
        <>
        <Routes>
            <Route path="/" element={<ContactList/>}/> 
            <Route path="/add" element={<AddContact/>}/>
            <Route path="/contact/:id" element={<ContactDetail/>}/>
            <Route path="/edit/:id" element={<EditContact/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </>
    );
}
 
export default App;