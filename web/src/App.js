import { Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import ProfilePage from './pages/ProfilePage';
import PlaylistPage from './pages/PlaylistPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AuthStore from './contexts/AuthStore';
import PrivateRoute from './guards/PrivateRoute';
import CreatePage from './pages/CreatePage';
import FormPage from './pages/FormPage';
import CreateOnMood from './pages/PlaylistForm/CreateOnMood';
import CreateOnArtists from './pages/PlaylistForm/CreateOnArtists';

function App() {
  return (
    <AuthStore >
      <Routes >
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home?' element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path='/users/:userId' element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path='/discover' element={<DiscoverPage />} />
        <Route path='/playlists/:id' element={<PlaylistPage />} />
        <Route path='/playlist/create' element={<CreatePage />} />
        <Route path='/playlist/create/onMood' element={<CreateOnMood/>}/>
        <Route path='/playlist/create/onArtists' element={<CreateOnArtists/>}/>
        <Route path='/playlist/' element={<FormPage />} /> {/* WRONG PATH HEHE*/}
        <Route path='*' element={<Navigate to='/' />} /> {/*OR COMPONENT PAGE NOT FOUND*/}
      </Routes>
    </AuthStore>
  );
}

export default App;
