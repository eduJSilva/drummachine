import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
  drumKits: {
    Q: {name:'Snare',sound:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/32[kb]totally_amped_sd.wav.mp3"},
    W: {name:'Crash', sound:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/123[kb]normal-crash.wav.mp3"},
    E: {name:'Hi-Hat', sound:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/62[kb]half_open_hh.wav.mp3"},
    A: {name:'High Tom', sound:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Pearl%20SC-40%20Kicks/65[kb]SC40BD028.wav.mp3"},
    S: {name:'Mid Tom', sound:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Pearl%20SC-40%20Kicks/35[kb]SC40BD07.wav.mp3"},
    D: {name:'BassDrum', sound:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/34[kb]linn-BDRUM13.wav.mp3"},
    Z: {name:'Claps', sound:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/15[kb]linn-Clap-1.wav.mp3"},
    X: {name:'Cowbell', sound:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/14[kb]linn-COWB-v2.wav.mp3"},
    C: {name:'Ride', sound:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/122[kb]linn-RIDE-v2.wav.mp3"},
  },
  nameDrumPart:'',
  keyDrumPart:''
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    handleChange: (state, action) => {
      state.keyDrumPart = action.payload;
    },

    handleChangeName: (state, action) => {
      state.nameDrumPart = action.payload;
    },
    
  },
});

export const { increment, decrement, incrementByAmount, handleChange, handleChangeName } = counterSlice.actions;


export default counterSlice.reducer;
