import { useState, Component, useEffect } from "react";
import './style.css'
import { Button } from "../../../../Utils/Button/Button";
import FilmServices from "../../../../services/FilmServices";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function () {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [rating, setRating] = useState('')
    const [cast, setCast] = useState('')
    const [director, setDirector] = useState('')
    const [description, setDescription] = useState('')
    const [trailerUrl, setTrailerUrl] = useState('')
    const [debut, setDebut] = useState('')
    const [language, setLanguage] = useState('')
    const [time, setTime] = useState('')
    const [rated, setRated] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()
    const location = useLocation()


    const saveOrEditFilm = (e) => {
        e.preventDefault();
        const films = {name, image, rating, cast, director, description, trailerUrl, debut, language, time, rated}
        if(id) {
            FilmServices.editFilm(location.state.id, films).then((res) => {
                navigate('/admin')
                // console.log(id)
            }).catch(error =>{
                console.log(error);
            }) 
            
        }else {
            FilmServices.addFilm(films).then((res) => {
                navigate('/admin')
                // console.log(id)
            }).catch(error => {
                console.log(error);
            })
        }
    }
    
    useEffect(() => {
        if(id){
            FilmServices.getFilmByID(location.state.id).then((res)=>{
                setName(res.data.name)
                setImage(res.data.image)
                setRating(res.data.rating)
                setCast(res.data.cast)
                setDirector(res.data.director)
                setDescription(res.data.description)
                setTrailerUrl(res.data.trailerUrl)
                setDebut(res.data.debut)
                setLanguage(res.data.language)
                setTime(res.data.movieDuration)
                setRated(res.data.rated)
            }).catch(error =>{
                console.log(error);
            })
        }
    }, [])

    const title = () =>{
        if(id) {
            return <h1 className="text-center">Update Film</h1>
        } else{
            return <h1 className="text-center">Add Film</h1>
        }
    }

    return (
        
        <div className="container">
            {
                title()
            }
                <form>
                    <label className='left'>Name: </label>
                    <input 
                        type="text"
                        placeholder='Enter name film'
                        name='name'
                        className='form-control'
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                    />
                    <label className='left'>Image: </label>
                    <input 
                        type="text"
                        placeholder='Enter image'
                        name='image'
                        className='form-control'
                        value={image}
                        onChange = {(e) => setImage(e.target.value)}
                    />
                    <label className='left'>Rating: </label>
                    <input 
                        type="text"
                        placeholder='Enter rating'
                        name='rating'
                        className='form-control'
                        value={rating}
                        onChange = {(e) => setRating(e.target.value)}
                    />
                    <label className='left'>Cast: </label>
                    <input 
                        type="text"
                        placeholder='Enter cast'
                        name='image'
                        className='form-control'
                        value={cast}
                        onChange = {(e) => setCast(e.target.value)}
                    />
                    <label className='left'>Director: </label>
                    <input 
                        type="text"
                        placeholder='Enter director'
                        name='image'
                        className='form-control'
                        value={director}
                        onChange = {(e) => setDirector(e.target.value)}
                    />
                    <label className='left'>Description: </label>
                    <input 
                        type="text"
                        placeholder='Enter description'
                        name='image'
                        className='form-control'
                        value={description}
                        onChange = {(e) => setDescription(e.target.value)}
                    />
                    <label className='left'>TrailerUrl: </label>
                    <input 
                        type="text"
                        placeholder='Enter trailer url'
                        name='image'
                        className='form-control'
                        value={trailerUrl}
                        onChange = {(e) => setTrailerUrl(e.target.value)}
                    />
                    <label className='left'>Debut: </label>
                    <input 
                        type="text"
                        placeholder='Enter release day'
                        name='image'
                        className='form-control'
                        value={debut}
                        onChange = {(e) => setDebut(e.target.value)}
                    />
                    <label className='left'>Language: </label>
                    <input 
                        type="text"
                        placeholder='Enter language'
                        name='image'
                        className='form-control'
                        value={language}
                        onChange = {(e) => setLanguage(e.target.value)}
                    />
                    <label className='left'>Time: </label>
                    <input 
                        type="text"
                        placeholder='Enter time'
                        name='image'
                        className='form-control'
                        value={time}
                        onChange = {(e) => setTime(e.target.value)}
                    />
                    <label className='left'>Rated: </label>
                    <input 
                        type="text"
                        placeholder='Enter rated'
                        name='image'
                        className='form-control'
                        value={rated}
                        onChange = {(e) => setRated(e.target.value)}
                    /> 

                    <Button type="button" buttonStyle="btn--primary--solid" buttonSize="btn--medium"
                    onClick={(e) => saveOrEditFilm(e)}>Save</Button>
                    <Button type="button" buttonStyle="btn--primary--solid" buttonSize="btn--medium"
                    onClick={ (e)=> navigate('/admin')}>Cancel</Button>
                </form>


        </div>
    )
}
