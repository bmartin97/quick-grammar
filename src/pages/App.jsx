import Tests from './Tests';
import PageNotFound from './PageNotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState, createContext } from 'react';
import { UnderDevelopment } from './UnderDevelopment';
import Header from '../components/Header';
export const Context = createContext();

const App = () => {
  const [draggedElement, setDraggedElement] = useState(null);
  return (
    <>
      <Context.Provider value={{ draggedElement, setDraggedElement }}>
        <BrowserRouter basename='/quick-grammar'>
          <Header />

          <main>
            <Routes>
              <Route path='/' element={<Tests />} />
              <Route path='/tenses/*' element={<UnderDevelopment />} />
              <Route path='/tests' element={<UnderDevelopment />} />
              <Route path='/about' element={<UnderDevelopment />} />
              <Route path='/*' element={<PageNotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
};

export default App;
