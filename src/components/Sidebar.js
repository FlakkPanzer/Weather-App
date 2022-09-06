import React from "react"

function SidebarContent() {
    <li>
        <img src=""></img>
        <p>{}</p>
    </li>
}


function Sidebar() {
    <div className="sidebar">
        <div className="sidebar-logo">
            <img src=""></img>
            <h1>RealliChili</h1>
        </div>
        <div className="sidebar-content">
            <ul>
                <SidebarContent />
                <SidebarContent />
                <SidebarContent />
                <SidebarContent />
                <SidebarContent />
            </ul>
        </div>
        <div className="sidebar-logout">
            <img src=""></img>
            <button></button>
        </div>
    </div>
}

export default Sidebar;