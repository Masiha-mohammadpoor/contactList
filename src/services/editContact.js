import http from "./http";

export default function editContact(id , data){
    return http.put(`/contacts/${id}` , data);
}