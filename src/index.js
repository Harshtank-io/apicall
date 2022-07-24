import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import Layout from './Layout'
import Home from './Home'

import Faculties from './Faculties'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Detailfaculties from './Detailfaculties';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/Faculties' element={<Faculties/>}></Route>
        <Route path='/faculty/:id' element={<Detailfaculties/>}></Route>
      </Route>

    </Routes>

  </BrowserRouter>
);

