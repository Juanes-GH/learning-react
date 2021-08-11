import React from 'react'

export function TodoItems({todo}) {
    const {id, task, compled} = todo;
    return (
        <li>{task}</li>
    )
}
