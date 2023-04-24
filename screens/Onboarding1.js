import { View, Text } from 'react-native'
import React from 'react'
import Onboarding from '../components/Onboarding'

const Onboarding1 = () => {
  return (
    <Onboarding 
      upperText={"You can get all details about carrot freshness"}
      lowerText={"We provide best mobile app to detect carrot vegetable freshness according to the color, shape, texture, and etc."} 
      navgigationScreen={"Onboarding2"} 
    />
  )
}

export default Onboarding1