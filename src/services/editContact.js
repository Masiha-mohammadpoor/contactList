import http from "./http";

export default function editContact(id , data){
    return http.put(`http://localhost:3001/contacts/${id}` , data);
}