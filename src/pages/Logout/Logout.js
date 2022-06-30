import {useNavigate} from "react-router-dom";
import React,{useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {LoggedIn} from '../../redux/reducers/uiStateReducer';
const Logout = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [user,setUser] = React.useState(''); 

  useEffect(() => {

      axios({
          method:'get',
          url:'http://localhost:8000/api/logout',
       
      })
      .then(response => {
        dispatch(LoggedIn("false"));
        setUser(response.data);
      })
      .catch(error => console.error(error));    


  }, []);
  return (
    <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
      <span className="font-medium"> {user.message}</span> 
    </div>
  );
}
export default Logout;
