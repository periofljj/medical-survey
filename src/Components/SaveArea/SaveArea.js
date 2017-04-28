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
            <div className="save-area">
                <button　onClick={this.save} className="save-button">保存</button>
            </div>
        );
    }
}

export default SaveArea;
