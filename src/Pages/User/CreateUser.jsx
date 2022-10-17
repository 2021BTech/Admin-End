import React from 'react'
import "./CreateUser.css"

//img
import Avt from "../../assets/img/male.png";
//icon
import { PermIdentity, CalendarToday, MailOutline, LocationSearching, PhoneAndroid, Publish } from '@material-ui/icons';


const CreateUser = () => {
  return (
    <div className='user'> 
      <div className='usertitleContainer'>
        <h1 className='userTitle'> Edit User</h1>
        <button className='userAddButton'> Create New User </button>
      </div>

      <div className='userContainer'>
      <div className='userShow'>
        <div className='userShowTop'>
            <img src={Avt} alt='' className='userShowImg'/>
            <div className='userShowTopTitle'>
                <span className='userShowUsername'> Becon Daniel </span>
                <span className='userShowTitle'>Software Engineer</span>
            </div>
        </div>
        <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
                <PermIdentity className='userShowIcon'/>
                <span className='userShowInfoTitle'>Daffy20</span>
            </div>

            <div className='userShowInfo'>
                <CalendarToday className='userShowIcon'/>
                <span className='userShowInfoTitle'>15-09-1982</span>
            </div>

            <span className='userShowTitle'>Contact Details</span>

            <div className='userShowInfo'>
                <MailOutline className='userShowIcon'/>
                <span className='userShowInfoTitle'>daffydanni@gmail.com</span>
            </div>

            <div className='userShowInfo'>
                <PhoneAndroid className='userShowIcon'/>
                <span className='userShowInfoTitle'> +234-807498-6969 </span>
            </div>

            <div className='userShowInfo'>
                <LocationSearching className='userShowIcon'/>
                <span className='userShowInfoTitle'>No 283, ifite road, Awka </span>
            </div>
        </div>
      </div>
      <div className='userUpdate'>
        <span className='userUpdateTitle'>
            Edit
        </span>
        <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
                <div className='userUpdateItem'>
                    <label> Username </label>
                    <input type="text"  className='userUpdateInput'/>
                </div>

                <div className='userUpdateItem'>
                    <label> Full Name </label>
                    <input type="text"  className='userUpdateInput'/>
                </div>

                <div className='userUpdateItem'>
                    <label> DOB </label>
                    <input type="date"  className='userUpdateInput'/>
                </div>

                <div className='userUpdateItem'>
                    <label> Email </label>
                    <input type="email"  className='userUpdateInput'/>
                </div>

                <div className='userUpdateItem'>
                    <label> Phone No.</label>
                    <input type="number" placeholder='+234-807498-6969' className='userUpdateInput'/>
                </div>

                <div className='userUpdateItem'>
                    <label> Address </label>
                    <input type="text"  className='userUpdateInput'/>
                </div>
            </div>
            <div className='userUpdateLeft'>
                <div className='userUpdateupload'>
                    <img src={Avt} alt=""className='userupdateImg' />
                    <label htmlFor='file'><Publish/></label>
                    <input type="file" id='file' className='iconUpdateDisplay' />
                </div>
            </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default CreateUser
