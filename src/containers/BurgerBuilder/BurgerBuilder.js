import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGRIDIENT_PRICE = {
    salad: 0.3,
    bacon: 0.7,
    cheese: 0.8,
    meat: 1.3 
}

class BurgerBuilder extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable:false
    }
    updatePurchaseState = (ingredients) => {
        let sum = 0;
        for(let key in ingredients){
            sum = sum + ingredients[key];
        }
        this.setState({purchasable:sum>0});
    }
    addIngredientHandler = (type) => {
      let oldCount = this.state.ingredients[type];
      let updatedIngredients = {...this.state.ingredients};
      let newCount = oldCount + 1;
      updatedIngredients[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGRIDIENT_PRICE[type];
        // let updatedPrice = {...this.state.totalPrice};
        // updatedPrice = newPrice;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
      
        if(oldCount <= 0){
            return;
       }
        let updatedIngredients = {...this.state.ingredients};
        let newCount = oldCount - 1;
        
        updatedIngredients[type] = newCount;
          const oldPrice = this.state.totalPrice;
          const newPrice = oldPrice - INGRIDIENT_PRICE[type];
          // let updatedPrice = {...this.state.totalPrice};
          // updatedPrice = newPrice;
          this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
          this.updatePurchaseState(updatedIngredients);
    }
    
    
    render () {
        const disableInfo = {...this.state.ingredients};
        for(let key in disableInfo ){
            disableInfo[key] = disableInfo[key]<= 0
        }
        
        return (
            <Auxi>
                <Burger ingredients={this.state.ingredients} />
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
                </Modal>
                <BuildControls addIngredient = {this.addIngredientHandler} 
                removeIngredient = {this.removeIngredientHandler} 
                disableBtn= {disableInfo} 
                price={this.state.totalPrice}
                purchase={this.state.purchasable} />
            </Auxi>
        );
    }
}


export default BurgerBuilder;