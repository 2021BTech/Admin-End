import React from 'react'
import "./Home.css";
// component
import Featuredinfo from '../../Components/Featureinfo/Featuredinfo';
import Charts from '../../Components/Charts/Charts';
import { userData } from '../../Dummydata';
import WidgetsSm from '../../Components/WidgetsSmall/WidgetsSm';
import WidgetsLg from '../../Components/WidgetsLg/WidgetsLg';

const Home = () => {
  return (
    <div className='home'>
      <Featuredinfo/>
      <Charts data={userData} title="Sales Analytics" grid/>
      <div className='homeWidgets'>
        <WidgetsSm/>
        <WidgetsLg/>
      </div>
    </div>
  )
}

export default Home
