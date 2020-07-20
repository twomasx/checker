import React, { Component } from 'react';
import './cell.component.css';
export class Cell extends Component {
    constructor(props){
        super(props);
    }
    // renders an individual cell
    render = () => {
        const { color } = this.props;
        return <div style={{backgroundColor: color}} className="cell">

        </div>
    };
} 