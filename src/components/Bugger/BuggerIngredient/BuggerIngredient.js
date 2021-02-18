import React from 'react';
import classes from './BuggerIngredient.css'

const BuggerIngredient = (props) => {
    let buggerIngredient = null;
    switch(props.type) {
        case('BreadBottom'):
        buggerIngredient = <div className='BreadBottom'></div>;
        break;
        case('BreadTop'):
        buggerIngredient = 
            <div className='BreadTop'>
                <div classes='Seeds1'></div>
                <div classes='Seeds2'></div>
            </div>;
        break;
        case('Meat'):
        buggerIngredient = <div className='Meat'> </div>;
        break;
        case('Cheese'):
        buggerIngredient = <div className='Meat'> </div>;
        break;
        case('Salad'):
        buggerIngredient = <div className='Meat'> </div>;
        break;
        case('Bacon'):
        buggerIngredient = <div className='Meat'> </div>;
        break;

    }
    return buggerIngredient;
}