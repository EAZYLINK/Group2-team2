import styled from "styled-components";

export const AboutUsPage = styled.section`
    display:flex;
    flex-direction:column;
    .ourManagement{
        display:flex;
        flex-direction:column;
        margin-top:100px;
        width:100%;
        height:max-height;
        align-items:center;
    }
    .ourManagementCardContain{
        width:80%;
        height:max-height;
        background-color:white;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-wrap:wrap;
        flex-direction:row;
        
    }
    .ourManagementCard{
        width:22%;
        margin:0 0 30px 0;
        border-radius:5px;
        height:300px;
        display-flex;
    }
    .managementDescription{
        border-radius:5px;
        margin-top:-20px;
        background-color:white;
        z-index:1;
        width:100%;
        height:40%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
    .profileImg{
        z-index:5;
        width:100%;
        height:60%;
    }
    .managementHeading{
        font-weight:bolder;
        font-size:25px;
        margin:0 0 30px 0;
    }
    @media screen and (max-width:769px){
        .ourManagementCard{
            width:40%;
        }
    }
    @media screen and (max-width:426px){
        .ourManagementCard{
            width:38%;
            height:180px;
            font-size:10px;
        }
        .ourManagementCardContain{
            justify-content:space-around;
            align-items:center;
            background-color:#0F8AE3;
            width:100%;
            padding:20px 25px 0 25px;
        }
    }
`
export const AboutCardContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:47%;
    @media screen and (max-width:426px){
        width:80%;
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
        margin:150px 0 0 0;
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