import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import NotFound from '@/pages/NotFound';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          {/* <Route index element={<List />} /> */}
          {/* <Route path='mypage' element={<MyPage />} /> */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
