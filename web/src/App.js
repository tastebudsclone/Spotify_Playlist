import { Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import ProfilePage from './pages/ProfilePage';
import PlaylistPage from './pages/PlaylistPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AuthStore from './contexts/AuthStore';
import PrivateRoute from './guards/PrivateRoute';

function App() {
  return (
    <AuthStore>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home?' element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path='/users/:userId' element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path='/discover' element={<DiscoverPage />} />
        <Route path='/playlist/:id' element={<PlaylistPage />} />
        <Route path='*' element={<Navigate to='/' />} /> {/*OR COMPONENT PAGE NOT FOUND*/}
      </Routes>
    </AuthStore>
  );
}

export default App;
