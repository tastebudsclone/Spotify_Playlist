import { Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Profile from './pages/Profile';
import Playlist from './pages/Playlist';

function App() {
  return (
    <Routes>
      <Route path='/home?' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/discover' element={<Discover />} />
      <Route path='/playlist/:id' element={<Playlist />} />
      <Route path='*' element={<Navigate to='/' />} /> {/*OR COMPONENT PAGE NOT FOUND*/}
    </Routes>
  );
}

export default App;
