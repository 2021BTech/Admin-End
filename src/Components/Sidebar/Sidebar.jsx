import React from 'react';
//css component
import './Sidebar.css';
//icon component
import {Home, Timeline, TrendingUp, People, LocalCafe,LocalAtm, Assessment, Email, Feedback, Message, Report, LocalMall } from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
      {/* sidebar 1 */}
        <div className='sidebarMeun'>
            <h3 className='sidebarTitle'>Dashboard</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem active'>
                    <Home className='sidebarIcons'/>
                    Home
                </li>
                <li className='sidebarListItem'>
                    <Timeline className='sidebarIcons'/>
                    Analytic
                </li>
                <li className='sidebarListItem'>
                    <TrendingUp className='sidebarIcons'/>
                    Sales
                </li>
            </ul>
        </div>
        {/* Sidebar 2 */}
        <div className='sidebarMeun'>
            <h3 className='sidebarTitle'>Quick Menu</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    <People/>
                    User
                </li>
                <li className='sidebarListItem'>
                    <LocalCafe/>
                    Product
                </li>
                <li className='sidebarListItem'>
                    <LocalAtm/>
                    Transaction
                </li>
                <li className='sidebarListItem'>
                    <Assessment/>
                    Report
                </li>
            </ul>
        </div>
        {/* sidebar 3 */}
        <div className='sidebarMeun'>
            <h3 className='sidebarTitle'>Notifications</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    <Email className='sidebarIcons'/>
                    Mail
                </li>
                <li className='sidebarListItem'>
                    <Feedback className='sidebarIcons'/>
                    Feedback
                </li>
                <li className='sidebarListItem'>
                    <Message className='sidebarIcons'/>
                    Messages
                </li>
            </ul>
        </div>
        {/* sidebar 4 */}
        <div className='sidebarMeun'>
            <h3 className='sidebarTitle'>Staffs</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    <LocalMall className='sidebarIcons'/>
                    Manage
                </li>
                <li className='sidebarListItem'>
                    <Timeline className='sidebarIcons'/>
                    Analytic
                </li>
                <li className='sidebarListItem'>
                    <Report className='sidebarIcons'/>
                    Report
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
