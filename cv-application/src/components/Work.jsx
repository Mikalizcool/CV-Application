import { useState } from "react";

function Work () {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    return (
        <>
            <div className = "flex flex-col w-3/5 pb-5 mb-10">
                
                    <label htmlFor="company">Company</label>
                    <input
                    className="border-4"
                    type="text"
                    name="company"
                    id="company"
                    value={company}
                    onChange={(event)=>setCompany(event.target.value)}
                    />
                    
                    <label htmlFor="position">Position</label>
                    <input
                    className="border-4"
                    type="text"
                    name="position"
                    id="position"
                    value={position}
                    onChange={(event)=>setPosition(event.target.value)}
                    />
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <input
                    className="border-4"
                    type="text"
                    name="responsibilities"
                    id="responsibilities"
                    value={responsibilities}
                    onChange={(event)=>setResponsibilities(event.target.value)}
                    />
                    <label htmlFor="startDate">Start Date</label>
                    <input
                    className="border-4"
                    type="text"
                    name="startDate"
                    id="startDate"
                    value={startDate}
                    onChange={(event)=>setStartDate(event.target.value)}
                    />
                    <label htmlFor="endDate">End Date</label>
                    <input
                    className="border-4"
                    type="text"
                    name="endDate"
                    id="endDate"
                    value={endDate}
                    onChange={(event)=>setEndDate(event.target.value)}
                    />
                    
            </div>
        </>
    )
}
export default Work;