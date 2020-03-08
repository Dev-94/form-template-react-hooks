import React, { useState } from "react"

export default function NameForm(props) {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('hello')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input type="text" />
            </label>

            <input type="submit" value="Submit" />
        </form>

    )
}