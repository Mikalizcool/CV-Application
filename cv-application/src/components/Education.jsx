import { useState } from "react";

function Education () {
    const [institution, setInstitution] = useState("");
    const [major, setMajor] = useState("");
    const [date, setDate] = useState("");
    
    return (
        <>
            <div className = "flex flex-col w-3/5 pb-5 mb-10">
                
                    <label htmlFor="institution">Institution</label>
                    <input
                    className="border-4"
                    type="text"
                    name="institution"
                    id="institution"
                    value={institution}
                    onChange={(event)=>setInstitution(event.target.value)}>
                    </input>
                    <label htmlFor="major">Major</label>
                    <input
                    className="border-4"
                    type="text"
                    name="major"
                    id="major"
                    value={major}
                    onChange={(event)=>setMajor(event.target.value)}>
                    </input>
                    <label htmlFor="date">Date</label>
                    <input
                    className="border-4"
                    type="text"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(event)=>setDate(event.target.value)}>
                    </input>
                    
            </div>
        </>
    )
}
export default Education;