import http from "./http";

export default function postContact(data){
    return http.post("http://localhost:3001/contacts" , data);
}