import { useState } from "react";

function Education () {
    const [institution, setInstitution] = useState("");
    const [major, setMajor] = useState("");
    const [date, setDate] = useState("");

    return (
        <>
            <form>
                <label for="institution">Institution</label>
                <input
                type="text"
                name="institution"
                id="institution"
                value={institution}
                onChange={(event)=>setInstitution(event.target.value)}>
                </input>
                <label for="major">Major</label>
                <input
                type="text"
                name="major"
                id="major"
                value={major}
                onChange={(event)=>setMajor(event.target.value)}>
                </input>
                <label for="date">Date</label>
                <input
                type="text"
                name="date"
                id="date"
                value={date}
                onChange={(event)=>setDate(event.target.value)}>
                </input>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
export default Education;