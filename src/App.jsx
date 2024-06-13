import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      {/* <Header /> */}
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
