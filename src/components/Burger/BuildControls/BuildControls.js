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
            <div>
                <h2>£{props.price.toFixed(2)}</h2>
            </div>  
            {ingredientControls}
        </div>
    );
};

export default buildControls;