import React, {useState} from 'react';
import { userItems } from './components/user';

export function App() {

  const [user, setUser]= useState([
    {id: 1, name: 'User-1', compled: false},
  ]);


  return (
    <>
    <div>Carta Persona</div>
    </>
  );
}

