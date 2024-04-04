const TodoList = (props) => {
    return ( 
    <>
    <div className="todo_style">
        <button onClick={() => props.OnSelect(props.id)}>x</button>

        <li> {props.text}</li> 
    </div>
    </>);
    
}
 
export default TodoList;