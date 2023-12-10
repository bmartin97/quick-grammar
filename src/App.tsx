import Tests from './pages/Tests';
import PageNotFound from './pages/PageNotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UnderDevelopment } from './pages/UnderDevelopment';
import Header from './components/Header';
import DraggedElementProvider from '@/hooks/DraggedElementProvider';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
};

export default App;
