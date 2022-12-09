import axios from "axios";

const TICKET_API_BASE_URL = "http://localhost:8080/test/tickets"

class TicketServices {
    addShow(show) {
        return axios.post(TICKET_API_BASE_URL, )
    }
    
}

export default new TicketServices()