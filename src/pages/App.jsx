import Home from './Home';
import Exercise from './Exercise';
import PageNotFound from './PageNotFound'
import './App.module.scss'

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
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
