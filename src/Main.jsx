import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import Landing from '@/pages/Landing';
import List from '@/pages/List';
import Mypage from '@/pages/Mypage';
import NotFound from '@/pages/NotFound';
import TestPage from '@/pages/TestPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Landing />} />
          <Route path='list' element={<List />} />
          <Route path='mypage' element={<Mypage />} />
          <Route path='test' element={<TestPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
