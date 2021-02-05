import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PostDetails from './components/PostDetails';
import PostsList from './components/PostsList';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, compose,applyMiddleware  } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/post/:id' component={PostDetails} />
            <Route path='/' component={PostsList} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
