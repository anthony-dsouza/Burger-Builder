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
                    />;
    });
    return (   
        <div className={classes.BuildControls}>
            {ingredientControls}
        </div>
    );
};

export default buildControls;