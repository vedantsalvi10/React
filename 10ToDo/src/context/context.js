import { createContext, useContext } from "react";

export const TodoContext = createContext({
todos:[{
  id:1,
  todo:"message",
  completed:false
}],
addTodo: (todos)=>{

},
updateTodo: (id, todos)=>{

},
deleteTodo: (id)=>{

},
toggleComplete: (id)=>{

}
});

export const TodoProvider = TodoContext.Provider;

export function useTodo (){
  return useContext(TodoContext);
}
