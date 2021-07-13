import React, {useState} from "react";

const Submit = ({items, setItems, add, setAdd}) => {

    const handleSubmit = e => {
        e.preventDefault()
        setItems([...items, add])
        setAdd({task:"", isCompleted:false})
    }

    const handleChange = e => {
        setAdd({[e.target.name]:e.target.value, isCompleted:false})
        // console.log(submit)
    }

    return(
        <form onSubmit={handleSubmit} style={{marginBottom:10}}>
            <div className="form-group d-flex">
                <label>Add To Your List:</label>
                <input name="task" id="addTo" className="form-control" type="text" value={add.task} onChange={e => handleChange(e)}/>
                <button className="btn btn-info">Add</button>
            </div>
        </form>
    )
}

export default Submit;