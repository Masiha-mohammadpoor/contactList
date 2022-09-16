import http from "./http";

export default function getAllContacts() {
    return http.get("http://localhost:3001/contacts");
}