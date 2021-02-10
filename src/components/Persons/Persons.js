import React,{Component} from 'react';
import Person from './Person/Person'
class Persons extends Component{
   
    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate...')
        if(nextProps.persons !== this.props.persons){
            return true;
        }
        else{
            return false;
        }

    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate..') 
        return {message:'snapshot!'};
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);

    }
    render(){
        console.log('[Persons.js] rendering')
        return(
            this.props.persons.map((human,index) => {
                return <Person
                click={()=>this.props.clicked(index)}
                name={human.name} 
                age={human.age}
                key={human.id}
                change={(event)=>this.props.changed(event,human.id)}></Person>
                })
        )

    }
}
export default Persons;