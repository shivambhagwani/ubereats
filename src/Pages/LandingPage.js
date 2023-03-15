import React, { Component } from 'react'
import LandingPageCarousel from '../Components/LandingPageCarousel'
import LandingPageNav from '../Components/LandingPageNav'
import LandingPagePincodeForm from '../Components/LandingPagePincodeForm'


export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <LandingPageNav/>
        <LandingPageCarousel/>
        <LandingPagePincodeForm/>
      </div>
    )
  }
}
