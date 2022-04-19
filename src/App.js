
import { Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import { Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Register />} />
          <Route path to='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
