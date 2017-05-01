import React, { Component } from 'react';
import './App.css';
import PageTitle from './Components/PageTitle/PageTitle';
import SaveArea from './Components/SaveArea/SaveArea';
import SectionOne from './Sections/SectionOne/SectionOne';
import Papa from 'papaparse/papaparse';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.save = this.save.bind(this);

        // this.state = {
        //     hasAnswered: ""
        // };
    }

    componentDidMount() {
        var localStorage = window.localStorage;
        var states = JSON.parse(localStorage['medical-survey']);
        var elements, target;
        for (var key in states) {
            if (states[key]) {
                elements = document.getElementsByName(key);
                if (elements.length === 1 && (elements[0].type === 'text' || elements[0].type === 'number')) {
                    elements[0].value = states[key];
                    this.setState({
                        [key]: states[key]
                    });
                }
                else {
                    for (var i = 0; i < elements.length; i++) {
                        if (elements[i].value === states[key]) {
                            target = elements[i];
                            if (target.type === 'radio' || target.type === 'checkbox') {
                                target.checked = true;
                                this.setState({
                                    [key]: states[key]
                                });
                            }
                            console.log(elements[i].type);
                        }
                    }
                }
            }
        }
        console.log(states);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        var value;
        if (target.type === 'radio' || target.type === 'text' || target.type === 'number') {
            value = target.value;
        }
        else if (target.type === 'checkbox') {
            value = target.checked;
        }

        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    finish() {
        var array = [this.state];
        var csv = Papa.unparse(array);
        console.log("save", csv);
        var localStorage = window.localStorage;
        var exportFilename = "survey-result.csv";
        var csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
        //IE11 & Edge
        if (navigator.msSaveBlob) {
            navigator.msSaveBlob(csvData, exportFilename);
        } else {
            //In FF link must be added to DOM to be clicked
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(csvData);
            link.setAttribute('download', exportFilename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        localStorage.removeItem("medical-survey");
    }

    save() {
        console.log("save");
        if(!window.localStorage){
            alert("浏览器不支持localstorage");
            return false;
        }else{
            console.log(this.state);
            var storage = window.localStorage;
            var result = JSON.stringify(this.state);
            storage.setItem('medical-survey', result);
            console.log(storage['medical-survey']);
        }
    }

	render() {
		return (
			<div className="medical-survey">
                <PageTitle></PageTitle>
                <SectionOne sectionOneChange={this.handleInputChange}></SectionOne>
                <SaveArea class="save-button" saveSubmit={this.save} buttonName='保存'></SaveArea>
                <SaveArea class="finish-button" finish={this.finish} buttonName='完成问卷'></SaveArea>
			</div>
		);
	}
}

export default App;
