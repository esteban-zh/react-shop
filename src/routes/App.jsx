import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@components/Header';
import Layout from '@containers/Layout';
import EmailSent from '@pages/EmailSent';
import PasswordRecovery from '@pages/PasswordRecovery';
import NewPassword from '@pages/NewPassword';
import NotFound from '@pages/NotFound';
import Login from '@pages/Login';
import MyAccount from '@pages/MyAccount';
import Orders from '@pages/Orders';
import CreateAccount from '@pages/CreateAccount';
import Home from '@pages/Home';
import AppContext from '@context/AppContext';
import DetailsContext from '@context/DetailsContext';
import useInitialState from '@hooks/useInitialState';
import useDetailState from '@hooks/useDetailState';
import '@styles/global.css';

const App = () => {
  const initialState = useInitialState(); 
  const detailState = useDetailState();
  return (
    <DetailsContext.Provider value = {detailState}>
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/my-account" element={<MyAccount/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/password-recovery" element={<PasswordRecovery/>} />
            <Route path="/email-sent" element={<EmailSent/>} />
            <Route path="/new-password" element={<NewPassword/>} />
            <Route path="/sign-up" element={<CreateAccount/>} />
            {/* <Route path="/checkout" element={<Checkout/>} /> */}
            <Route path= "*" element={<NotFound/>} />
          </Routes>
        </Layout>    
      </BrowserRouter>
    </AppContext.Provider>
    </DetailsContext.Provider>
  )
}

export default App;