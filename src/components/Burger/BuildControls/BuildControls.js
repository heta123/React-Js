import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
    {
        controls.map((cntrl)=>{
           return( <BuildControl key={cntrl.label} label= {cntrl.label} 
            addClicked={() => props.addIngredient(cntrl.type)}
            removeClicked = {() => props.removeIngredient(cntrl.type)} show = {props.disableBtn[cntrl.type]} />
            );
        })
       
    }
    <button className={classes.OrderButton} disabled={!props.purchase}>ORDER NOW</button>
    </div>
);

export default buildControls;