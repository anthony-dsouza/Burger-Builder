import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 3,
        unpurchaseable: true,
        showSummary: false
    }

    // we can pass an arguement containing the updated ingredients and this call the function.
    updatePurchaseableHandler () {
        const ingredients = {
            ...this.state.ingredients
        };
        const totalIngredients = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({
            unpurchaseable: totalIngredients <= 0
        });
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        let newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;
        const addPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + addPrice;
        this.setState(
            {ingredients: newIngredients, totalPrice: newPrice},
            this.updatePurchaseableHandler
            );
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
        this.setState(
            {ingredients: newIngredients, totalPrice: newPrice},
            this.updatePurchaseableHandler
            );
    };
        
    showSummaryHandler = () => {
        this.setState({showSummary: true});
    };

    hideSummaryHandler = () => {
        this.setState({showSummary: false});
    };

    continueHandler = () => {
        alert('You have continued!');
    }



    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.showSummary} modalClosed={this.hideSummaryHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        close={this.hideSummaryHandler} 
                        continue={this.continueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                    <BuildControls 
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients} 
                        add={this.addIngredientHandler}
                        remove={this.removeIngredientHandler}
                        disable={disabledInfo}
                        order={this.state.unpurchaseable}
                        click={this.showSummaryHandler}
                        />
            </Aux>
        );
        
    };
};

export default BurgerBuilder;