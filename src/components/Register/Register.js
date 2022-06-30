import {Btn} from '../Button/Button.elements'
import {Input} from './Register.elements'
import {InputContainer,ButtonContainer,FormContainer} from '../../globalStyle';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useNavigate} from "react-router-dom";
import {LoggedIn} from '../../redux/reducers/uiStateReducer'
import React from 'react';
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const url="http://localhost:8000";
    const [nickname, setNickname] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [signature, setSignature] = React.useState('');
    const registerHandler=(e)=>{
    
        e.preventDefault();
        axios({
            method:'post',
            url:url+'/api/register',  
            params:{
                'nickname':nickname,
                'email':email,
                'password':password,
                'signature':signature
            }          
        })
        .then(response => {
            dispatch(LoggedIn("true"));
            console.log(response.data.message);
            navigate("/");
        })
        .catch(function(error){
            console.log("error: " + error);
        });
    }
    return (
    <fieldset>
    <legend>Register:</legend>
    <FormContainer>
            <InputContainer>
                <Input type="text" placeholder="Nick Name" aria-label="nickname" onChange={e => setNickname(e.target.value)}/>
                <Input type="text" placeholder="Email" aria-label="email" onChange={e => setEmail(e.target.value)}/>
                <Input type="text" placeholder="Signature" aria-label="Signature" onChange={e => setSignature(e.target.value)}/>
                <Input type="password" placeholder="Password" aria-label="password" onChange={e => setPassword(e.target.value)}/>
            </InputContainer>

            <ButtonContainer>
                <Btn onClick={registerHandler}>Register</Btn>
            </ButtonContainer>
    </FormContainer>
    </fieldset>
    );
}
export default Register;