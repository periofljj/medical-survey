import React, { Component } from 'react';
import './SaveArea.css';



class SaveArea extends Component {
    constructor(props) {
        super(props);
        this.save = this.save.bind(this);
    }

    save() {
        this.props.saveSubmit();
    }
    render() {
        return (
            <div className={this.props.class}>
                <button　onClick={this.save} className="save">{this.props.buttonName}</button>
            </div>
        );
    }
}

export default SaveArea;
