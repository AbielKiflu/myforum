import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {BoardList} from '../../components';




function Boards() {
  const [boards, setBoards] = useState([]);


  useEffect(() => {
    axios({
      method:'get',
      url:'http://localhost:8000/api/boards',
   
  })
  .then(response => {
     setBoards(response.data);

  })
  .catch(error => console.error(error));    
  },[]);

 

  return (
    <div>
         

     {boards.map((board) =>{

      return( 
        <BoardList key={board.board_id} board={board}/>     
      );
     })}
       
    </div>

  );
}
export default Boards;
