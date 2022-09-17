import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import NotFound from "./components/NotFound";
import EditContact from "./components/EditContact";


const routes = [
    {path : "/" , element : <ContactList/>},
    {path : "/add" , element : <AddContact/>},
    {path : "/contact/:id" , element : <ContactDetail/>},
    {path : "/edit/:id" , element : <EditContact/>},
    {path : "*" , element : <NotFound/>},
];

export default routes;