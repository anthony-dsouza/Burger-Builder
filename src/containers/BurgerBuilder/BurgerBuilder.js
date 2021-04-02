import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.00,
    bacon: 1.00,
    cheese: 0.70,
    meat: 2.00
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 3
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        let newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;
        const addPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + addPrice;
        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        });
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let newCount = null;
        oldCount === 0 ? newCount = oldCount : newCount = oldCount - 1;
        let newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;
        const removePrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        let newPrice = null;
        oldPrice > 3 ? newPrice = oldPrice - removePrice : newPrice = oldPrice; 
        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        });
    };



    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>
                    <BuildControls 
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients} 
                        add={this.addIngredientHandler}
                        remove={this.removeIngredientHandler}
                        disable={disabledInfo}
                        />
                </div>
            </Aux>
        );
        
    }
}

export default BurgerBuilder;