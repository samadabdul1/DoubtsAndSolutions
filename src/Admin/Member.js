import React from 'react'
import styled from 'styled-components';
export default function Member({name,email,question,answer}) {
    
    return (
        <Container>
            <h4>Doubt asked by:</h4>
            <Name>
                {name}
            </Name>
            <Email>
                {email}
            </Email>
            <h4>Question</h4>
            <RoleDiv>
                
                <Role>
                    {question}
                </Role>
            </RoleDiv>
            <h4>Answer</h4>
            <RoleDiv>
                <Role>
                    {answer}
                </Role>
            </RoleDiv>
        </Container>
    )
}
const Container=styled.div`
    margin-bottom: 10px;
    width: 500px;
    height: auto;
    border:1px solid black;
    border-radius: 10px;
    padding:10px;
    display:flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
`
const Name=styled.h2`

`
const Email=styled.h2`
    font-weight:100;
    margin-bottom: 35px;
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