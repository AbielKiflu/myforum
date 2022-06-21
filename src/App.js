import {NavBar} from './components';
import {Guest,Login,Register} from './pages';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import GlobalStyles from './globalStyle';
import {Provider} from "react-redux";
import {store} from "./redux/store";

 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles/>
        <NavBar/>

        <Routes>
            <Route path="/" element={ <Guest/>}/>
            <Route path="/login" element={ <Login/>}/>
            <Route path="/register" element={ <Register/>}/>
          </Routes>

      </Router>
    </Provider>
  );
}

export default App;
