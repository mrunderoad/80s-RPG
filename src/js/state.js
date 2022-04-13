//Function to store state:
export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

//This function stores the list of states.
export const storeListState = () => {
  let currentState = [];
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = [...newState];
    return newState;
  };
};

//This is a function factory, whose return function gets passed into the return function of storeListState, and becomes the stateChangeFunction.
export const changeListState = (obj) => {
  return (state) => ([
    ...state,
    obj
  ]);
};

//Function factory below:
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

//Function to add initial value of state
export const initializeState = (state) => {
  return () => ({
    ...state
  });
};

export const dance = changeState("dance")(5);
export const killerOutfit = changeState("drip")(7);
export const surge = changeState("pop")(2);
export const cola = changeState("pop")(1);
export const doCokeWithPrince = changeState("tubular")(100);
export const pizza = changeState("fuel")(3);

// export const stateControl = storeState();
export const listControl = storeListState();
// export const danceAttack = changeState("enemyDrip")(Math.floor(Math.random() * -25));
export const danceBattle = changeState("drip")(Math.floor(Math.random() * -20));