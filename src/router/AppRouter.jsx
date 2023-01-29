import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Restaurants from "../pages/Restaurants";
import Restaurant from "../pages/Restaurant";
import PurchasePage from "../pages/PurchasePage";

const AppRouter = () => {

    return (
        <Routes>
            <Route exact path='/' element={<Restaurants/>}/>
            <Route path='/r/list' element={<Restaurants/>}/>
            <Route exact path='/r/menu/:id' element={<Restaurant/>}/>
            <Route exact path='/r/purchase' element={<PurchasePage/>}/>
            <Route path='/*' element={<Restaurants/>}/>
        </Routes>
    )

};

export default AppRouter;