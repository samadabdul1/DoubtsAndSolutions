import React from 'react'
import styled from 'styled-components';
import {db} from '../Firebase'
import Member from './Member'
export default function TabOne({member}) {
    const [members, setMembers] = React.useState([])
    const getCount=() =>{
        let count=0;
        member.forEach((item)=>{
            count+=item.members;
        })
        return count;
    }
    const getMembers =()=>{
        db.collection('members').onSnapshot((snapshot)=>{
            let tempMembers =[]
            tempMembers=snapshot.docs.map((doc)=>(
                {
                    id:doc.id,
                    member:doc.data()
                }
            ));
            setMembers(tempMembers);
        })
    }
    React.useEffect(() => {
        getMembers()
    }, [])
    return (
        <Container>
            <CountOfMembers>
                {getCount}
            </CountOfMembers>
            {
                members.map((data)=>(
                    <Member
                        name={data.member.name}
                        email={data.member.email}
                        question={data.member.question}
                        answer={data.member.answer}
                    />
                ))
            }
            
            
        </Container>
    )
}
const Container = styled.div`
    margin:50px;

`
const CountOfMembers=styled.h1`

`