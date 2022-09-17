import http from "./http";

export default function postContact(data){
    return http.post("/contacts" , data);
}