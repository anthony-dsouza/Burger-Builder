import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total Price: £{props.price.toFixed(2)}</strong></p>
            <p>Would you like to checkout?</p>
            
            <Button btnType='Danger' clicked={props.close}>CANCEL</Button>
            <Button btnType='Success' clicked={props.continue}>CONTINUE</Button>
            
        </Aux>
    );
};

export default orderSummary;