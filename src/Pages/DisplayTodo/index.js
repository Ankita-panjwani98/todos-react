import React from 'react'
import './index.css';

function DisplayTodo({itemtitle, status,id}) {
    console.log("todo item", typeof(itemTodo));
const handleChange = (id)=>{
    console.log("Item clicked ID:", id);
}

  return (
    
        <form>
            <div className='todo-display-container'>
                <div><input type="checkbox" name="todo" value="" onChange={()=>handleChange(id)}/></div>
                <div>{itemtitle}</div>
            </div>
        </form>
   
  )
}

export default DisplayTodo