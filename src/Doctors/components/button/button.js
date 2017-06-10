import React, { Component } from 'react';
import './button.css';



class Button extends Component {
    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
    }

    save() {
        this.props.clickSubmit();
    }
    render() {
        return (
            <div className={this.props.class}>
                <button　onClick={this.save} className="button">{this.props.buttonName}</button>
            </div>
        );
    }
}

export default Button;
