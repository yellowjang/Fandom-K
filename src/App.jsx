import { Outlet, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../src/components/Header';
import '@/styles/pageAnimations.scss';

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            timeout={500}
            classNames='page'
          >
            <div
              style={{ position: 'absolute', width: '100%', height: '100%' }}
            >
              <Outlet />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
