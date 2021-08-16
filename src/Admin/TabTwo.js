import React from 'react'
import styled from 'styled-components';
import {db} from '../Firebase'
import PendingDoubt from './PendingDoubt'
// import User from './User'
export default function TabTwo() {
    const [PendingDoubts, setPendingDoubts] = React.useState([])
    const getDoubt =()=>{
        db.collection('doubt').onSnapshot((snapshot)=>{
            let tempDoubt =[]
            tempDoubt=snapshot.docs.map((doc)=>(
                {
                    id:doc.id,
                    doubt:doc.data()
                }
            ));
            setPendingDoubts(tempDoubt);
        })
    }
    React.useEffect(() => {
        getDoubt()
    }, [])
    return (
        <Container>
            {
                PendingDoubts.map((data)=>(
                    <PendingDoubt
                        name={data.doubt.name}
                        email={data.doubt.email}
                        question={data.doubt.question}
                    />
                ))
            }  
        </Container>
    )
}
const Container = styled.div`
    margin:50px;
`