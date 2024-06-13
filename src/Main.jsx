import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import Mypage from '@/pages/Mypage';
import NotFound from '@/pages/NotFound';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          {/* <Route index element={<List />} /> */}
          <Route path='mypage' element={<Mypage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
