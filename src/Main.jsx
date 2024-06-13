import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import NotFound from '@/pages/NotFound';
import TestPage from '@/pages/TestPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          {/* <Route index element={<List />} /> */}
          {/* <Route path='mypage' element={<MyPage />} /> */}
          <Route path='test' element={<TestPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
