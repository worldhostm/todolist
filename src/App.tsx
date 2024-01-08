import React, { useState } from 'react';
import './App.css';

const App=()=>{
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState(['할일1','할일2']);
  const [prevTodoList, setPrevTodoList] = useState(['']);

  const removeTodo=(idxToRemove : number)=>{
    setTodoList((prevTodoList)=>prevTodoList.filter((_,idx)=>idx !== idxToRemove));
  }

  return (
    <div>
      <input type='text' value={todo||''} onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={()=>{setTodoList([...todoList,todo])}}>할일추가!</button>

      <div>
        {
          todoList?.map((item,idx)=>
                <div key={'div' + idx}>
                  <input type={'text'} value={item||''} onChange={()=>{}}/> 
                  <button onClick={()=>{
                    removeTodo(idx);
                    }}>
                    삭제
                  </button>
                </div>
          )
        }
      </div>
    </div>
  )
}

export default App;
