import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import Mypage from '@/pages/Mypage';
import NotFound from '@/pages/NotFound';
import TestPage from '@/pages/TestPage';
import DonationList from './pages/List/components/DonationList';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='mypage' element={<Mypage />} />
          <Route path='list' element={<DonationList />} />
          <Route path='test' element={<TestPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
