import axios from 'axios';
import React,{useEffect,useState} from 'react';
import {TopicList} from '../../components';
import {useParams} from 'react-router-dom';
import {MainContainer,SideContainer,BodyContainer,ColumnContainer} from '../../globalStyle';
import {useSelector} from 'react-redux';
import {Login,Register} from '../../components';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


//import AddTopic from '../../components/Topics/AddTopic';
function Forum() {
  const [topics, setTopics] = useState([]);
  const {logged}=useSelector((state) =>state.uiState);
  const id = useParams();
  const BtnLink=styled(Link)`
    outline:none;
 
    border-radius:0.5rem;
    color:#fff;
    text-decoration: none;
    padding:0.4rem;
    width:6rem;
    margin:0.6rem;
    background:#082a3d;

    &:hover {
        background:#33224f;
    }
    

  `;




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
        <BtnLink to={'/NewTopic/'+id.id} > Add topic</BtnLink>
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

      <ColumnContainer>     
      <div>
        <h2>{id.title}</h2>
        <p>{id.description}</p>
      </div>
        {menuItems(logged)}
        {topics.map((topic) =>{
        return( 
          <TopicList key={topic.topic_id} topic={topic}/>     
        );
      })}  
      </ColumnContainer>
      {menuItemsLogin(logged)}
    </MainContainer>
  );
}
export default Forum;



