// Imports
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";

// Function component
const App = () => {
    // business logic

    // JSX
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>}></Route>
                <Route path='*' element={<Error404/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

// CSS styling


export default App;