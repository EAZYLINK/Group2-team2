import React from "react";
import {
    AboutCardContainer,
    AboutCardHeading,
    AboutCardWrapper,
    AboutCardImage,
    AboutCardText
} from "./AboutUs.styled"

const AboutCard = (props) => {
    return(
        <AboutCardContainer>
            <AboutCardHeading>{props.Heading}</AboutCardHeading>
            <AboutCardWrapper>
                <AboutCardImage
                 src = {props.Image}
                />
                <AboutCardText>{props.Text}</AboutCardText>
            </AboutCardWrapper>
        </AboutCardContainer>
    )
};
export default AboutCard