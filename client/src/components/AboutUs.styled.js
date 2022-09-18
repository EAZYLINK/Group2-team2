import styled from "styled-components";

export const AboutUsPage = styled.section`
    display:flex;
    flex-direction:column;
`
export const AboutCardContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:47%;
    @media screen and (max-width:426px){
        width:80%;
        // margin:0 0 0 10%;
    }
`
export const AboutContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin:150px 10% 0 10%;
    align-items:center;
    width:80%;
    @media screen and (max-width:426px){
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        width:100%;
    }
`
export const AboutCardHeading = styled.h1`
    display:flex;
    font-weight:bolder;
    margin:0 0 10px 0;
    @media screen and (max-width:769px){
       justify-self:center;
       margin:20px 0 20px 0;
    }
`
export const AboutCardWrapper = styled.div`
    display:flex;
    background-color:#0F8AE3;
    display:flex;
    justify-content:space-around;
    height:250px;
    padding:0 30px 0 30px;
    align-items:center;
    @media screen and (max-width:769px){
        display:flex;
        flex-direction:column;
        height:300px;
        padding:0 0 0 0;
    }
    // @media screen and (max-width:426px){
    //     height:700px;
    // }
`
export const AboutCardImage = styled.img`
    width:30%;
    height:55%;
    @media screen and (max-width:769px){
        width:60%;
        height:120px;
    }
`
export const AboutCardText = styled.p`
    color:white;
    width:54%;
    @media screen and (max-width:769px){
        width:90%;
    }
`


