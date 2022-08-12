import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

//O BrowserRouter serve para que os componententes tenham uma lógica de roteamento
//O Routes seriam as rotas qeu vão ter
//E o Route é a própria rota

function App() {
    return (
        //Rotas
        <BrowserRouter>
            <Routes>
                <Route path='/home'/>
            </Routes>
        </BrowserRouter>
    );
};