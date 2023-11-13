import Tests from './Tests';
import PageNotFound from './PageNotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UnderDevelopment } from './UnderDevelopment';
import Header from '../components/Header';
import DraggedElementProvider from '@/components/DraggedElementProvider';

const App = () => {
  return (
    <DraggedElementProvider>
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
    </DraggedElementProvider>
  );
};

export default App;
