import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <Avatar src="https://pbs.twimg.com/profit_images/1020939891457241088/fcbu814K_400x400.jpg"/>
            </div>
            
            <div className='sidebar__headerRight'>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>

                <IconButton>
                    <ChatIcon />
                </IconButton>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            <div className="sidebar__search"></div>
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat"
                    type="text" />
                </div>
            <div className="sidebar__chats">
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar 