import React from 'react';
// css import
import "./Topbar.css";
// Icons import
import {NotificationsNone, Settings} from '@material-ui/icons';
//img
import Avt from '../../assets/img/male.png';

const Topbar = () => {
  return (
    <div className='topbar'> 
        <div className='topbarWrapper'>
            <div className='topbarLeft'>
                <span className='logo'> HSE ADMIN-END</span>
            </div>
            <div className='topbarRight'>
                <div className='topbarIcon'>
                    <NotificationsNone />
                    <span className='topIconBadge'>8</span>
                </div>
                <div className='topbarIcon'>
                    <Settings />
                </div>
                <img src={Avt} alt='' className='topAvatar' />
            </div>
        </div>
    </div>
  )
}

export default Topbar
