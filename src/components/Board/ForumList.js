import React from "react";
import axios from 'axios';
import {Card} from '../../globalStyle';
import {Title,Body,Forum,Topic} from './Board.elements';
import {Link} from  'react-router-dom';
 

const ForumList = ({board}) => {
    const [boardInfo,setBoardInfo]= React.useState([]);
    //const boardInfo = React.useRef([]);
    
    React.useEffect(() => {
       
        axios({
             method:'get',
             url:'http://localhost:8000/api/boardinfo/'+board.board_id,
          
         })
         .then(response => {
            setBoardInfo(response.data);
          
      
         })
         .catch(error => {
            console.log(error);
         })
          
   
   
     }, []);


    return (
        <Card key={board.board_id}>
        <Title> <Link to="/"> {board.description} </Link> </Title>
        <Body>
            <Forum>
                <h3>Forum</h3>
                <p>{boardInfo.forum}</p>
            </Forum>
            <Topic>
                <h3>Topic</h3>
                <p>{boardInfo.topic}</p>
            </Topic>
        </Body>
    </Card>   
        )
     
}

 
export default ForumList;