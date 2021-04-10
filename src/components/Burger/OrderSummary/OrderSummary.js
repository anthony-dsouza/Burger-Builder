import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    // this could be a functional component
    componentDidUpdate() {
        console.log('[OrderSummary] DidUpdate');
    };

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients).map(
            igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            }
        );

        return (
            <Aux>
                <h2>Order Summary</h2>
                <p>Your burger contains the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: £{this.props.price.toFixed(2)}</strong></p>
                <p>Would you like to checkout?</p>
                
                <Button btnType='Danger' clicked={this.props.close}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.continue}>CONTINUE</Button>
                
            </Aux>
        );
    };
};

export default OrderSummary;