import React, { useState } from "react"

export default function NameForm(props) {
    const [name, setName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Submitting ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>

            <input type="submit" value="Submit" />
        </form>

    )
}