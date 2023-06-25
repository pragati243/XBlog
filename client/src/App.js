
import './App.css';
import Login from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';
import DataProvider from './context/DataProvider';

import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/details/DetailView';
import Update from './components/create/Update';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import About from './components/about/About';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? 
    <>
      <Header />
      <Outlet />
      <Footer/>
    </> : <Navigate replace to='/login' />
};

function App() {
  const [isAuthonticated,isUserAuthonticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{marginTop: "64px"}}>
            <Routes>
              <Route path='/login' element={<Login isUserAuthenticated={isUserAuthonticated} />} />
            
              <Route path='/' element={<PrivateRoute isAuthenticated={isAuthonticated} />} >
                <Route path='/' element={<Home />} />
              </Route>
              <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthonticated} />} >
                <Route path='/create' element={<CreatePost />} />
              </Route>
              <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthonticated} />} >
                <Route path='/details/:id' element={<DetailView />} />
              </Route>
              <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthonticated} />} >
                <Route path='/update/:id' element={<Update/>} />
              </Route>
              <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthonticated} />} >
                <Route path='/about' element={<About />} />
              </Route>
            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthonticated} />} >
              <Route path='/contact' element={<Contact />} />
            </Route>
            </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
