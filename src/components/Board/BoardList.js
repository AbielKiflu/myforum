import React from "react";
import axios from 'axios';
import {BodyContainer} from '../../globalStyle';
import {Title} from './Board.elements';
import ForumList from "../Forum/ForumList";
 
const BoardList = ({board}) => {
    const [forums,setForums]= React.useState([]);
    //const boardInfo = React.useRef([]);
    
    React.useEffect(() => {
        axios({
             method:'get',
             url:'http://localhost:8000/api/board/'+board.board_id+"/forums",
          
         })
         .then(response => {
            setForums(response.data);
         })
         .catch(error => {
            console.log(error);
         })
          
   
   
     }, []);
    return (
    <>        
        <Title>  {board.description}</Title>
        <BodyContainer>
         {forums.map((forum) =>{
          return( 
            <ForumList key={forum.forum_id} forum={forum}/>     
          );
         })}
        </BodyContainer>
        
    </>
    );
     
}

 
export default BoardList;