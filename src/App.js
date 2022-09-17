import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import {Routes , Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import EditContact from "./components/EditContact";


const App = () => {

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