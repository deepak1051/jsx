
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import Main from "./components/Main"

import SingleUser from "./components/SingleUser"
import './app.css';
const App = () => {
  return (
    <BrowserRouter>
      <Header hello='header' />

      <Routes>
        <Route element={<Main />} path="/" />
        {/* <Route element={<Repos />} path="/repos/:user" /> */}
        <Route element={<SingleUser />} path="/:user" />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
