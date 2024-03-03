"use client"
import React, { useReducer, useState } from 'react';
import Image from "next/image";
import Meat from "./mainPage/Meat";
import Gradientdiv from "./ClientComonents/Gradientdiv";

type State = {
  count: string;
};

const initialState: State = { count: "abt" };
const initialContextValue: UserContextType = {
  state: initialState,
  dispatch: () => {},
};
type Action =
  | { type: 'exp'; payload: string }
  | { type: 'pro'; payload: string }
  |   { type: 'abt'; payload: string }
type UserContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const UserContext = React.createContext<UserContextType>(initialContextValue);
export default function Home() {


const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'exp':
      return{ ...state, count: action.payload };
    case 'pro':
      return { ...state, count: action.payload };
    case 'abt':
      return { ...state, count: action.payload };;
  }
};
 


  const [state, dispatch] = useReducer(reducer, initialState);


  return (
  <Gradientdiv  className="">
     <UserContext.Provider value={{ state, dispatch } as { state: State, dispatch: React.Dispatch<Action> }}>

    <Meat/>
      </UserContext.Provider>
  </Gradientdiv>
   
  );
}
