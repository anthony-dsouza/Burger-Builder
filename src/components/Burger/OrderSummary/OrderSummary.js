import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(
        igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        }
    )
    return (
        <Aux>
            <h2>Order Summary</h2>
            <p>Your burger contains the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Would you like to checkout?</p>
        </Aux>
    );
};

export default orderSummary;