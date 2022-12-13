import axios from "axios";

const USER_API_BASE_URL = "http://w42g8.int3306.freeddns.org/api/v1/auth"

class UserServices {
    getUser() {
        return axios.get(USER_API_BASE_URL)
    }
    deleteUser(userID) {
        return axios.delete(USER_API_BASE_URL + "/" + userID)
    }
}

export default new UserServices()