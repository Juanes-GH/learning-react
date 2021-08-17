import React from 'react'

export  function extructure() {

        fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => console.log(data))
        creatUser()
    

    return (
        <div>
            
        </div>
    )
}
