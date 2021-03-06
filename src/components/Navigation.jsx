//Package imports
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import React from "react";
import MediaQuery from "react-responsive";

//Style for navigation buttons
const Button = styled.button`
    background:transparent;
    color: #322759 ;
    border:none;
    font-size:1.25em;
    font-family:Helvetica;
    :hover{
        text-decoration:underline 2px;
    }
    @media only screen
    and (max-device-width: 480px){
        gap:none;
        margin-left:auto;
        margin-right:auto;
        display:grid;
        /* grid-template-columns:repeat(5, 1fr); */
    }
`
//Style for navigation bar background
const StyledNavigation = styled.nav`
    background-color: transparent;
    display:grid;
    grid-template-columns:2fr 1fr 2fr;
    @media only screen
    and (max-device-width: 480px){
        grid-template-columns:1fr;
        padding:5%;
        padding-bottom:none;
    }

`

const Section = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2%;
    height:100%;
    //Mobile
    @media only screen
    and (max-device-width: 480px){
        display:grid;
        grid-template-columns:repeat(4, 1fr);

    }
    
`

const Title = styled.button`
    font-size:1.5rem;
    background:transparent;
    color:#322759 ;
    border:none;
    font-weight:bold;
    padding-top:3%;
    padding-bottom:3%;
    :hover{
        text-decoration:underline 2px;
    }
    //Mobile
    @media only screen
    and (max-device-width: 480px){
        height:auto;
    }
`

//Opens new tab without security issues
const openInNewTab = (url) =>{
    window.open(url, "_blank", "noopener");
}

//Logic for navigation bar
const Navigation = () => {

    const history = useHistory();

    const indexRoute=()=> {history.push(`index`);}
    const pythonRoute=()=> {history.push(`python`)}
    const javaRoute=()=>{history.push(`java`)}
    const javascriptRoute=()=>{history.push(`javascript`)}
    const othersRoute=()=>{history.push(`others`)}
    const cppRoute=()=>{history.push(`cpp`)}

    return (
        <StyledNavigation>
            <MediaQuery minWidth={480}>
                <Section>
                    <Button onClick={() => openInNewTab("https://github.com/westshae")}>Github</Button>
                    <Button onClick={() => openInNewTab("mailto:shaewest02@gmail.com")}>Email</Button>
                    <Button onClick={() => openInNewTab("https://discord.com/users/223993583617835009")}>Discord</Button>
                </Section>
                <Section>
                    <Title onClick={indexRoute}>Shae West's Portfolio</Title>
                </Section>
                <Section>
                    <Button onClick={javascriptRoute}>Typescript</Button>
                    <Button onClick={pythonRoute}>Python</Button>
                    <Button onClick={javaRoute}>Java</Button>
                    <Button onClick={cppRoute}>C++</Button>
                    <Button onClick={othersRoute}>Others</Button>
                </Section>
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Title onClick={indexRoute} >Shae West's Portfolio</Title>
                <Section>
                    <Button onClick={javascriptRoute}>Javascript</Button>
                    <Button onClick={pythonRoute}>Python</Button>
                    <Button onClick={javaRoute}>Java</Button>
                    <Button onClick={othersRoute}>Others</Button>                    
                </Section>
            </MediaQuery>

            
        </StyledNavigation>
    )
    
}

export default Navigation;