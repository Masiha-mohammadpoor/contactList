import http from "./http";

export default function deleteContact(id){
    return http.delete(`http://localhost:3001/contacts/${id}`)
}