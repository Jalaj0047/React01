import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor executed');
  }
  state={
    persons : [
      {id:"01",name:'Jalaj Sharma', age:23},
      {id:"02",name:'Jahanvi Sharma', age:16},
      {id:"03",name:'Harshit Sharma', age:25}
    ],
    showPerson : false,
    showCockpit : true
  }
  static getDerivedStateFromProps(props,state){
    console.log(props,'[App.js] getDerivedStateFromPropsExecuted');
    return state;
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount...')
  }
  shouldComponentUpdate(prevProps,prevState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('[App.js] component didUpdate')
  }


   switchNameHandler = (newName) => {
    this.setState({
      persons : [ 
        {name:newName, age:23},
        {name:'Gungun Sharma', age:16},
        {name:'Kittu Sharma', age:25}
      ] 
    })
  }
  nameChangeHandler = (event,id) => {
     const personIndex = this.state.persons.findIndex(p => {
      return id===p.id;
     })
     const person = {
       ...this.state.persons[personIndex]
     }
     person.name = event.target.value;
     const persons = [...this.state.persons];
     persons[personIndex] = person;
     this.setState({persons:persons})

  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson:!doesShow});
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({persons:persons})
  }
  render(){
    console.log('[App.js] rendering...')
    let persons = null;
    
    if(this.state.showPerson){
      persons = (
      <div>
       <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangeHandler}></Persons>
      </div>
      );
    }
    return (
      <Auxiliary>
        <button onClick={()=>this.setState({showCockpit : false})}>remove cockpit</button>
        {this.state.showCockpit ? 
        <Cockpit title={this.props.appTitle} showPersons={this.state.showPerson} persons={this.state.persons} toggle={this.togglePersonHandler}></Cockpit> : null

        }
        {persons}

      </Auxiliary>
      
  
    );
  }
}

export default withClass(App,classes.App);
