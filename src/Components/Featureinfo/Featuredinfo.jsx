import React from 'react'
import './FeaturedInfo.css'
//icons
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

const Featuredinfo = () => {
  return (
    <div className='featured'>
    {/* first featured item */}
      <div className='featuredItem'>
        <span className='featuredtitle'>Revenue</span>
        <div className='featuredMoneycontainer'>
            <span className='featuredMoney'>$2,400</span>
            <span className='featuredMoneyrate'>-11.4 <ArrowDownward className='featuredIcon negative' /></span>
        </div>
        <span className='featuredSub'> Compared to last month </span>
      </div>
      {/* Second feature */}
      <div className='featuredItem'>
        <span className='featuredtitle'>Sales</span>
        <div className='featuredMoneycontainer'>
            <span className='featuredMoney'>$5,400</span>
            <span className='featuredMoneyrate'>-1.4 <ArrowDownward className='featuredIcon negative'W/></span>
        </div>
        <span className='featuredSub'> Compared to last month </span>
      </div>
      {/* Third featured */}
      <div className='featuredItem'>
        <span className='featuredtitle'>Cost</span>
        <div className='featuredMoneycontainer'>
            <span className='featuredMoney'>$2.00</span>
            <span className='featuredMoneyrate'>+1.4 <ArrowUpward className='featuredIcon'/></span>
        </div>
        <span className='featuredSub'> Compared to last month </span>
      </div>
    </div>
  )
}

export default Featuredinfo
