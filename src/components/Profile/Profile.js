import { useNavigate } from 'react-router-dom';
import {Btn} from '../Button/Button.elements';
import {Input} from '../Login/Login.elements';
import {InputContainer,ButtonContainer,FormContainer} from '../../globalStyle';
import React from 'react';
import axios from 'axios';
const Profile = () => {
  const url = 'http://localhost:8000';
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [signature,setSignature] = React.useState('');
  const [id,setId] = React.useState('');
  const navigate = useNavigate();
  React.useEffect(() => {
    axios({
    method: 'get',
    url:url+'/api/user'
  })
  .then((response) => {
    //console.log(response.data);
    setId(response.data.id);
    setEmail(response.data.email);
    setSignature(response.data.signature);
    setNickname(response.data.nickname);
  })
  .catch((err) => {
    console.log(err);
  })
  }, []);
  
  const profileHandler=(e)=>{
    axios({
        method:'post',
        url:url+'/api/modifyUser/'+id,
        params:{
          'nickname':nickname,
          'email':email,
          'signature':signature,
          'password':password
        }
    })
    .then((response)=>{
      console.log(response.data);
      navigate('/');
    })
    .catch(function(error){
      console.log("error: " + error);
    })   
  }
  return (
    <fieldset>
    <legend>Profile:</legend>
      <FormContainer>
          
      <InputContainer>
          <Input type="text" placeholder="Nickname" aria-label="nickname" onChange={e => setNickname(e.target.value)} value={nickname} required/>
          <Input type="email" placeholder="Email" aria-label="email" onChange={e => setEmail(e.target.value)} value={email} required/>
          <Input type="text" placeholder="Signature" aria-label="signature" onChange={e => setSignature(e.target.value)} value={signature} required/>
          <Input type="password" placeholder="Password" aria-label="password" onChange={e => setPassword(e.target.value)} required/>
      </InputContainer>

      <ButtonContainer>
          <Btn onClick={profileHandler}>Save changes</Btn>
      </ButtonContainer>
            
      </FormContainer>    
    </fieldset>
  )
}
export default Profile;