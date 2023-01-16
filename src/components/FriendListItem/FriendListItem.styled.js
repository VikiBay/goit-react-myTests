import styled from 'styled-components';

export const CardWrapper = styled.div`
display: flex;
border: 1px solid lightgray;
padding: 10px;
border-radius: 5px;
height: 80px;
`

export const Status = styled.span`
border: 1px solid lightgray;
border-radius: 50%;
margin: auto 0;
height: 20px;
width: 20px;
background-color: ${props => props.isActive ? "green" : "red"};
`

export const Avatar = styled.img`
display: block;
object-fit: cover;
border: 1px solid lightgray;
border-radius: 15px;
margin-left: 10px;
width: 80px;
`
export const Name = styled.p`
/* margin-left: 10px; */
margin: auto 0 auto 10px;
font-weight: bold;
`