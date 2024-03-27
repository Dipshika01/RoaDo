import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar'; 
import TopNotificationBar from './Notification';
import Card from './Card';
import LineChart from './Chart';

function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column',marginLeft:"260px" }}>
        <TopBar />  
<TopNotificationBar />   
<Card />   
 <LineChart/> 
</div>
    </div>
  );
}

export default Dashboard;
