import React, {useState} from 'react'

const ToDo = props => {
    const [listItem, setListItem] = useState({
        task: "",
        complete: false,
    });
    
    const [list, setList] = useState([]);
    const changeHandler = e => {
        setListItem({
            ...listItem,
            [e.target.name]: [e.target.value] 
        });
    }
    const checkHandler = e => {
        console.log("CHECKED");
        let int = (Object.values(e));
        int = int[0]
        console.log(int);
        list[int].complete = !list[int].complete;
        setList([...list]);
    }
    const submitHandler = e => {
        e.preventDefault();
        setList([...list, listItem]);
        setListItem({
            task: "",
            complete: false
        })
        console.log(setList);
    }
    const deleteItem = (i) => {
        console.log(i);
        let int = (Object.values(i));
        int = int[0];
        console.log(list[int]);
        setList(() => {
            return list.filter(listItem => list.indexOf(listItem) !== int);
        });
    };
    return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
            <h1 className="display-4 m-3">Manage your To-Do List Today!</h1>
            <div className="container m-auto p-5 bg-success m-3">
                <form onSubmit={submitHandler}>
                        <input className="form-control form-control-lg mb-2" type="text" name="task" placeholder="Add a to-do item" onChange={changeHandler} value ={listItem.task}/>
                        <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>

            {/* display the list, with check boxes and a delete button. */}
            <h3 className="display-4">Your List:</h3>
            <div className="container w-50 text-left">

            <ul>{
                list.map( (item, i) =>
                item.complete ?
                <li key = {i} style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}><button className="btn btn-danger mr-5" onClick={() => deleteItem({i})}>Delete</button><input type="checkbox" checked={item.complete} onChange={() => checkHandler({i})}/>{item.task} </li>:
                <li key = {i}><button className="btn btn-danger mr-5" onClick={() => deleteItem({i})}>Delete</button><input type="checkbox" checked={item.complete} onChange={() => checkHandler({i})}/>{item.task}</li>
                )
            }</ul>
            </div>
        </div>
    )
}

export default ToDo
