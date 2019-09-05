import React, { Component } from 'react';
import headshot from './headshot.jpg'

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <div>
          <img src={headshot} className='main-image' />
        </div>
        <div className="text">
          <p><b> Hi there! </b></p>
        </div>
          <p className="text">
            My name is Danny Park and I am a full stack developer located in the Greater Seattle Region.
          </p>
          <p className="text">
            My passions, other than deveopment/engineering, include the martial art of Brazilian Jiu Jitsu, healthcare/wellness,
            and automotive technology.
          </p>
      </div>
    )
  }
}

export default HomePage;