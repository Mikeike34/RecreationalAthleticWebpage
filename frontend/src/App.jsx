
import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Box minh = {'100vh'}>
      <Routes>
        <Route path = '/' element = {<HomePage />} />
        <Route path = '/about' element = {<AboutPage />} />
      </Routes>
    </Box>
  );
}

export default App
