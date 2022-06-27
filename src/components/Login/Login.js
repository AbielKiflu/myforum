import {Btn} from '../Button/Button.elements'
import {Input} from './Login.elements'
import {InputContainer,ButtonContainer,FormContainer} from '../../globalStyle';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import {LoggedIn} from '../../redux/reducers/uiStateReducer'


const Login = () => {
  const url = 'http://localhost:8000';
  const dispatch = useDispatch();
  const navigate = useNavigate()


    const {logged}=useSelector((state) =>state.uiState);

    // login
    const loginHandler=(e)=>{
      axios.get(url+'/sanctum/csrf-cookie')
      .then(() => {
        axios({
            method:'post',
            url:url+'/api/login',
            data:{
                'email':'raphael.kezzou@live.fr',
                'password':'password'
            },

        })
        .then((response)=>{
          // the cookie is contained in response.data
          dispatch(LoggedIn(true))
          //navigate('/')
          console.log(response.data);
        })
      .catch(function(error){
        // login failed
          console.log("error: " + error);
          dispatch(LoggedIn(false))
      })
        


    })


  
  }


 


  





return (
          <fieldset>
    <legend>Login:</legend>
            <FormContainer>
               
                <InputContainer>
                <Input type="text" placeholder="Email" aria-label="email"/>
                <Input type="password" placeholder="Password" aria-label="password"/>
            </InputContainer>

            <ButtonContainer>
                <Btn onClick={loginHandler}>Login</Btn>
            </ButtonContainer>
                 
            </FormContainer>
            
    </fieldset>
    );
}

/* 
How to use this Login 

*/
export default Login;