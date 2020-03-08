import React from "react"
import { useInput } from '../Hooks/InputHook'


export default function NameForm(props) {
    // const [name, setName] = useState("")
    // const { value, bind, reset } = useInput('')
    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('')
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('')

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Submitting ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name: <input type="text" {...bindFirstName} />
            </label>
            <label>
                Last Name: <input type="text" {...bindLastName} />
            </label>

            <input type="submit" value="Submit" />
        </form>

    )
}