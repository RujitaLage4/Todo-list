import React, { useState } from "react";
import NoteList from "./NoteList";
import useFetch from "./useFetch";
import ToDoList from "./ToDoList";

const Body = () => {
    const [input, setInput] = useState('');
    const[items,setItemsList]= useState([]);
    
    const handleChange = (e) => {
        setInput(e.target.value);
        };
    const ListOfItems = () =>{
        setItemsList((oldItems)=>{
            return[...oldItems,input];
        });
        setInput('');


    };
    const OnDelete = (id) => {
        console.log("Deleted"); 
        setItemsList((oldItems) => {
            return oldItems.filter((arrelem, index) => {
                return index !== id;
            });
        });
    };
 
    return (  
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h2>ToDo List</h2>
                    <br />
                    <input 
                        type="text"
                        placeholder="Add Items"
                        required
                        value={input}
                        
                        onChange={handleChange} 
                    />  
                    <button onClick={ListOfItems}>+</button>
                    <ol>
                       { items.map((itemval,index) =>{

                            return <ToDoList 
                            key={index}
                            id={index}
                            text={itemval}
                            OnSelect={OnDelete}
                            />

                        })
                       }

                    </ol>
                    

                    
                    
                </div>
            </div>
        </>
    );
}
 
export default Body;
