import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DEPOSIT":
      return {
        ...state,
        deposit: action.payload,
      };
    case "SET_PERSON":
      return {
        ...state,
        person: action.payload,
      };
    default:
      return state;
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    deposit: null,
    person: null,
  });
  return { globalState, globalDispatch };
};

export default useGlobalState;
