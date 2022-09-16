import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {Link , useNavigate} from "react-router-dom";

const AddContact = ({onClick}) => {

    const [value , setValue] = useState({
        name:"",
        email:""
    });

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setValue({...value , [e.target.name] : e.target.value});
    }

    const submitHandler = () => {
        if(!value.name || !value.email) alert("please fill all field");
        onClick({...value , id:new Date().getTime()});

        setValue({name:"",email:""});
        navigate("/")
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

                <Button variant="success" className='w-100' onClick={submitHandler}>Add Contact</Button>
                <Link to="/">go to contact List</Link>
            </Form>
        </section>
    );
}

export default AddContact;