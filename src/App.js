import {NavBar} from './components';
import {Guest,Login,Register,Logout,Boards,Profile,Forum} from './pages';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import GlobalStyles from './globalStyle';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import axios from 'axios';
 

axios.defaults.withCredentials = true;

 

function App() {


  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles/>
        <NavBar/>

        <Routes>
            <Route path="/" element={ <Guest/>}/>
            <Route path="/login" element={ <Login/>}/>
            <Route path="/logout" element={ <Logout/>}/>
            <Route path="/register" element={ <Register/>}/>
            <Route path="/forum/:id" element={ <Forum/>}/>
            <Route path="/boards" element={ <Boards/>}/>
            <Route path="/profile" element={ <Profile/>}/>
          </Routes>

      </Router>
    </Provider>
  );
}

export default App;
