import React, { useState } from 'react';
function General () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    
     
    return (
        <>
            <div className = "w-50vw h-50vh border-solid bg-gray-500">
                <form>
                    <label for="name">Name</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}>
                    </input>
                    <label for="email">Email</label>
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}>
                    </input>
                    <label for="number">Number</label>
                    <input
                    type="text"
                    name="number"
                    value={number}
                    onChange={(event)=>setNumber(event.target.value)}>
                    </input>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </>
    )
}
export default General;