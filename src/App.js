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
import $ from 'jquery';


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
        // if (localStorage.length === 0) {
        //     return;
        // }
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
                if (elements.length === 1) {
                    if (elements[0].type === 'text' || elements[0].type === 'number') {
                        elements[0].value = states[key];
                    }
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
        var name, value, target, data, hasSetState = false;
        if(!event) {
            name = time.name;
            value = time.value;
        }
        else {
            target = event.target;
            name = target.name;
            if (target.type === 'radio' || target.type === 'text' || target.type === 'number') {
                value = target.value;
                this.setState({
                    [name]: value
                });
                if(target.className.indexOf("drug-way")){
                    if(target.value == "Cycles"){
                        var arr = target.className.split(' ');
                        var obj_cycle = document.getElementsByClassName(arr[0]+" cycle");
                        for(var i=0; i<obj_cycle.length; i++){
                            obj_cycle[i].value="";
                            obj_cycle[i].checked=false;
                            this.setState({
                                [obj_cycle[i].name]:''
                            });
                            obj_cycle[i].disabled = true;
                        }
                        var obj_cycle = document.getElementsByClassName(arr[0]+" continued");
                        for(var i=0; i<obj_cycle.length; i++){
                            this.setState({
                                [obj_cycle[i].name]:''
                            });
                            obj_cycle[i].disabled = false;
                        }
                    }
                    if(target.value == "Continued"){
                        var arr = target.className.split(' ');
                        var obj_cycle = document.getElementsByClassName(arr[0]+" continued");
                        for(var i=0; i<obj_cycle.length; i++){
                            obj_cycle[i].value="";
                            obj_cycle[i].checked=false;
                            this.setState({
                                [obj_cycle[i].name]:''
                            });
                            obj_cycle[i].disabled = true;
                        }
                        var obj_cycle = document.getElementsByClassName(arr[0]+" cycle");
                        for(var i=0; i<obj_cycle.length; i++){
                            this.setState({
                                [obj_cycle[i].name]:''
                            });
                            obj_cycle[i].disabled = false;
                        }
                    }
                    
                    this.setState({
                        [name]: value
                    });
                    return;
                }
                
            }
            else if (target.type === 'checkbox') {
                value = target.checked;
                data = target.value;
                if(target.className=="other"){
                    if(value === true){
                        var obj = document.getElementsByClassName(target.name+"-text");
                        obj[0].innerHTML="<input type='text' placeholder='请填写' style='width:50px'>";
                    }else{
                        var obj = document.getElementsByClassName(target.name+"-text");
                        obj[0].innerHTML="其它";
                    }
                    return;
                }
                else if(target.className === "none" || target.className === "unknown"){
                    var obj = document.getElementsByName(target.name);
                    if (value === true) {
                        for(var i=0; i<obj.length; i++){
                            if(obj[i].className != target.className){
                                obj[i].checked = false;
                                obj[i].disabled = true;
                            } 
                        }
                    }
                    else {
                        for(var i=0; i<obj.length; i++){
                            if(obj[i].className != target.className){
                                obj[i].disabled = false;
                            } 
                        }
                    }

                    this.setState({
                        [name]: [data]
                    });
                    hasSetState = true;
                }
                else if(target.className.indexOf("continued")){
                    if(value === true){
                        var arr = target.className.split(' ');
                        var obj = document.getElementsByClassName(arr[0]+" cycle");
                        for(var i=0; i<obj.length; i++){
                            obj[i].value="";
                            this.setState({
                                [obj[i].name]:''
                            });
                            obj[i].disabled = true;
                        }

                    }else{
                        var arr = target.className.split(' ');
                        var obj = document.getElementsByClassName(arr[0]+" cycle");
                        for(var i=0; i<obj.length; i++){
                            obj[i].disabled = false;
                        }
                    }
                     
                    this.setState({
                        [name]: value
                    });
                    return;
                }
                else if(target.className=="cycle"){
                    var obj = document.getElementsByClassName("continued-"+target.name);
                    for(var i=0; i<obj.length; i++){
                        obj[i].checked = false;
                        obj[i].disabled = true;
                    }
                    return;
                }

                if (!hasSetState) {
                    var state;
                    if (this.state) {
                        state = this.state[name];
                    }
              
                    var stateArr = state || [];
                    if (value) {
                        if (stateArr.length === 0)
                            stateArr[0] = data;
                        else
                            stateArr.push(data);
                    }
                    else {
                        var index = stateArr.indexOf(data);
                        stateArr.splice(index, 1);
                    }
                    this.setState({
                        [name]: stateArr
                    });
                }
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
        location.reload();
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
                <PageTitle pageTitleChange={this.handleInputChange}></PageTitle>
                <input className="load-button" type="file" onChange={this.load}/>
                <SectionOne sectionOneChange={this.handleInputChange}></SectionOne>
                <SectionTwo sectionTwoChange={this.handleInputChange}></SectionTwo>
                <SectionThree sectionThreeChange={this.handleInputChange}></SectionThree>
                <SectionFour sectionFourChange={this.handleInputChange}></SectionFour>
                {sectionFiveItems}
                <button className="continue" onClick={this.addSectionFive}>继续填写第五部分</button>
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
