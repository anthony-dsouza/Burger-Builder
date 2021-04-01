import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        let newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;
        this.setState({ingredients: newIngredients});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let newCount = null;
        oldCount === 0 ? newCount = oldCount : newCount = oldCount - 1;
        let newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;
        this.setState({ingredients: newIngredients});
    }



    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>
                    <BuildControls 
                        ingredients={this.state.ingredients} 
                        add={this.addIngredientHandler}
                        remove={this.removeIngredientHandler}
                        />
                </div>
            </Aux>
        );
        
    }
}

export default BurgerBuilder;