import React from "react";
//import styles from './Counter.module.css';

export class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {     
    }    
    this.keys=this.arrayKeys(this.props.padSounds)
  }

  arrayKeys(object){
    return Object.keys(object)
  }

  detectKeyDown = (e) =>{
   let letters= this.keys
    for(let letra of letters) {
      console.log(letra)
     if (letra.id === e.key) {
       let audio = new Audio(this.state.padSounds[letra]);
       return audio.play();
     }
    } 
   }



render() {
 

  const drumpad = this.keys.map((one)=>{  
     let idx = React.createRef()
    function sound() {
      idx.current.play()
    }
  
    return  <span>
    <button   onClick={sound} id={one+this.keys.indexOf(one)} 
    style={{backgroundColor: 'whitegrey', margin:5, width: 50, height: 50,
                border: '4px solid black'}} className='drum-pad'>{one}<audio id={one} ref={idx} className='clip'     
                       src={this.state.padSounds[one]}>
                       </audio> 
                       </button>          
    </span>
   });

  return (
    <div className='container-fluid' id="drum-machine">
    <div id="display">
    <h2>{}</h2>
    {drumpad}
    </div>
    </div>
  )
}

}
