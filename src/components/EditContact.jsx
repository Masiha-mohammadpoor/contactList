import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState , useEffect} from 'react';
import {Link , useNavigate , useParams} from "react-router-dom";
import getOneContact from "../services/getOneContact";
import editContact from "../services/editContact";

const EditContact = () => {


    const [value , setValue] = useState({
        name:"",
        email:"",
        phone:""
    });

    const navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
        getOneContact(+(params.id))
        .then(res => {
            const {name , email , phone} = res.data;
            setValue({name , email , phone});
        })   
    } , [])


    const changeHandler = (e) => {
        setValue({...value , [e.target.name] : e.target.value});
    }

    const editContactHandler = async (id , value) => {
        try{
            await editContact(id , value);
        }catch(err){
            console.error(err)
        }
    }


    const submitHandler = () => {
        if(!value.name || !value.email || !value.phone) alert("please fill all field");
        else{
        editContactHandler(params.id , value);
        setValue({name:"",email:"",phone:""});
        navigate("/");
        }
    }


    return (
        <section className="AddContactForm">
            <Form className="form">
                <Form.Control 
                type="text" 
                name="name" 
                placeholder='name...' 
                autoComplete="off"
                value={value.name}
                onChange={changeHandler} />

                <Form.Control 
                type="email" 
                name="email" 
                placeholder='email...' 
                autoComplete="off"
                value={value.email} 
                onChange={changeHandler} />

                <Form.Control 
                type="number" 
                name="phone" 
                placeholder='phone...' 
                autoComplete="off"
                value={value.phone} 
                onChange={changeHandler} />

                <Button variant="success" className='w-100' onClick={submitHandler}>Edit Contact</Button>
                <Link to="/">go to contact List</Link>
            </Form>
        </section>
    );
}

export default EditContact;