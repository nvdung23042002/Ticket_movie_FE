import axios from "axios";

const ROOM_API_BASE_URL = "http://w42g8.int3306.freeddns.org/test/cinemas"

class RoomServices {
    getCinema() {
        return axios.get(ROOM_API_BASE_URL)
    }
    
}

export default new RoomServices()