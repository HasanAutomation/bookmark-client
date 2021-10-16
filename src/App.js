import './App.css';
import { Route, Switch } from 'react-router-dom';
import Bookmark from './screens/Bookmark';
import EditBookmark from './components/EditBookmark';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <h1>Authenticate</h1>
          </Route>
          <Route exact path='/bookmarks'>
            <Bookmark />
          </Route>
          <Route path='/bookmarks/:id'>
            <EditBookmark />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
