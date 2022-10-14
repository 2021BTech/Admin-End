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
                <span className='logo'> BONITAS GROUP</span>
            </div>
            <div className='topbarRight'>
                <div className='topbarIcon'>
                    <NotificationsNone />
                    <span className='topIconBadge'>8</span>
                </div>
                <div className='topbarIcon'>
                    <Settings />
                </div>
                <div>
                    <img src={Avt} alt='' className='topAvatar' />
                    <small> Becon Daniel </small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar
