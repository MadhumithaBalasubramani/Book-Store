import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBook from './pages/CreateBook';
import EditBook from './pages/EditBook';
import BookDetails from './pages/BookDetails';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/books' element={<Home />} />
        <Route path='/books/create' element={<CreateBook />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/details/:id' element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
