import http from "./http";

export default function deleteContact(id){
    return http.delete(`/contacts/${id}`)
}