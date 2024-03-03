"use client"
import React, { useReducer, useState } from 'react';
import Image from "next/image";
import Meat from "./mainPage/Meat";
import Gradientdiv from "./ClientComonents/Gradientdiv";


export const UserContext = React.createContext<any>(undefined);
export default function Home() {
type State = {
  count: string;
};


type Action =
  | { type: 'exp'; payload: string }
  | { type: 'pro'; payload: string }
  |   { type: 'abt'; payload: string }


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
   const initialState: State = { count: "abt" };


  const [state, dispatch] = useReducer(reducer, initialState);


  return (
  <Gradientdiv  className="">
     <UserContext.Provider value={{ state, dispatch } as { state: State, dispatch: React.Dispatch<Action> }}>

    <Meat/>
      </UserContext.Provider>
  </Gradientdiv>
   
  );
}
