import './App.css';
import { Switch } from 'react-router-dom';
import Authenticate from './screens/Authenticate';
import GuestRoute from './components/routes/GuestRoute';
import useLoadingWithRefresh from './hooks/useLoadingWithRefresh';
import Home from './screens/Home';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_RIGHT,
};

function App() {
  const { loading } = useLoadingWithRefresh();

  if (loading)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <h3>Loading app..</h3>
      </div>
    );

  return (
    <Provider template={AlertTemplate} {...options}>
      <div className='App'>
        <div className='container'>
          <Switch>
            <GuestRoute exact path='/'>
              <Authenticate />
            </GuestRoute>
            <Home />
          </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default App;
