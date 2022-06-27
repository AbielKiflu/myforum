import {useNavigate} from "react-router-dom";
import React,{useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {LoggedIn} from '../../redux/reducers/uiStateReducer';


const Logout = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()


  useEffect(() => {

      axios({
          method:'get',
          url:'http://localhost:8000/api/logout',
          headers:{
              'Access-Control-Allow-Origin': '*', 
              withCredentials:true,
              'Content-Type': 'application/json',
          }
      })
      .then(response => {
        dispatch(LoggedIn(false));
         navigate('/');

      })
      .catch(error => console.error(error));    


  }, []);
  return (
    <>
    </>
  );
}
export default Logout;
