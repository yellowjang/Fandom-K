import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import NotFound from '@/pages/NotFound';
import DonationList from '@/pages/List/components/DonationList';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          {/* <Route index element={<List />} /> */}
          <Route path='/list' element={<DonationList />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
