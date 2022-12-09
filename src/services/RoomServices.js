import axios from "axios";

const ROOM_API_BASE_URL = "http://localhost:8080/test/cinemas"

class RoomServices {
    getCinema() {
        return axios.get(ROOM_API_BASE_URL)
    }
    
}

export default new RoomServices()