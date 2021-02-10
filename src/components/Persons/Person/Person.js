import React, {Component} from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
class Person extends Component{
    
    render(){
        console.log('[Person.js] rendering')

        return(
            <Auxiliary>
            
                <p onClick={this.props.click}>Hi my name is {this.props.name} and i am {this.props.age} years old</p>
                <p> {this.props.children} </p>
                <input type="text" onChange={this.props.change}></input>


            </Auxiliary>
        )
    }
}
export default withClass(Person,classes.Person);