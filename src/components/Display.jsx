import React, { useState } from "react";

const Display = ({ items, setItems }) => {

    const onDelete = (e, i) => {
        let newItems = items.filter((items, id) => { return id !== i })
        setItems(newItems)
    }

    const onCheck = (e, i) => {
        items[i].isCompleted = !items[i].isCompleted
        setItems([...items])
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <table className="table">
                <tbody>
                    {
                        items.map((item, i) => {
                            return (
                                <div>
                                    {
                                        (items[i].isCompleted)
                                        ?
                                        <tr key={i}>
                                            <td style={{ width: 300, textDecoration:'line-through' }}><h3>{item.task}</h3></td>
                                            <td><input type="checkbox" checked={item.isCompleted} onChange={(e) => { onCheck(e, i) }} /></td>
                                            <td><button style={{
                                                height: 40,
                                                borderRadius: 5,
                                                fontSize: 15
                                            }} onClick={e => onDelete(e, i)}>Delete</button></td>
                                        </tr>
                                        :
                                        <tr key={i}>
                                            <td style={{ width: 300 }}><h3>{item.task}</h3></td>
                                            <td><input type="checkbox" checked={item.isCompleted} onChange={(e) => { onCheck(e, i) }} /></td>
                                            <td><button style={{
                                                height: 40,
                                                borderRadius: 5,
                                                fontSize: 15
                                            }} onClick={e => onDelete(e, i)}>Delete</button></td>
                                        </tr>
                                    }
                                </div>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default Display;