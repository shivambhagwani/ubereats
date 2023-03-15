import React, { Component } from 'react'
import LandingPageCarousel from '../Components/LandingPageCarousel'
import LandingPageNav from '../Components/LandingPageNav'
import LoginPagePincodeClass from '../Components/LoginPagePincodeClass'


export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <LandingPageNav/>
        <LandingPageCarousel/>
        {/* <LandingPagePincodeForm/> */}
        <LoginPagePincodeClass/>
      </div>
    )
  }
}
