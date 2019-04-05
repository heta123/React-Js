import React from 'react';
import Auxi from '../../../hoc/Auxi';
// import OrderIngredients from './OrderIngredients/OrderIngredients';
const orderSummary = (props) => {
    const ingredients =  props.ingredients;
    const iteams = [];
    for(let key in ingredients){
        iteams.push(<li key={key}><span style={{ textTransform: 'capitalize' }}>{key}</span>: {ingredients[key]}</li>)
    }
    return(
        <Auxi>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {iteams}
        </ul>
        </Auxi>
    );
}
export default orderSummary;