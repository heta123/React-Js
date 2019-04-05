import React from 'react';
import classes from './BuildControl.css';
const buildControl = (props) => (
<div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less} onClick = {props.removeClicked} disabled={props.show} >Less</button>
    <button className={classes.More} onClick={props.addClicked}>More</button>
</div>
);
export default buildControl;