import Home from './Home';
import NewExerciseTasks from './NewExerciseTasks';
import PageNotFound from './PageNotFound';
import './App.module.scss';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import { useState, createContext } from 'react';

export const Context = createContext();

const App = () => {
  const [draggedElement, setDraggedElement] = useState(null);
  return (
    <>
      <Context.Provider value={{ draggedElement, setDraggedElement }}>
        <BrowserRouter basename='/quick-grammar'>
          <header>
            <nav>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/Exercise'>Exercise</NavLink>
            </nav>
          </header>

          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/Exercise' element={<NewExerciseTasks />} />
              <Route path='/*' element={<PageNotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
};

export default App;
