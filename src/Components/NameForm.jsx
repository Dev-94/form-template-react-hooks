import React from "react"
import { useInput } from '../Hooks/InputHook'


export default function NameForm(props) {
    // const [name, setName] = useState("")
    // const { value, bind, reset } = useInput('')
    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('')
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('')

    const handleSubmit = (event) => {
        alert(`Submitting ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()

    }
    /* PSEUDOCODE FOR IMPLEMENTING NAME VALIDATION */
    // before it is submitted, it must be validated; after it is typed, it must be validated
    // event.preventDefault() has to happen before everything else
    // bindFirstName is the input
    // input gets passed into validation function 
    // return true, handle submit fires off
    // return false, sends alert message 'please input valid name'

    const validateName = (event, inputFirstName = bindFirstName.value, inputLastName = bindLastName.value) => {
        event.preventDefault()
        const regex = /^\D{2,}$/
        if (regex.test(inputFirstName) || regex.test(inputLastName)) handleSubmit()
        else alert('Please input a valid name.')
    }

    return (
        <form onSubmit={validateName}>
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