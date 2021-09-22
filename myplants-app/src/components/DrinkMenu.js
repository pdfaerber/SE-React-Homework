import React from 'react'
import { Route } from 'react-router-dom';
import ColdDrink from './ColdDrink';
import HotDrink from './HotDrink';

function DrinkMenu() {
    return (
        <div>
            <ColdDrink Route='ColdDrink' component={ColdDrink}/>
            <HotDrink Route='HotDrink' component={HotDrink}/>
                                 
        </div>
    )
}

export default DrinkMenu;
