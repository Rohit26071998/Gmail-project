import './App.css';
import Homescreen from './Components/Homescreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import SentScreen from './Components/SentScreen';
import Login from './Components/Login'
import { StateContext, useStateValue } from './Context/StateProvider';

function App() {
  const [{ user }] = useStateValue(StateContext);
  console.log(user)
  return (
    <Router>
      <div className="App">
        {!user ? <Login /> :
          <Switch>
            <Route exact path="/">
              <Homescreen />
            </Route>
            <Route exact path="/sent">
              <SentScreen />
            </Route>
          </Switch>
        }
      </div>
    </Router>
  );
}

export default App;
