import React from 'react'
import styled from 'styled-components';
import {db} from '../Firebase';
export default function UserInvitation({name,email,question,id}) {
    const [answer, setAnswer] = React.useState("")
    const deleteInvite=async()=>{
            await db.collection('doubt').doc(id).delete();
    }
    const addToMembers=()=>{
        const members=db.collection("members").doc(id);
        members.get()
        .then((doc)=>{
            db.collection("members").doc(id).set({
                    name:name,
                    email:email,
                    question:question,
                    answer:answer
                })
        })
    }
    
    
    return (
        <Container>
            <InviteDetails>
                <Name>
                    Name:{name}
                </Name>
                <Email>
                    Email:{email}
                </Email>
                <Role>
                    Question:<Question>{question}</Question>
                </Role>
                <h4>Type Answer Here:</h4>
                <Input value={answer} onChange={(e)=>setAnswer(e.target.value)} rows="5"></Input>
            </InviteDetails>
            <AcceptOrDecline>
                <Accept onClick={()=>{
                    
                    addToMembers()
                    deleteInvite()
                    
                    }}>Answer</Accept>
                <Decline onClick={deleteInvite}>Decline</Decline>
            </AcceptOrDecline>    
        </Container>
    )
}
const Container=styled.div`
    width: 500px;
    height: auto;
    display: flex;
    border:1px solid black;
    border-radius: 10px;
    flex-direction: column;
    justify-content:space-between;
    margin-bottom:10px;
`
const Name=styled.h3``
const Email=styled.h3`
    
`
const Role=styled.h3`
    height: auto;
    width: auto;
    margin-bottom:150px;
    word-wrap: break-word;
`
const Accept=styled.button`
    height:30px;
    width:90px;
    background-color: #00B526;
    color: white;
    border-radius: 10px;
`
const Decline=styled.button`
    height:30px;
    width:90px;
    background-color:#B40000;
    color: white;
    border-radius: 10px;

`
const InviteDetails=styled.div`
    padding: 10px;
    margin-bottom:10px;
    display: flex;
    flex-direction: column;

`
const AcceptOrDecline=styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom:10px;
`

const Question=styled.p`
    width: 500px;
    height: auto;
`

const Input=styled.textarea`
    height:200px;
    width:auto;
    padding:10px;
`