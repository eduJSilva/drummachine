import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {handleChange, handleChangeName} from "./counterSlice";
import styles from './Counter.module.css';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Counters = () => {
  const drumKits = useSelector((state) => state.counter.drumKits)
  const nameDrumPart = useSelector((state) => state.counter.nameDrumPart)
  const keyDrumPart = useSelector((state) => state.counter.keyDrumPart)

  const dispatch = useDispatch();

  const drumKitsArray = Object.keys(drumKits)


  const drumKitsArrayMap = drumKitsArray.map((drumpart) =>{
    let idx = React.createRef();

    function sound() {
      idx.current.play();
    }

    return (
      <span key={drumpart} onClick={()=>{
      dispatch(handleChange(drumpart));
      dispatch(handleChangeName(drumKits[drumpart].name))
      }}>
        <button
          onClick={sound} 
          id={drumpart + drumKitsArray.indexOf(drumpart)}
          style={{
            backgroundColor: "whitegrey",
            margin: 5,
            width: 50,
            height: 50,
            border: "4px solid black",
          }}
          className="drum-pad"
        >
          {drumpart}
          <audio
            id={drumpart}
            ref={idx}
            className="clip"
            src={drumKits[drumpart].sound}
          ></audio>
        </button>
      </span>
    );
  })

  function handleKeyPress(event){
    let letters = drumKitsArray
    for (let letra of letters) {
      if(event.key.toUpperCase() === letra){
        console.log(letra+' press REDUX LETRA here! ')
        document.getElementById(letra).play();
       dispatch(handleChange(letra));
        dispatch(handleChangeName(drumKits[letra].name))
      }
  }
  }

  return (
    <section className="container-fluid" id="drum-machine" onKeyDown={handleKeyPress}> 
      <div id="display">
   
  
   <Card className="text-center">
      <Card.Header><h3>{`Key ${keyDrumPart} :`}<Badge bg="success">{nameDrumPart}</Badge></h3>
</Card.Header>
      <Card.Body>
        <Button variant="secondary">   <span>{drumKitsArrayMap}</span>
</Button>
      </Card.Body>
      <Card.Footer className="text-muted"> <Navbar>
      <Container>
        <Navbar.Brand href="#home">React & Redux App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="https://porfolioeduardojsilva.web.app/">Edu J. Silva</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar></Card.Footer>
    </Card>
    </div>
</section>
  )
}
