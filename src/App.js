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
import SectionSevenDrug from './Sections/SectionSeven/SectionSevenDrug';
import SectionSeven from './Sections/SectionSeven/SectionSeven';
import SectionEight from './Sections/SectionEight/SectionEight';
import Papa from 'papaparse/papaparse';
import createHistory from 'history/createBrowserHistory';
var _ = require('lodash');

var $ = window.$ = require('jquery');
var jQuery = window.jQuery = require('jquery');

class App extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.finish = this.finish.bind(this);
        this.load = this.load.bind(this);
        this.clearLocalStorage = this.clearLocalStorage.bind(this);
        this.addSectionFive = this.addSectionFive.bind(this);
        this.addSectionSeven = this.addSectionSeven.bind(this);
        this.toggleSectionEight = this.toggleSectionEight.bind(this);
        this.toggleSectionFive = this.toggleSectionFive.bind(this);
        this.toggleSectionSix = this.toggleSectionSix.bind(this);
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
            localStorage.setItem('sectionFiveNum', 0);
        }

        if (!localStorage['sectionSevenNum']) {
            localStorage.setItem('sectionSevenNum', 1);
        }

        var multiplesChoiceName = {
            "site-of-mets": "",
            "therapy-side-effects": "",
            "co-morbidities": ""
        };

        for (var i = 1; i < localStorage['sectionFiveNum'] + 1; i++) {
            multiplesChoiceName["5-" + i + "-side-effect"] = "";
            multiplesChoiceName['5-' + i + '-reason-for-ending'] = '';
        }

        var states = localStorage['medical-survey'] ? JSON.parse(localStorage['medical-survey']) : {};
        this.state = states;
        this.setState({
            sectionFiveNum: localStorage['sectionFiveNum'],
            sectionSevenNum: localStorage['sectionSevenNum']
        });
        var elements, target, data;
        for (var key in states) {
            if (states[key]) {
                elements = document.getElementsByName(key);
                if (elements.length === 1) {
                    if (elements[0].type === 'text' || elements[0].type === 'number') {
                        elements[0].value = states[key];
                    }
                    else if (elements[0].type === 'checkbox') {
                        elements[0].checked = states[key];
                        
                        //恢复disabled的情况
                        if(elements[0].className.indexOf("continued") !== -1){
                            if(elements[0].value === "yes"){
                                var continued = elements[0].className.split(' ');
                                var getCycle = document.getElementsByClassName(continued[0]+" cycle");
                                for(var m=0; m<getCycle.length; m++){
                                    getCycle[m].value="";
                                    // this.setState({
                                    //     [getCycle[m].name]:''
                                    // });

                                    this.state[getCycle[m].name] = '';
                                    getCycle[m].disabled = true;
                                }
                                if(continued[2]){
                                    var getByWeek = document.getElementsByClassName(continued[0]+" continued byWeek");
                                    for(var q=0; q<getByWeek.length; q++){
                                        getByWeek[q].disabled = true;
                                    }
                                }

                            }else{
                                var continued2 = elements[0].className.split(' ');
                                var getCycle2 = document.getElementsByClassName(continued2[0]+" cycle");
                                for(var n=0; n<getCycle2.length; n++){
                                    getCycle2[n].disabled = false;
                                }
                                if(continued2[2]){
                                    var getByWeek = document.getElementsByClassName(continued2[0]+" continued byWeek");
                                    for(var q=0; q<getByWeek.length; q++){
                                        getByWeek[q].disabled = false;
                                    }
                                }
                            }
                        }
                        else if(elements[m].className && (elements[m].className === 'no-replace')){
                            var getReplace = document.getElementsByClassName('replace');
                            for(var i=0; i<getReplace.length; i++){
                                getReplace[i].value="";
                                getReplace[i].disabled = true;
                                this.setState({
                                    [getReplace[i].name]:''
                                });
                            }

                        }
                        else if (elements[0].name === 'history-6-check') {
                            var sectionSix = document.getElementsByClassName('section-six-toggle')[0];
                            if (elements[0].checked) {
                                sectionSix.style.display = 'block';
                            }
                            else {
                                sectionSix.style.display = 'none';
                            }
                        }
                        else if (elements[0].name === 'history-8-check') {
                            var sectionEight = document.getElementsByClassName('section-eight-toggle')[0];
                            if (elements[0].checked) {
                                sectionEight.style.display = 'block';
                            }
                            else {
                                sectionEight.style.display = 'none';
                            }
                        }
                    }
                }
                else {
                    console.log(elements);
                    if (multiplesChoiceName.hasOwnProperty(key)) {
                        if (states[key].indexOf('None') !== -1) {
                            data = states[key];
                            for (var s = 0; s < elements.length; s++) {
                                if (elements[s].value === data[0]) {
                                    target = elements[s];
                                    target.checked = true;
                                }
                                else {
                                    target = elements[s];
                                    target.disabled = true;
                                }
                            }
                        }
                        else {
                            data = states[key];
                            for (var j = 0; j < data.length; j++) {
                                for (var k = 0; k < elements.length; k++) {
                                    if (elements[k].value === data[j]) {
                                        target = elements[k];
                                        target.checked = true;
                                    }
                                }
                            }
                        }
                    }
                    else {
                        //console.log();
                        for (var m = 0; m < elements.length; m++) {
                            if (elements[m].value === states[key]) {
                                target = elements[m];
                                if (target.type === 'radio' || target.type === 'checkbox') {
                                    target.checked = true;
                                    if(elements[m].className && (elements[m].className.indexOf("drug-way")!== -1)){
                                        var arr = elements[m].className.split(' ');
                                        if(elements[m].value === "Cycles"){
                                            var obj_cycle = document.getElementsByClassName(arr[0]+" continued");
                                            for(var i=0; i<obj_cycle.length; i++){
                                                obj_cycle[i].value="";
                                                obj_cycle[i].checked=false;
                                                this.setState({
                                                    [obj_cycle[i].name]:''
                                                });
                                                obj_cycle[i].disabled = true;
                                            }
                                            var obj_continued = document.getElementsByClassName(arr[0]+" cycle");
                                            for(var b=0; b<obj_continued.length; b++){
                                                this.setState({
                                                    [obj_continued[b].name]:''
                                                });
                                                obj_continued[b].disabled = false;
                                            }
                                        }
                                        if(elements[m].value === "Continued"){
                                            var obj_cycle = document.getElementsByClassName(arr[0]+" cycle");
                                            for(var i=0; i<obj_cycle.length; i++){
                                                obj_cycle[i].value="";
                                                obj_cycle[i].checked=false;
                                                this.setState({
                                                    [obj_cycle[i].name]:''
                                                });
                                                obj_cycle[i].disabled = true;
                                            }
                                            var obj_continued = document.getElementsByClassName(arr[0]+" continued");
                                            for(var i=0; i<obj_continued.length; i++){
                                                this.setState({
                                                    [obj_continued[i].name]:''
                                                });
                                                obj_continued[i].disabled = false;
                                            }
                                        }

                                    }
                                    
                                }
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
            // 时间选择器
            name = time.name;
            value = time.value;
            this.state[name] = value;
            hasSetState = true;
        }
        else {
            target = event.target;
            name = target.name;
            if (target.type === 'radio' || target.type === 'text' || target.type === 'number') {
                value = target.value;
                this.state[name] = value;

                if(target.className && (target.className.indexOf("drug-way")!== -1)){
                    var arr = target.className.split(' ');
                    if(target.value === "Cycles"){
                        var obj_cycle = document.getElementsByClassName(arr[0]+" continued");
                        for(var i=0; i<obj_cycle.length; i++){
                            obj_cycle[i].value="";
                            obj_cycle[i].checked=false;
                            this.setState({
                                [obj_cycle[i].name]:''
                            });
                            obj_cycle[i].disabled = true;
                        }
                        var obj_continued = document.getElementsByClassName(arr[0]+" cycle");
                        for(var b=0; b<obj_continued.length; b++){
                            this.setState({
                                [obj_continued[b].name]:''
                            });
                            obj_continued[b].disabled = false;
                        }
                    }
                    if(target.value === "Continued"){
                        var obj_cycle = document.getElementsByClassName(arr[0]+" cycle");
                        for(var i=0; i<obj_cycle.length; i++){
                            obj_cycle[i].value="";
                            obj_cycle[i].checked=false;
                            this.setState({
                                [obj_cycle[i].name]:''
                            });
                            obj_cycle[i].disabled = true;
                        }
                        var obj_continued = document.getElementsByClassName(arr[0]+" continued");
                        for(var i=0; i<obj_continued.length; i++){
                            this.setState({
                                [obj_continued[i].name]:''
                            });
                            obj_continued[i].disabled = false;
                        }
                    }

                    this.state[name] = value;
                    hasSetState = true;
                }

                
            }
            else if (target.type === 'checkbox') {
                value = target.checked;
                data = target.value;
                console.log(target.className);
                if(target.className === "other"){
                    if(value === true){
                        var obj_other = document.getElementsByClassName(target.name+"-text");
                        obj_other[0].innerHTML="<input type='text' placeholder='请填写' style='width:50px'>";
                    }else{
                        document.getElementsByClassName(target.name+"-text")[0].innerHTML="其它";
                    }
                    return;
                }
                else if(target.className === "none" || target.className === "unknown"){
                    var obj = document.getElementsByName(target.name);
                    if (value === true) {
                        for(var j=0; j<obj.length; j++){
                            if(obj[j].className !== target.className){
                                obj[j].checked = false;
                                obj[j].disabled = true;
                            } 
                        }
                        this.state[name] = [data];
                    }
                    else {
                        for(var k=0; k<obj.length; k++){
                            if(obj[k].className !== target.className){
                                obj[k].disabled = false;
                            } 
                        }
                        delete this.state[name];
                    }

                    hasSetState = true;
                }
                else if(target.className.indexOf("continued") !== -1){
                    if(value === true){
                        var continued = target.className.split(' ');
                        var getCycle = document.getElementsByClassName(continued[0]+" cycle");
                        for(var m=0; m<getCycle.length; m++){
                            getCycle[m].value="";
                            // this.setState({
                            //     [getCycle[m].name]:''
                            // });

                            this.state[getCycle[m].name] = '';
                            getCycle[m].disabled = true;
                        }
                        if(continued[2]){
                            var getByWeek = document.getElementsByClassName(continued[0]+" continued byWeek");
                            for(var q=0; q<getByWeek.length; q++){
                                getByWeek[q].disabled = true;
                            }
                        }

                    }else{
                        var continued2 = target.className.split(' ');
                        var getCycle2 = document.getElementsByClassName(continued2[0]+" cycle");
                        for(var n=0; n<getCycle2.length; n++){
                            getCycle2[n].disabled = false;
                        }
                        if(continued2[2]){
                            var getByWeek = document.getElementsByClassName(continued2[0]+" continued byWeek");
                            for(var q=0; q<getByWeek.length; q++){
                                getByWeek[q].disabled = false;
                            }
                        }
                    }
                     
                    this.state[name] = value;
                    hasSetState = true;
                }
                else if(target.className === 'no-replace'){
                    if(value === true){
                        var getReplace = document.getElementsByClassName('replace');
                            for(var n=0; n<getReplace.length; n++){
                                getReplace[n].value='';
                                this.state[getReplace[n].name] = '';
                                getReplace[n].disabled = true;
                            }
                    }else{
                        var getReplace2 = document.getElementsByClassName('replace');
                            for(var n=0; n<getReplace2.length; n++){
                                getReplace2[n].disabled = false;
                            }
                    }
                    this.state[name] = value;
                    hasSetState = true;
                }
                //checkbox里不会出现cycle的情况
                // else if(target.className==="cycle"){
                //     var getContinued = document.getElementsByClassName("continued-"+target.name);
                //     for(var p=0; p<getContinued.length; p++){
                //         getContinued[p].checked = false;
                //         getContinued[p].disabled = true;
                //     }
                //     return;
                // }

                

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

                    this.state[name] = stateArr;
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

        console.log("save");
        if(!window.localStorage){
            alert("浏览器不支持localstorage");
            return false;
        }else{
            console.log(states);
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
        localStorage.removeItem("sectionSevenNum");
        
        //页面跳转
        // const history = createHistory();
        // history.push('/doctorSurvey');
        // location.reload();

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
        localStorage.removeItem("sectionSevenNum");
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
        var sectionFiveNum = Number(storage['sectionFiveNum']);
        storage.setItem('sectionFiveNum', sectionFiveNum + 1);
        this.setState({
            sectionFiveNum: sectionFiveNum + 1
        });

    }

    addSectionSeven () {
        var storage = window.localStorage;
        var sectionSevenNum = Number(storage['sectionSevenNum']);
        storage.setItem('sectionSevenNum', sectionSevenNum + 1);
        this.setState({
            sectionSevenNum: sectionSevenNum + 1
        });
    }

    toggleSectionFive (event) {
        var storage = window.localStorage;
        this.state[event.target.name] = event.target.checked;
        if (event.target.checked) {
            document.getElementById('section-five-continue').style.display = 'block';
            var sectionFiveNum = Number(storage['sectionFiveNum']);
            storage.setItem('sectionFiveNum', 1);
            this.setState({
                sectionFiveNum: 1
            });
        }
        else {
            document.getElementById('section-five-continue').style.display = 'none';

            var inputs = $('.section-five-toggle').find('input');
            var input;
            for (var i = 0; i < inputs.length; i++) {
                input = inputs[i];
                if (this.state.hasOwnProperty(input.name)) {
                    delete this.state[input.name];
                }

                if (input.type === 'radio' || input.type === 'checkbox') {
                    input.checked = false;
                }
                else if (input.type === 'text') {
                    input.value = "";
                }
            }

            _.forEach(this.state, function(item, key) {
                if (key.indexOf('5-') !== -1) {
                    delete this.state[key];
                }
            }.bind(this));

            var sectionFiveNum = Number(storage['sectionFiveNum']);
            storage.setItem('sectionFiveNum', 0);
            this.setState({
                sectionFiveNum: 0
            });
        }

        var result = JSON.stringify(this.state);
        storage.setItem('medical-survey', result);
    }

    toggleSectionSix (event) {
        var storage = window.localStorage;
        this.state[event.target.name] = event.target.checked;
        var sectionSix = document.getElementsByClassName('section-six-toggle')[0];
        if (event.target.checked) {
            sectionSix.style.display = 'block';
        }
        else {
            sectionSix.style.display = 'none';
            var inputs = $('.section-six-toggle').find('input');
            var input;
            for (var i = 0; i < inputs.length; i++) {
                input = inputs[i];
                if (this.state.hasOwnProperty(input.name)) {
                    delete this.state[input.name];
                }

                if (input.type === 'radio' || input.type === 'checkbox') {
                    input.checked = false;
                }
                else if (input.type === 'text') {
                    input.value = "";
                }
            }
            
            var dateSelectNames = [
                'growth-factor-start-date',
                'growth-factor-end-date',
                'erythropoietin-start-date',
                'erythropoietin-end-date',
                'bone-metastasis-start-date',
                'bone-metastasis-end-date-2',
                'growth-factor-start-date-2',
                'growth-factor-end-date-2'
            ];
            _.forEach(this.state, function(item, key) {
                _.forEach(dateSelectNames, function(value) {
                    if (key === value) {
                        delete this.state[key];
                    }
                }.bind(this));
            }.bind(this));
        }
        var result = JSON.stringify(this.state);
        storage.setItem('medical-survey', result);
    }

    toggleSectionEight (event) {
        var storage = window.localStorage;
        this.state[event.target.name] = event.target.checked;
        var sectionEight = document.getElementsByClassName('section-eight-toggle')[0];
        if (event.target.checked) {
            sectionEight.style.display = 'block';
        }
        else {
            sectionEight.style.display = 'none';
            var inputs = $('.section-eight-toggle').find('input');
            var input;
            for (var i = 0; i < inputs.length; i++) {
                input = inputs[i];
                if (this.state.hasOwnProperty(input.name)) {
                    delete this.state[input.name];
                }

                if (input.type === 'radio' || input.type === 'checkbox') {
                    input.checked = false;
                }
                else if (input.type === 'text') {
                    input.value = "";
                }
            }
            
            var dateSelectNames = [
                'GF-drug-start-date',
                'GF-drug-end-date',
                'EPO-drug-start-year',
                'EPO-drug-end-year',
                'acute-anti-emetic-drug-start-date',
                'acute-anti-emetic-drug-end-date',
                'delayed-anti-emetic-drug-start-date',
                'delayed-anti-emetic-drug-end-date',
                'bone-metastases-drug-start-date',
                'bone-metastases-drug-end-date',
                'other-drug-start-date',
                'other-drug-end-date',
                'acute-anti-emetic-drug-2-start-date',
                'acute-anti-emetic-drug-2-end-date',
                'delayed-anti-emetic-drug-2-start-date',
                'delayed-anti-emetic-drug-2-end-date'
            ];
            _.forEach(this.state, function(item, key) {
                _.forEach(dateSelectNames, function(value) {
                    if (key === value) {
                        delete this.state[key];
                    }
                }.bind(this));
            }.bind(this));
        }
        var result = JSON.stringify(this.state);
        storage.setItem('medical-survey', result);
    }

	render() {
        var storage = window.localStorage;
        var sectionFiveNum = Number(storage['sectionFiveNum']) || 0;
        var sectionSevenNum = Number(storage['sectionSevenNum']) || 1;

        var numbers = [];
        var sectionId;
        for (var i = 1; i <= sectionFiveNum; i++) {
            numbers.push(i);
        }
        var sectionFiveItems = numbers.map((number) => {
            sectionId = "5-" + number;
            return <SectionFive key={number} sectionId={sectionId} sectionFiveChange={this.handleInputChange}></SectionFive>
        });

        // var isShowSectionFive = document.getElementsByClassName('history-5')[0].checked;

        numbers = [];
        for (var i = 1; i <= sectionSevenNum; i++) {
            numbers.push(i);
        }
        var SectionSevenDrugItems = numbers.map((number) => {
            sectionId = "7-" + number;
            return <SectionSevenDrug key={number} sectionId={sectionId} sectionSevenChange={this.handleInputChange}></SectionSevenDrug>
        });


        var sectionSevenNum = Number(storage['sectionSevenNum']);
		return (
			<div className="medical-survey">
                <PageTitle pageTitleChange={this.handleInputChange}></PageTitle>
                <input className="load-button" type="file" onChange={this.load}/>
                <SectionOne sectionOneChange={this.handleInputChange}></SectionOne>
                <SectionTwo sectionTwoChange={this.handleInputChange}></SectionTwo>
                <SectionThree sectionThreeChange={this.handleInputChange}></SectionThree>
                <SectionFour sectionFourChange={this.handleInputChange}></SectionFour>
                <div className='section-five'>
                    <div className="section-title">
                        <span className="title">第五部分</span>
                        <label><input type="checkbox" className="history-5" name="history-5-check" onChange={this.toggleSectionFive} /> 是否既往使用过抗肿瘤药物</label>
                    </div>
                </div>
                {sectionFiveItems}
                <button className="continue" id="section-five-continue" onClick={this.addSectionFive} style={{display:'none'}} >继续添加药物</button>


                <div className='section-six'>
                    <div className="section-title">
                        <span className="title">第六部分 既往支持药物</span>
                        <label><input type="checkbox" className="history-6" name="history-6-check" onChange={this.toggleSectionSix} /> 是否既往使用过支持药物</label>
                    </div>
                </div>
                <SectionSix sectionSixChange={this.handleInputChange}></SectionSix>


                <SectionSeven sectionSevenNum={sectionSevenNum} sectionSevenChange={this.handleInputChange}></SectionSeven>
                {SectionSevenDrugItems}
                <button className="continue" onClick={this.addSectionSeven}>继续添加药物</button>
                <div className='section-eight'>
                    <div className="section-title">
                        <span className="title">第八部分</span>
                        <label><input type="checkbox" className="history-8" name="history-8-check" onChange={this.toggleSectionEight} /> 是否既往使用过与肿瘤治疗有关的支持药物</label>
                    </div>
                </div>
                <SectionEight sectionEightChange={this.handleInputChange}></SectionEight>
                <SaveArea class="clear-button" saveSubmit={this.clearLocalStorage} buttonName='清空问卷'></SaveArea>
                <SaveArea class="finish-button" saveSubmit={this.finish} buttonName='完成问卷'></SaveArea>
			</div>
		);
	}
}

export default App;
