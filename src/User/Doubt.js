import {React,useState} from 'react'
import styled from 'styled-components';
import {db} from '../Firebase'
export default function Doubt() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("")
    const handleSubmit=async(e)=>{ 
        e.preventDefault();
        db.collection('doubt').add({
            name:name,
            email:email,
            question:question,
            answer:answer,
        })
        .then(()=>{
            alert('Invitation sent Successfully')
        })
        .catch((error)=>{
            alert(error.message);
        });
        setName('')
        setEmail('')
        setQuestion('')
        setAnswer('')
    }
    
    return (
        
        <Form method="POST" onSubmit={handleSubmit}>
                <EnterEmail>Email</EnterEmail>
                <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <EnterName>Name</EnterName>
                <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <EnterQuestion>Question</EnterQuestion>
                <Input placeholder="Question" value={question} onChange={(e)=>setQuestion(e.target.value)} rows="5"/>
                <SendRequest type="submit" >Post Doubt</SendRequest>
        </Form>
    )
}
const Form=styled.form`
    height:160px;
    width:200px;
`
// const Container=styled.div`
//     display: flex;
//     /* align-items: center; */
//     justify-content: center;
//     flex-direction: column;
// `
const EnterEmail=styled.label`
    margin-top:10px;
`
const EnterName=styled.label`
    margin-top:10px;
`
const EnterQuestion=styled.label`
    margin-top:10px;
`
const SendRequest=styled.button`
    margin-top:10px;
    background-color: #0074B6;
    border: 1px solid blue;
    border-radius:3px;
    width:100px;
    height:30px;
`
const Input=styled.textarea`
    height:200px;
    width:200px;
    padding:10px;
`