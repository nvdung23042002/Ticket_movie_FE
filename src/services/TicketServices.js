import axios from "axios";

const TICKET_API_BASE_URL = "http://w42g8.int3306.freeddns.org/test/tickets"

class TicketServices {
    addShow(shows) {
        return axios.post(TICKET_API_BASE_URL, shows)
    }
    
}

export default new TicketServices()