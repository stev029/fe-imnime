import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Page404 from './components/pages/Page404';
import GetAnime from './components/pages/GetAnime';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="anime/:id" element={<GetAnime />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;