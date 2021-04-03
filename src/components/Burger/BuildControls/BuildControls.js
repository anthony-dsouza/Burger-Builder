import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';



const buildControls = (props) => {
    const ingredientControls = Object.keys(props.ingredients).map( (igKey, i) => {
        return <BuildControl 
                    key={igKey + i} 
                    label={igKey}
                    more={() => props.add(igKey)}
                    less={() => props.remove(igKey)}
                    disable={props.disable[igKey]}
                    />;
    });
    return (   
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>£{props.price.toFixed(2)}</strong></p>
            {ingredientControls}
            <button className={classes.OrderButton} disabled={props.order}>ORDER NOW</button>
        </div>
    );
};

export default buildControls;