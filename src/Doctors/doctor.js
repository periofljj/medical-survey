
import React, { Component } from 'react';
import './doctor.css';
import Button from './components/button/button';
import NewDoctorSurvey from './partials/newDoctor';
import OldDoctorSurvey from './partials/oldDoctor';
import Papa from 'papaparse/papaparse';

class Doctor extends Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
        this.finish = this.finish.bind(this);
        //this.save = this.save.bind(this);
		this.chooseOldDoc = this.chooseOldDoc.bind(this);
		this.chooseNewDoc = this.chooseNewDoc.bind(this);
		this.state = {
            isChooseType: false,
            surveyType: ""
        };
	}

	componentWillMount() {
		// this.setState({
		// 	isChooseType:
		// });
	}

	componentDidMount() {
		// this.setState({
		// 	isChooseType:
		// });
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
        var states = this.state;
        if (!states) {
            states = {};
        }
        states[name] = value;
        console.log(states);
        console.log("save");
    }

    finish() {
        var array = [this.state];
        var csv = Papa.unparse(array);
        console.log("save", csv);
        var exportFilename = "doctor-survey-result.csv";
        var csvData = new Blob(["\ufeff" + csv], {type: 'text/csv;charset=utf-8;'});
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
	chooseOldDoc() {
		this.setState({
			isChooseType: true,
			surveyType: "OLD"
		});
	}

	chooseNewDoc() {
		this.setState({
			isChooseType: true,
			surveyType: "NEW"
		});
	}

	render() {
		const isChooseType = this.state.isChooseType;
		return (
			<div className="App">
				{
					isChooseType ? (
						this.state.surveyType == 'NEW' ?(
							<div>
								<NewDoctorSurvey newDoctorSurveyChange={this.handleInputChange}></NewDoctorSurvey>
								<Button class="finish-survey" clickSubmit={this.finish} buttonName="完成问卷"></Button>
							</div>
						):(
							<div>
								<OldDoctorSurvey oldDoctorSurveyChange={this.handleInputChange}></OldDoctorSurvey>
								<Button class="finish-survey" clickSubmit={this.finish} buttonName="完成问卷"></Button>
							</div>
						)
					) : (
						<div className="choose-type">
							<Button class="choose-old-doc" clickSubmit={this.chooseOldDoc} buttonName="选择老医生"></Button>
							<Button class="choose-new-doc" clickSubmit={this.chooseNewDoc} buttonName="选择新医生"></Button>
						</div>
					)
				}
			</div>
		);
	}
}


export default Doctor;
