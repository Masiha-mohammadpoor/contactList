import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {Link , useNavigate} from "react-router-dom";
import postContact from "../services/postContact";

const AddContact = () => {

    const [value , setValue] = useState({
        name:"",
        email:"",
        phone:""
    });

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setValue({...value , [e.target.name] : e.target.value});
    }

    const addContactHandler = async (value) => {
        try{
            await postContact(value);
        }catch(err){
            console.error(err)
        }
    }


    const submitHandler = () => {
        if(!value.name || !value.email || !value.phone) alert("please fill all field");
        else{

        addContactHandler(value);
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

                <Button variant="success" className='w-100' onClick={submitHandler}>Add Contact</Button>
                <Link to="/">go to contact List</Link>
            </Form>
        </section>
    );
}

export default AddContact;