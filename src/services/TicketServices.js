import axios from "axios";

const TICKET_API_BASE_URL = "http://localhost:8080/test/tickets"

class TicketServices {
    addShow(shows) {
        return axios.post("http://localhost:8080/test/tickets", shows)
    }
    
}

export default new TicketServices()