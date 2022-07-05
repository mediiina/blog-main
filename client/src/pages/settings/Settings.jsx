import React from 'react'
import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://www.hocu.ba/wp-content/uploads/2022/03/travel-world.jpg" alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user-plus"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder=""/>
            <label>Email</label>
            <input type="email" placeholder=""/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit" type="submit">Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}
