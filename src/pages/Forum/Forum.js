import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {TopicList} from '../../components';
import {useParams} from 'react-router-dom';


function Forum() {
  const [topics, setTopics] = useState([]);
  const [forum,setForum] = useState([]);
  const id = useParams();
  useEffect(() => {
    axios({
      method:'get',
      url:'http://localhost:8000/api/forums/'+id.id,
   
  })
  .then(response => {
    setForum(response.data);
    console.log("Forum"+forum);
    axios({
      method:'get',
      url:'http://localhost:8000/api/forum/'+id.id+"/topics",
   
    })
    .then(response => {
      setTopics(response.data); 
    })
    .catch(error => console.error(error)); 
  })
  .catch(error => console.error(error));    
  },[forum,id.id]);

  return (
    <div>
      <h3>{forum[0].title}</h3>
      <p>{forum[0].description}</p>
     {topics.map((topic) =>{

      return( 
        <TopicList key={topic.topic_id} topic={topic}/>     
      );
     })}
       
    </div>

  );
}
export default Forum;
