import React from "react";
import {Card} from '../../globalStyle';
import {Title} from './Topic.elements';
 

const TopicList = ({topic}) => {

    return (
      <>
        Topics
        <Card key={topic.topic_id}>
        <Title> {topic.content}</Title>
        </Card>   
      </>
    );
}
export default TopicList;