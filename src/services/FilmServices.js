import axios from 'axios';

class FilmServices {
    getFilms() {
        return axios.get("http://localhost:8080/test/movies/toprating")
    }
}
export default new FilmServices;