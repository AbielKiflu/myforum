import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {TopicList} from '../../components';
import {useParams} from 'react-router-dom';
import {MainContainer,SideContainer,BodyContainer} from '../../globalStyle';
import {useSelector} from 'react-redux';
import {Login,Register} from '../../components';
import {Link} from 'react-router-dom';
//import AddTopic from '../../components/Topics/AddTopic';
function Forum() {
  const [topics, setTopics] = useState([]);
  const {logged}=useSelector((state) =>state.uiState);
  const id = useParams();
  useEffect(() => {
    axios({
      method:'get',
      url:'http://localhost:8000/api/forum/'+id.id+"/topics",
    
    })
    .then(response => {
      setTopics(response.data); 
    })
    .catch(error => console.error(error)); 
  },[]);
  const menuItems=(logged)=>{
    if(logged === "true"){
      return (
        <Link to={'/NewTopic/'+id.id} > Add a topic</Link>
      );
    }
  }
  const menuItemsLogin=(logged)=>{
    if(logged === "false"){
      return (
        <SideContainer>
          <Login/>
          <Register/>
        </SideContainer>
      );
    }
  }
  return (
    <MainContainer>

      <BodyContainer>     
      <div>
        <h3>{id.title}</h3>
        <p>{id.description}</p>
      </div>
        {menuItems(logged)}
        {topics.map((topic) =>{
        return( 
          <TopicList key={topic.topic_id} topic={topic}/>     
        );
      })}  
      </BodyContainer>
      {menuItemsLogin(logged)}
    </MainContainer>
  );
}
export default Forum;
