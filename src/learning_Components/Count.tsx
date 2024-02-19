import React from "react";
import { useReducer } from "react";

type countState =  {
    count: number
}
type updateAction = {
    type: 'increment' | 'decrement'
    payload:number
}
type resetAction = {
    type: 'reset'
}
type countAction = updateAction | resetAction

let initialState = {count: 0}

function reducer (state: countState, action: countAction) {
    switch (action.type) {
        case "increment":
           return{count: state.count + action.payload } 
        case "decrement":
           return{count: state.count - action.payload } 
        case "reset":
           return initialState  
        default:
            return state;
    }
}

export const Count = () => {

   const [state, dispatch] = useReducer( reducer, initialState )

   return(<>
        Count: {state.count}
        <button onClick={() => {dispatch({type:'increment', payload: 10})}}>Incremente 10</button>
        <button onClick={() => {dispatch({type:'decrement', payload: 10})}}>Decremente 10</button>
        <button onClick={()=> {dispatch({type: 'reset'})}}>Reset</button>
   </>)

}