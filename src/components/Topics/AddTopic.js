import {Btn} from '../Button/Button.elements'
import {Input} from '../Register/Register.elements'
import {InputContainer,ButtonContainer,FormContainer} from '../../globalStyle';
import {useNavigate,useParams} from "react-router-dom";
import axios from 'axios';
import React from 'react';
const AddTopic = () => {
    const navigate = useNavigate();
    const id = useParams();
    const url="http://localhost:8000";
    const [content, setContent] = React.useState('');
    const addTopicHandler=(e)=>{
    
        e.preventDefault();
        axios({
            method:'post',
            url:url+'/api/topics/create',  
            params:{
                'content':content,
                'forum':id.id
            }          
        })
        .then(response => {
            navigate(-1);
        })
        .catch(function(error){
            console.log("error: " + error);
        });
    }
    return (
    <fieldset>
    <legend>Add a topic:</legend>
    <FormContainer>
            <InputContainer>
                <Input type="text" placeholder="Content" aria-label="content" onChange={e => setContent(e.target.value)}/>
            </InputContainer>

            <ButtonContainer>
                <Btn onClick={addTopicHandler}>Add a topic</Btn>
            </ButtonContainer>
    </FormContainer>
    </fieldset>
    );
}
export default AddTopic;