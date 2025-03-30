import axios from 'axios';
import '../css/MainCSS.css'
import Header from "./Header";
import Home from './Home';
import Matches from './Matches';
import MatchPage from './MatchPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Footer';
import Ranking from './Ranking';

function ChocomintMain() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/ranking' element={<Ranking />} />
                <Route path='/matches' element={<Matches />} />
                <Route path='/match/:id' element={<MatchPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default ChocomintMain;

export const axiosInstance = axios.create({
    baseURL: "https://api.chocomint.cc",
    headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
              }
  });