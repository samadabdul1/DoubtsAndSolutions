import React from 'react'
import styled from 'styled-components';
import {Link } from "react-router-dom";
import {Tabs,Tab,AppBar} from "@material-ui/core";
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import CustomizedDialogs from '../component/Dialog'
import Doubt from '../User/Doubt';
import {db} from '../Firebase'
export default function Admin() {
    const [value, setValue] = React.useState(0)
    const handkeTabs=(e,value)=>{
        setValue(value)
    }
    const [members, setMembers] = React.useState([]);
    const getMembers=()=>{
        db.collection('members').onSnapshot((snapshot)=>{
        const tempItems=snapshot.docs.map((doc)=>({
            id: doc.id,
            member:doc.data()
        }))
        setMembers(tempItems);
        })
    }
    React.useEffect(() => {
        getMembers();
        
      }, [])
    return (
        <Container>
            <HomeButtonDiv>
                <Main>
                    <Header>
                        <Link to="/">
                                <HomeButton><HomeLogo src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png"/></HomeButton>
                        </Link>
                        <CustomizedDialogs>
                            <Doubt/>
                        </CustomizedDialogs>
                    </Header>
                    <AppBar position="static" style={{backgroundColor:"black"}}>
                        <Tabs value={value} onChange={handkeTabs} orientation="vertical">
                            <Tab label="Resolved Doubts"/>
                            <Tab label="Pending Doubts"/>
                        </Tabs>
                    </AppBar>
                </Main>
                
                {value===0 && <TabOne member={members}/>}
                {value===1 && <TabTwo/>}
            </HomeButtonDiv>
        
        </Container>
      );
}
    
    
const Container=styled.div`
    background-color:#FFF;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    flex-direction: row;
`
const HomeButton=styled.button`
    height: 50px;
    width: 50px;
    /* background-color:#0F1111; */
    border:none;
`
const HomeLogo=styled.img`
    height: 50px;

`
const HomeButtonDiv=styled.div`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: row;
`
const Header=styled.div`
    background-color:#FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`
const Main=styled.div`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    flex-direction: column;
`
