import React from 'react'
import "./WidgetsSm.css"
//img
import Avt from '../../assets/img/male.png';

//icons
import { Visibility } from '@material-ui/icons'

const WidgetsSm = () => {
  return (
    <div className='WidgetSm'>
      <span className='widgetSmTitle'> New Users</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItems'>
            <img src={Avt} alt='' className='widgetSmImg'/>
            <div className='WidgetSmUser'>
                <span className='widgetSmUsername'> Becon Daniel</span>
                <span className='widgetSmUsertitle'> Software Engineer</span>
            </div>
            <button className='widgetSmBtn'>
                <Visibility className='widgetSmIcon'/>
                Preview
            </button>
        </li>

        <li className='widgetSmListItems'>
            <img src={Avt} alt='' className='widgetSmImg'/>
            <div className='WidgetSmUser'>
                <span className='widgetSmUsername'> Victor bands</span>
                <span className='widgetSmUsertitle'> Mobile Developer</span>
            </div>
            <button className='widgetSmBtn'>
                <Visibility className='widgetSmIcon'/>
                Preview
            </button>
        </li>

        <li className='widgetSmListItems'>
            <img src={Avt} alt='' className='widgetSmImg'/>
            <div className='WidgetSmUser'>
                <span className='widgetSmUsername'> James Bond</span>
                <span className='widgetSmUsertitle'> Product Manager</span>
            </div>
            <button className='widgetSmBtn'>
                <Visibility className='widgetSmIcon'/>
                Preview
            </button>
        </li>

        <li className='widgetSmListItems'>
            <img src={Avt} alt='' className='widgetSmImg'/>
            <div className='WidgetSmUser'>
                <span className='widgetSmUsername'> Carter White</span>
                <span className='widgetSmUsertitle'> DevOps Engineer</span>
            </div>
            <button className='widgetSmBtn'>
                <Visibility className='widgetSmIcon'/>
                Preview
            </button>
        </li>

        <li className='widgetSmListItems'>
            <img src={Avt} alt='' className='widgetSmImg'/>
            <div className='WidgetSmUser'>
                <span className='widgetSmUsername'> Lil Saint </span>
                <span className='widgetSmUsertitle'> Cloud Engineer</span>
            </div>
            <button className='widgetSmBtn'>
                <Visibility className='widgetSmIcon'/>
                Preview
            </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetsSm
