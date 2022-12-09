import { useState, Component, useEffect } from "react";
import "./style.css"
import UserServices from "../../../services/UserServices";
import { Button } from "../../../Utils/Button/Button";
import {useLocation} from 'react-router-dom';

const componentName = "UserManagement";
export default function () {
    const [users, setUsers] = useState([])
    const getAllUser = () =>{
        UserServices.getUser().then((res) => {
            setUsers(res.data)
        }).catch(error =>{
            console.log(error)
        })
    }
    const deleteUser = (idUser) => {
        UserServices.deleteUser(idUser).then((res) => {
            getAllUser()
        }).catch(error => {
            console.log(error); 
        })
    }
    useEffect(() => {
        getAllUser()
    }, [])

    const location = useLocation();

    return (
        <div className={componentName}>
            <h2 className="text-center">User List</h2>
            <div className="row">
                <table id="users">

                    <thead>
                        <tr>
                            <th>Full name</th>
                            <th>Birthday</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map(
                                item => 
                                <tr key={item.id}>
                                    <td>{item.fullName}</td>
                                    <td>{item.birthDay}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <Button type="button" buttonStyle="btn--primary--solid" buttonSize="btn--small"
                                        onClick={(e) => deleteUser(item.id)}>Delete</Button>
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
