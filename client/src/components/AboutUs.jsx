import React from "react"
import Navbar from "./Navbar"
import AboutCard from "./AboutCard"
import AboutOne from "./Assets/aboutOne.png"
import AboutTwo from "./Assets/aboutTwo.png"
import { AboutContainer, AboutUsPage } from "./AboutUs.styled"

const AboutUs = () => {
  return (
    <AboutUsPage>
      <Navbar/>
      <AboutContainer>
      <AboutCard
        Heading = "Our Mission"
        Text = "To deliver innovative clinical and service experiences, accomplish excellence and establish care team with quality and humanized care."
        Image = {AboutOne}
      />
      <AboutCard
        Heading = "Our Vission"
        Text = "Our vision in Welive health care is to provide world-class healthcare with innovation for all our patients and doctor. "
        Image = {AboutTwo}
      />
      </AboutContainer>
    </AboutUsPage>
  )
}

export default AboutUs