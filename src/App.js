import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';

//O BrowserRouter serve para que os componententes tenham uma lógica de roteamento
//O Routes seriam as rotas qeu vão ter
//E o Route é a própria rota

function App() {
    return (
        //Rotas
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;