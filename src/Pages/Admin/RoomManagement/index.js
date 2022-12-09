import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./style.css"
import RoomServices from "../../../services/RoomServices"
import { Button } from "../../../Utils/Button/Button"
import AddShow from "./AddShow"
const componentName = "RoomManagement"
export default function({closeModal}) {
    const [cinemas, setCinemas] = useState([])
    const [showModal, setShowModal] = useState(false)
    const getAllCinema = () =>{
        RoomServices.getCinema().then((res) => {
            setCinemas(res.data)
        }).catch(error =>{
            console.log(error)
        })
    }
    useEffect(() => {
        getAllCinema()
    }, [])
    const navigate = useNavigate();

    return (
        <div className={componentName}>
            <h2 className="text-center">Cinema List</h2>
            <div className="row">
                <table id="users">
    
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {
                            cinemas.map(
                                item => 
                                <tr key={item.id}>
                                    <td>{item.cinemaName}</td>
                                    <td>
                                        <Button type="button" buttonStyle="btn--primary--solid" buttonSize="btn--small"
                                        onClick={() => {
                                                setShowModal(true) 
                                                navigate("",{state:item})
                                            }
                                        }>Add Show</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {showModal && <AddShow closeModal={setShowModal}></AddShow>}
            </div>  
            
        </div>
    )
}