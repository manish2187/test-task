import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './containers/Home';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
function App() {
  return (
    <Provider store={store}>

      <Header></Header>
      <div className="bg-violet">
        <Router>

          <Switch>
            <Route exact path="/" component={Home} />
            {/*<Route path="/client" component={client} />
							<Route exact path="/getintouch" component={getintouch} />
              <Route exact path="/portfolio" component={portfolio}  />
              */}

          </Switch>
        </Router>

      </div>
    </Provider>
  );
}

export default App;
