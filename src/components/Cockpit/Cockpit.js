import React, {useEffect} from 'react'
import classes from './Cockpit.css'
const Cockpit = (props) => {
    useEffect(()=>{
      console.log('[Cockpit.js] UseEffect');
      setTimeout(()=>{
        alert('Saved data to the cloud!');
      },1000);
      return ()=>{
        console.log('[cockpit.js] cleanup work in useEffect');
      }
    },[]);
    useEffect(()=>{
      console.log('[Cockpit.js] 2nd UseEffect');
      return ()=>{
        console.log('[cockpit.js] cleanup work in 2nd useEffect');
      }  
    })

    let assignClasses=[];
    let btnClass=[classes.button]
    if(props.showPersons){
        btnClass.push(classes.Red);
      }

    if(props.persons.length<=2){
        assignClasses.push(classes.red)
      }
      if(props.persons.length<=1){
        assignClasses.push(classes.bold);
      }
    return(
        <div>
         <h1>{props.title}</h1> 
        <h1>This is my first react component</h1>
        <h3 className={assignClasses.join(' ')}>This is really working!!</h3>
        {/* <button onClick={this.switchNameHandler.bind(this,'Boss!')}>Switch Name</button> */}
        <button onClick={props.toggle} className={btnClass.join(' ')}>Toggle Person</button>
        </div>
    )
}
export default Cockpit;