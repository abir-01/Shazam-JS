import React from 'react'
import './sidebar1.css'
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const Sidebar1 = () => {

    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className={`sidebarList ${collapsed && 'collapsed'}`}>

                        <li className="mb-3">
                            {collapsed ? <>Search Icon</> : <TextField id="outlined-basic" label="Search Modules" variant="outlined" size="small" onChange={(e) => setSearch(e.target.value)}
                            />}


                        </li>

                        {
                            search ? searchedMenu.map((val) => (
                                <NavLink to={val.routing} className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
                                    <li className="sidebarListItem">
                                        {val.icon} {!collapsed && <>&nbsp;&nbsp;{val.name}</>}
                                    </li>
                                </NavLink>
                            )) :
                                menuItems.map((val) => (
                                    <NavLink to={val.routing} className={({ isActive }) => (isActive ? 'link-active' : 'link')}>
                                        <li className="sidebarListItem">
                                            {val.icon} {!collapsed && <>&nbsp;&nbsp;{val.name}</>}
                                        </li>
                                    </NavLink>
                                ))

                        }

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar1


