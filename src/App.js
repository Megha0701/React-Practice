import React from 'react'
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <div>Personal Digital Assistance</div>
      <ProfileCard title="Alexa" handle="@alexa99"/>
      <ProfileCard title="Cortana" handle="@cortana31"/>
      <ProfileCard title="Siri" handle="@siri01"/>
    </div>
  )
}

export default App;
