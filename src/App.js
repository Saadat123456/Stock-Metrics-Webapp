import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getStockData } from './redux/StockData/stock_data';
import './App.css';
import Header from './components/common/header';
import NotFound from './components/common/not-found';
import Details from './components/details/details';
import Home from './components/home/home';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStockData());
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
