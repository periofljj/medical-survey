import React, { Component } from 'react';
import './App.css';
import PageTitle from './Components/PageTitle/PageTitle';
import SaveArea from './Components/SaveArea/SaveArea';
import SectionOne from './Sections/SectionOne/SectionOne';
import SectionTwo from './Sections/SectionTwo/SectionTwo';
import SectionThree from './Sections/SectionThree/SectionThree';
import SectionFour from './Sections/SectionFour/SectionFour';
import SectionFive from './Sections/SectionFive/SectionFive';
import SectionSix from './Sections/SectionSix/SectionSix';
import SectionSeven from './Sections/SectionSeven/SectionSeven';
import SectionEight from './Sections/SectionEight/SectionEight';
import Papa from 'papaparse/papaparse';


class App extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.finish = this.finish.bind(this);
        this.load = this.load.bind(this);
        this.clearLocalStorage = this.clearLocalStorage.bind(this);
        this.addSectionFive = this.addSectionFive.bind(this);
        // this.setValue = this.setValue(this);

        // this.state = {
        //     sectionFiveNum: 1
        // };
    }

    componentDidMount() {
        var localStorage = window.localStorage;
        if (localStorage.length === 0) {
            return;
        }
        if (!localStorage['sectionFiveNum']) {
            localStorage.setItem('sectionFiveNum', 1);
        }
        var states = localStorage['medical-survey'] ? JSON.parse(localStorage['medical-survey']) : {};
        this.state = states;
        this.setState({
            sectionFiveNum: localStorage['sectionFiveNum']
        });
        var elements, target;
        for (var key in states) {
            if (states[key]) {
                elements = document.getElementsByName(key);
                if (elements.length === 1 && (elements[0].type === 'text' || elements[0].type === 'number')) {
                    elements[0].value = states[key];
                }
                else {
                    for (var i = 0; i < elements.length; i++) {
                        if (elements[i].value === states[key]) {
                            target = elements[i];
                            if (target.type === 'radio' || target.type === 'checkbox') {
                                target.checked = true;
                            }
                        }
                    }
                }
            }
        }
    }

    handleInputChange(event, time) {
        if(!event) {
            var name = time.name;
            var value = time.value;
        }
        else {
            const target = event.target;
            const name = target.name;
            var value;
            if (target.type === 'radio' || target.type === 'text' || target.type === 'number') {
                value = target.value;
            }
            else if (target.type === 'checkbox') {
                value = target.checked;
            }
        }
        // state['site-of-mets'] = {
        //     "Uterus": true,

        // }
        // var result = this.state['site-of-mets'];
        // result[value] = target.checked;
        // this.setState({
        //     [name]: result
        // });

        this.setState({
            [name]: value
        });
        var states = this.state;
        if (!states) {
            states = {};
        }
        states[name] = value;
        console.log("save");
        if(!window.localStorage){
            alert("浏览器不支持localstorage");
            return false;
        }else{
            console.log(this.state);
            var storage = window.localStorage;
            var result = JSON.stringify(states);
            storage.setItem('medical-survey', result);
            console.log(storage['medical-survey']);
        }
    }


    finish() {
        var array = [this.state];
        var csv = Papa.unparse(array);
        console.log("save", csv);
        var localStorage = window.localStorage;
        var exportFilename = "survey-result.csv";
        var csvData = new Blob(["\ufeff" +csv], {type: 'text/csv;charset=utf-8;'});
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
        localStorage.removeItem("sectionFiveNum");
    }

    setValue() {
        console.log("load value");
        var elements, target;
        var states = this.state;
        for (var key in states) {
            if (states[key]) {
                elements = document.getElementsByName(key);
                if (elements.length === 1 && (elements[0].type === 'text' || elements[0].type === 'number')) {
                    elements[0].value = states[key];
                }
                else {
                    for (var i = 0; i < elements.length; i++) {
                        if (elements[i].value === states[key]) {
                            target = elements[i];
                            if (target.type === 'radio' || target.type === 'checkbox') {
                                target.checked = true;
                            }
                            console.log(elements[i].type);
                        }
                    }
                }
            }
        }
    }

    clearLocalStorage() {
        var localStorage = window.localStorage;
        localStorage.removeItem("medical-survey");
        localStorage.removeItem("sectionFiveNum");
    }

    load(input) {
        if (window.FileReader) {
            var file = input.target.files[0];
            // var filename = file.name.split(".")[0];
            Papa.parse(file, {
                complete: function(result) {
                    console.log(result);
                    var keys = result.data[0];
                    var values = result.data[1];
                    var states = {};
                    for (var i = 0; i < keys.length; i++) {
                        states[keys[i]] = values[i];
                    }
                    console.log(this);
                    this.state = states;
                    this.setValue();
                }.bind(this)
            });
        }
        //支持IE 7 8 9 10
        // else if (typeof window.ActiveXObject != 'undefined'){
        //     var xmlDoc;
        //     xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        //     xmlDoc.async = false;
        //     xmlDoc.load(input.value);
        //     alert(xmlDoc.xml);
        // }
        // //支持FF
        // else if (document.implementation && document.implementation.createDocument) {
        //     var xmlDoc;
        //     xmlDoc = document.implementation.createDocument("", "", null);
        //     xmlDoc.async = false;
        //     xmlDoc.load(input.value);
        //     alert(xmlDoc.xml);
        // } else {
        //     alert('error');
        // }
    }

    addSectionFive () {
        var storage = window.localStorage;
        // var states = JSON.parse(localStorage['medical-survey']);
        var sectionFiveNum = Number(storage['sectionFiveNum']);
        storage.setItem('sectionFiveNum', sectionFiveNum + 1);
        this.setState({
            sectionFiveNum: sectionFiveNum
        });

    }

	render() {
        var storage = window.localStorage;
        var sectionFiveNum = Number(storage['sectionFiveNum']) || 1;
        var numbers = [];
        for (var i = 1; i <= sectionFiveNum; i++) {
            numbers.push(i);
        }
        var sectionFiveItems = numbers.map((number) => {
            var sectionId = "5-" + number;
            return <SectionFive key={number} sectionId={sectionId} sectionFiveChange={this.handleInputChange}></SectionFive>
        });
		return (
			<div className="medical-survey">
                <PageTitle></PageTitle>
                <input className="load-button" type="file" onChange={this.load}/>
                <SectionOne sectionOneChange={this.handleInputChange}></SectionOne>
                <SectionTwo sectionTwoChange={this.handleInputChange}></SectionTwo>
                <SectionThree sectionThreeChange={this.handleInputChange}></SectionThree>
                <SectionFour sectionFourChange={this.handleInputChange}></SectionFour>
                {sectionFiveItems}
                <button className="" onClick={this.addSectionFive}>继续填写第五部分</button>
                <SectionSix sectionSixChange={this.handleInputChange}></SectionSix>
                <SectionSeven sectionSevenChange={this.handleInputChange}></SectionSeven>
                <SectionEight sectionEightChange={this.handleInputChange}></SectionEight>
                <SaveArea class="clear-button" saveSubmit={this.clearLocalStorage} buttonName='清空问卷'></SaveArea>
                <SaveArea class="finish-button" saveSubmit={this.finish} buttonName='完成问卷'></SaveArea>
			</div>
		);
	}
}

export default App;
