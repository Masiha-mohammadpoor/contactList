import http from "./http";

export default function getOneContact(id){
    return http.get(`http://localhost:3001/contacts/${id}`)
}