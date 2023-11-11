import Tests from './Tests';
import PageNotFound from './PageNotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import { UnderDevelopment } from './UnderDevelopment';
import Header from '../components/Header';
import { DraggedElementContext } from '@/hooks/useDraggedElementContext';

const App = () => {
  const [draggedElement, setDraggedElement] = useState(null);
  return (
    <>
      <DraggedElementContext.Provider
        value={{ draggedElement, setDraggedElement }}>
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
      </DraggedElementContext.Provider>
    </>
  );
};

export default App;
