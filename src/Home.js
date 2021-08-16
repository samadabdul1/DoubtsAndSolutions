import './App.css';
import styled from 'styled-components';

import {Link } from "react-router-dom";

export default function App() {
  return (
    
    <Container>
      <AdminContainer>
      <AdminTitle>Student Section</AdminTitle>
        <Link to="/Admin">
            <AdminEnter>Enter </AdminEnter>
        </Link>
      </AdminContainer>
      <UserContainer>
      <UserTitle>Doubts Section</UserTitle>
        <Link to="/User">
            <UserEnter>Enter </UserEnter>
        </Link>
      </UserContainer>
    </Container>
  );
}


const Container=styled.div`
  background-color:#0F1111;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    @media (max-width:850px){
      background-color: #0F1111;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: space-evenly;
    -webkit-justify-content: space-evenly;
    -ms-flex-pack: space-evenly;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    height: 100vh;
    flex-direction: column;

    }
`
const AdminContainer=styled.div`
    background-color:#080909;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:200px;
    width: 200px;
    border: 1px solid black;
    padding: 100px;
    background-color: #080909;
    border-radius: 5px;
    box-shadow: grey 0px 1px 3px;
    text-align: center;
    margin:30px;
    @media (max-width:850px){
        height:100px;
        width: 100px;
    }
`
const AdminTitle = styled.h1`
    /* margin-top: 20px; */
    color: white;
    @media (max-width:850px){
        margin-top:10px;
    }
`
const AdminEnter= styled.button`
    height:30px;
    width: 100px;
    margin-top:50px;
`
const UserContainer=styled.div`
    background-color:#080909;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:200px;
    width: 200px;
    border: 1px solid black;
    padding: 100px;
    background-color: #080909;
    border-radius: 5px;
    box-shadow: grey 0px 1px 3px;
    text-align: center;
    @media (max-width:850px){
        height:100px;
        width: 100px;
    }
`
const UserTitle = styled.h1`
    /* margin-top: 20px; */
    color: white;
    @media (max-width:850px){
        margin-top:10px;
    }
`
const UserEnter= styled.button`
    height:30px;
    width: 100px;
    margin-top:50px;
`