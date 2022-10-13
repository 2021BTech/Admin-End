import React from 'react';
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className='topbar'> 
        <div className='topbarWrapper'>
            <div topbarLeft>
                <span className='logo'> HSE ADMIN-END</span>
            </div>
            <div topbarRight> Right </div>
        </div>
      
    </div>
  )
}

export default Topbar
