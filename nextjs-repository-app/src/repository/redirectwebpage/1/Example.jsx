import React from "react";
// import "./style.css";

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import WebpageOne from "./Webpage1";
import WebpageTwo from "./Webpage2";

const Example = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<WebpageOne/>}/>
        <Route path="/webpage2" element={<WebpageTwo/>}/>
    </Routes>

    </BrowserRouter>
  );
};

export default Example;



