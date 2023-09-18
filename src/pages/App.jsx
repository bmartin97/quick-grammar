import Home from './Home';
import Exercise from './Exercise';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='Exercise'>Exercise</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path='Exercise' element={<Exercise />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
