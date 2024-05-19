import React, { useState } from 'react';
function General () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    
    
    return (
        <>
            <div className = "flex flex-col w-3/5 pb-5 mb-10">
                
                    <label htmlFor="name">Name</label>
                    <input
                    className="border-4"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}>
                    </input>
                    <label htmlFor="email">Email</label>
                    <input
                    className="border-4"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}>
                    </input>
                    <label htmlFor="number">Number</label>
                    <input
                    className="border-4"
                    type="text"
                    name="number"
                    value={number}
                    onChange={(event)=>setNumber(event.target.value)}>
                    </input>
                    
                    
                
            </div>
        </>
    )
}
export default General;