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

        this.state = {
            hasAnswered: ""
        };
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        var value;
        if (target.type === 'radio') {
            value = target.value;
        }
        else if (target.type === 'input') {
            value = target.value;
        }
        else if (target.type === 'checkbox') {
            value = target.checked;
        }

        this.setState({
            [name]: value
        });
        console.log(target.name, target.value, this.state);
    }

    save() {
        console.log(this.state);
        var array = [this.state];
        var csv = Papa.unparse(array);
        console.log(csv);
        console.log("save");
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
    }

	render() {
		return (
			<div className="medical-survey">
                <PageTitle></PageTitle>
                <SectionOne sectionOneChange={this.handleInputChange}></SectionOne>
                <SaveArea saveSubmit={this.save}></SaveArea>
			</div>
		);
	}
}

export default App;
