import { useState } from "react"

export const useLocalState = (key, initialState) => {
  if (!key || !initialState) {
    throw new Error('useLocalState: Must enter a valid key and initialState!')
  }

  const initializedState = initializeState(key, initialState);
  const [state, setState] = useState(initializedState);

  const customSetState = (inputState) => {
    const newState = inputState instanceof Function ? inputState(state) : inputState;
    const localState = typeof newState === 'object' ? JSON.stringify(newState) : newState;
    localStorage.setItem(key, localState);

    return setState(newState);
  }
  
  return [state, customSetState];
}

const initializeState = (key, initialState) => {
  const localInitialState = localStorage.getItem(key);
  
  if (localInitialState) {
    const initializedState = isStringJson(localInitialState)
      ? JSON.parse(localInitialState)
      : localInitialState;
    
    return initializedState;
  }

  return initialState;
}

const isStringJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}