import "./style.css"
import UserManagement from "./UserManagement";
import FilmManagement from "./FilmManagement";
import { useState } from "react";
import { Button } from "../../Utils/Button/Button";

const componentName = "Admin";
export default function () {

  return (

    <div className={componentName}>
      <div className="text-content">
        <h1>Admin</h1>
      </div>
      <div className="content">
          <div className="user">
            <UserManagement></UserManagement>
          </div>
          <div className="film">
            <FilmManagement></FilmManagement>
          </div>
      </div>
    </div>
  )
}
