import styled from 'styled-components';


export const CardWrapper = styled.div`
padding: 8px;
width: 320px;
border: 1px solid green;

`

export const Image = styled.img`
display: block;
width: 100%;
height: 240px;
object-fit: cover;
border: 1px solid green;
`

export const ProfileInfo = styled.ul`
border: 1px solid yellow;
display: flex;
gap: 8px;
list-style: none;
`

export const InfoBlock = styled.li`
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
svg {
    color: blue;
}
`

export const BadgeList = styled.div`
display: flex;
gap: 16px;
padding: 8px 0;
`

export const Badge = styled.span`
border: 1px solid black;
border-radius: 10px;
padding: 8px;
/* background-color: ${props => {return props.isActive ? 'red' : 'grey'}}; */

/* background-color: ${props => { 
    let color;
    switch (props.variant){
    case "Easy": color = "green";
    break;
    case "Medium": color  = "blue";
    break;
    case "Hard": color = "red";
    break;
    default: 
    throw new Error('Unsupported variant prop');
    }
    return props.isActive ? color : "lightgrey";
    }}; */

background-color: ${props => { 

    const defaultColor = "lightgrey";

    switch (props.variant){

    case "Easy": 
    return props.isActive ? "green" : defaultColor;
    
    case "Medium": 
    return props.isActive ? "blue" : defaultColor;
    
    case "Hard": 
    return props.isActive ? "red" : defaultColor;
    
    default: 
    throw new Error('Unsupported variant prop');
    }
    }};

color: ${props => {
    return props.isActive ? "white" : "black"} };

`

