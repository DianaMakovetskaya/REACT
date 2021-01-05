import React, {Component, useEffect, useReducer, useState} from 'react';


const reducer=(state,action)=>{
  switch (action.type){
    case 'SET_USER':
      return action.payload;

    case 'CHANGE_PHONE':
      //повертає об'єкт
      return {
        ...state,//копіюємо весь наш старий об'єкт
        phone: action.payload //та змінюємо його поле title
      }


    default:
      return state;

  }
}

const initialState={
  name:'',
  email:'',
  phone:''
}
export default function App(){
  const [counter, setCounter] = useState(0);
  // const [user, setUser] = useState()
  const [state,dispatch]=useReducer(reducer,initialState);

  // useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/users/${counter}`).then((value) => value.json()).then((json) => setUser(json));
  // }, [counter])

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
        .then((value) => value.json())
        .then((json) =>{
          dispatch({type:'SET_USER',payload:json})
        });

  }, [counter])

  const onClickHandler = () => {
    setCounter(counter + 1);
  }

  const changePhone=()=>{
    dispatch({type:'CHANGE_PHONE',payload:Math.random()})
  }

  return (
      <div>
        <h1>Counter value:{counter}</h1>
        <button onClick={onClickHandler}>Inc</button>
        <button onClick={changePhone}>Change phone</button>
        {
          // user && (<>
          //         Name:{user.name}
          //     </>
          // )




          state && (
              <><br/>
                Name: {state.name}
                <br/>
                Email:  {state.email}
                <br/>
                Phone:  {state.phone}
              </>
          )

        }


      </div>
  );
}

