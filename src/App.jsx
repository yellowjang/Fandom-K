import { Outlet } from 'react-router-dom';
import Header from '../src/components/Header';

function App() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
