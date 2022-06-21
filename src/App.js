import {NavBar,Card} from './components';
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

      </Router>
      <Card/>
    </Provider>
  );
}

export default App;
