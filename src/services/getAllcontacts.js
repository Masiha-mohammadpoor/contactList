import http from "./http";

export default function getAllContacts() {
    return http.get("/contacts");
}