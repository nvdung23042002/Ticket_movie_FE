import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/test/movies"

class FilmServices {
    getFilm() {
        return axios.get(USER_API_BASE_URL)
    }
    addFilm(film) {
        return axios.post("http://localhost:8080/test/movies", film)
    }
    getFilmByID(filmID) {
        return axios.get("http://localhost:8080/test/movies/" + filmID)
    }
    editFilm(filmID, film) {
        return axios.put("http://localhost:8080/test/movies/"+ filmID, film)
    }
    deleteFilm(filmID) {
        return axios.delete("http://localhost:8080/test/movies/" + filmID)
    }
}

export default new FilmServices()