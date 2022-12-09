import "./style.css"
// import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, Component, useEffect } from "react";
import { Button } from "../../../Utils/Button/Button";
import FilmServices from "../../../services/FilmServices";
import { useNavigate } from "react-router-dom";
const componentName = "FilmManagement";

// xoa nhung khong cap nhat luon tren man hinh
export default function () {
    const [film, setFilm] = useState([])
    const navigate = useNavigate()

    const getAllFilms = () => {
        FilmServices.getFilm().then((res) => {
            setFilm(res.data)
        }).catch(error => {
            console.log(error);
        }) 
    }
    const deleteFilm = (filmID) => {
            FilmServices.deleteFilm(filmID).then((res) => {
            getAllFilms()
        }).catch(error => {
            console.log(error); 
        }) 
    } 
    useEffect(() => {
        getAllFilms()
    }, [])
    return (
        <div className={componentName}>
            <div className="add-film">
                <Button type="button" buttonStyle="btn--primary--solid" buttonSize="btn--small"
                onClick={() => navigate("/admin/add-film")}>Add Film</Button>
            </div>
            <h2 className="text-center">Film List</h2>
            <div className="row">
                <table id="films">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>name</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            film.map(
                                item =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <Button type="button" buttonStyle="btn--primary--solid" buttonSize="btn--small"
                                            onClick={(e) => deleteFilm(item.id)}>Delete</Button>
                                            <Button type="button" buttonStyle="btn--primary--solid" buttonSize="btn--small"
                                            onClick={() => navigate('/admin/edit-film/${item.id}', {state: item})}>Edit</Button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}
