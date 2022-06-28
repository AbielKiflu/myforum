import React from "react";
import axios from 'axios';
 
 

const BoardList = ({board}) => {
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
          
   
   
     }, []);


    return (
         <>
            <p>         forum: {boardInfo.forum} topic: {boardInfo.topic}</p>
         </>
    );
     
}

 
export default BoardList;