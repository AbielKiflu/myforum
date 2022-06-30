import React from "react";
import {Card} from '../../globalStyle';
import {Title,Body,Post,Topic,NavLink} from './Topic.elements';
 

const TopicList = ({topic}) => {

    return (
        <Card key={topic.topic_id}>
        <Title> {topic.content}</Title>
        </Card>   
    );
}
export default TopicList;