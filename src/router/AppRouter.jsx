import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Restaurants from "../pages/Restaurants";
import Restaurant from "../pages/Restaurant";

const AppRouter = () => {

    return (
        <Routes>
            <Route exact path='/' element={<Restaurants/>}/>
            <Route path='/r/list' element={<Restaurants/>}/>
            <Route exact path='/r/menu/:id' element={<Restaurant/>}/>
        </Routes>
    )

};

export default AppRouter;