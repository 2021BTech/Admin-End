import React from 'react'
import "./WidgetsLg.css"
//img
import Avt from '../../assets/img/male.png';

const WidgetsLg = () => {
  const Button = ({type}) =>{
    return <button className={"widgetLgBtn " + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <span className='widgetLmTitle'> Latest Transaction </span>
       <table className='widgetLgTable'>
        <tr className='widgetlgTr'>
          <th className='widgetLgTh'> Customer </th>
          <th className='widgetLgTh'> Date </th>
          <th className='widgetLgTh'> Amount </th>
          <th className='widgetLgTh'> Status </th>
        </tr>
      <tr className='widgetLgTr'>
        <td className='widgetLgUser'>
          <img src={Avt} alt='' className='widgetLgImg'/>
          <span className='widgetLgName'>Becon Daniel</span>
        </td>
        <td className='widgetLgDate'> 18/ October/ 2022 </td>
        <td className='widgetLgAmt'> $300.00 </td>
        <td className='widgetLgStat'>
          <Button type="Approved"/>
        </td>
      </tr>

        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={Avt} alt='' className='widgetLgImg'/>
            <span className='widgetLgName'>Lil Saint</span>
          </td>
          <td className='widgetLgDate'> 18/ October/ 2022 </td>
          <td className='widgetLgAmt'> $600.00 </td>
          <td className='widgetLgStat'>
            <Button type="Pending"/>
          </td>
        </tr>
        
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={Avt} alt='' className='widgetLgImg'/>
            <span className='widgetLgName'>Carter White</span>
          </td>
          <td className='widgetLgDate'> 18/ October/ 2022 </td>
          <td className='widgetLgAmt'> $400.00 </td>
          <td className='widgetLgStat'>
            <Button type="Approved"/>
          </td>
        </tr>
       
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={Avt} alt='' className='widgetLgImg'/>
            <span className='widgetLgName'>James Bond</span>
          </td>
          <td className='widgetLgDate'> 18/ October/ 2022 </td>
          <td className='widgetLgAmt'> $500.00 </td>
          <td className='widgetLgStat'>
            <Button type="Declined"/>
          </td>
        </tr>

        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src={Avt} alt='' className='widgetLgImg'/>
            <span className='widgetLgName'>Victor Bond</span>
          </td>
          <td className='widgetLgDate'> 18/ October/ 2022 </td>
          <td className='widgetLgAmt'> $200.00 </td>
          <td className='widgetLgStat'>
            <Button type="Declined"/>
          </td>
        </tr>
    </table>
    </div>
  )
}

export default WidgetsLg
