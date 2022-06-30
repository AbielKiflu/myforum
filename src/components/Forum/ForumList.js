import React from "react";
import axios from 'axios';
import {Card} from '../../globalStyle';
import {Title,Body,Post,Topic,NavLink} from './Forum.elements';
 

const ForumList = ({forum}) => {
    const [forumInfo,setForumInfo]= React.useState([]);
    //const boardInfo = React.useRef([]);
    
    React.useEffect(() => {
        axios({
          method:'get',
          url:'http://localhost:8000/api/foruminfo/'+forum.forum_id,
         })
         .then(response => {
          setForumInfo(response.data);
         })
         .catch(error => {
          console.log(error);
         })
     }, []);

    return (
        <Card key={forum.forum_id}>
        <Title> <NavLink to={'/forum/'+forum.forum_id+"/"+forum.title+"/"+forum.description} >  {forum.title}</NavLink></Title>
        <Body>
            <Topic>
                <h3>Topics</h3>
                <p>{forumInfo.topic}</p>
            </Topic>
            <Post>
                <h3>Posts</h3>
                <p>{forumInfo.post}</p>
            </Post>
        </Body>
    </Card>   
    );
}
export default ForumList;