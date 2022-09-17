import http from "./http";

export default function getOneContact(id){
    return http.get(`/contacts/${id}`)
}