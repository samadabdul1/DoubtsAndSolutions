import React from 'react'
import styled from 'styled-components';
export default function PendingDoubt({name,email,question}) {
    
    return (
        <Container>
            <Name>
                {name}
            </Name>
            <Email>
                {email}
            </Email>
            <RoleDiv>
                <Role>
                    {question}
                </Role>
            </RoleDiv>
        </Container>
    )
}
const Container=styled.div`
    background-color:white;
    margin-bottom: 10px;
    width: auto;
    height: auto;
    border:1px solid black;
    border-radius: 10px;
    padding:10px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Name=styled.h2`

`
const Email=styled.h2`
    font-weight:100;
`
const Role=styled.h2`
    height: auto;
    width:500px;
    word-wrap: break-word;    
`
const RoleDiv=styled.div`
    margin-top:10px;
    background-color:#EEE5D6;
    height: auto;
    width:auto;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:10px;
`