import React from 'react'

export function userItems(user, toggleUser) {
    const {id, name, completed} = user;

    const newUser = () =>{
        toggleUser(id);
    }
    return (
        <div>
            <button onClick={newUser}>Ramdom user</button>
        </div>
    )
}
