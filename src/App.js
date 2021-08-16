import './App.css';
import styled from 'styled-components';
import Admin from '../src/Admin/Admin'
import User from '../src/User/User'
import Home from './Home'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
export default function App() {
  return (
    <Router>
    <Container>
      <Switch>
      <Route exact path="/Admin"><Admin /></Route>
      <Route exact path="/User"><User/></Route>
      <Route path="/">
        <Home/>
      </Route>
      </Switch>
    </Container>
    </Router>
  );
}


const Container=styled.div`
  background-color:#0F1111;
  display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: space-evenly;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: auto;
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