import React from "react";
//import styles from './Counter.module.css';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padSounds: {
        Q: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Yamaha%20DX100/22[kb]dx100-Pink-noise-C3a.wav.mp3",
        W: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Yamaha%20DX100/65[kb]dx100-TomToms-C3.wav.mp3",
        E: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20SH09/44[kb]stompbass1.wav.mp3",
        A: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Pearl%20SC-40%20Kicks/65[kb]SC40BD028.wav.mp3",
        S: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Pearl%20SC-40%20Kicks/35[kb]SC40BD07.wav.mp3",
        D: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/34[kb]linn-BDRUM13.wav.mp3",
        Z: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/15[kb]linn-Clap-1.wav.mp3",
        X: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/14[kb]linn-COWB-v2.wav.mp3",
        C: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/122[kb]linn-RIDE-v2.wav.mp3",
      },
      input: "",
    };
    this.keys = this.arrayKeys(this.state.padSounds);
    this.handleChange = this.handleChange.bind(this);
  }

  
  arrayKeys(object) {
    return Object.keys(object);
  }

   handleChange(e) {
    this.setState({
      input: e
    });

  }

  handleKeyPress = (event) => {
    let letters = this.keys
    for (let letra of letters) {
      if(event.key.toUpperCase() === letra){
        console.log(letra+' press here! ')
        let audio = new Audio(this.state.padSounds[letra]);
       let go=()=>this.handleChange(letra.toString())
       console.log(go)
       
        return audio.play()
      }
      else {}
  }
  }

  render() {
    const drumpad = this.keys.map((one) => {
      let idx = React.createRef();

      function sound() {
       sound.currentTime = 0;
        idx.current.play();
      }

      return (
        <span onClick={() => this.handleChange(one.toString())}>
          <button
            onClick={sound} 
            id={one + this.keys.indexOf(one)}
            style={{
              backgroundColor: "whitegrey",
              margin: 5,
              width: 50,
              height: 50,
              border: "4px solid black",
            }}
            className="drum-pad"
          >
            {one}
            <audio
              id={one}
              ref={idx}
              className="clip"
              src={this.state.padSounds[one]}
            ></audio>
          </button>
        </span>
      );
    });


    return (
      <div className="container-fluid" id="drum-machine">
        <div id="display">
          <h2>{
           this.state.input
          }</h2>
          {drumpad}
        </div>
      </div>
    );
  }
}
