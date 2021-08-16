import React from 'react'
import styled from 'styled-components';
import {db} from '../Firebase'
import {Link } from "react-router-dom";
import UserInvitation from './UserInvitation'
export default function User() {
    const [pendingDoubt, setPendingDoubt] = React.useState([])
    const getDoubt =()=>{
        db.collection('doubt').onSnapshot((snapshot)=>{
            let tempDoubt =[]
            tempDoubt=snapshot.docs.map((doc)=>(
                {
                    id:doc.id,
                    doubt:doc.data()
                }
                
            ));
            
            setPendingDoubt(tempDoubt);
        })
    }
    React.useEffect(() => {
        getDoubt()
    }, [])
    return (
        <Container>
            <Link to="/">
                <HomeButton><HomeLogo src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png"/></HomeButton>
            </Link>
            <Invitation>
            {
            pendingDoubt.map((data)=>(
                    <UserInvitation
                        name={data.doubt.name}
                        email={data.doubt.email}
                        question={data.doubt.question}
                        id={data.id}
                    />
                ))
            }
            
            </Invitation>
        </Container>
      );
}
    
    
const Container=styled.div`
    background-color:#EFEFEF;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
`
const HomeButton = styled.button`
    border:none;
`
const HomeLogo=styled.img`
    height: 50px;

`
const Invitation=styled.div`
    
`