import { useContext, useState } from "react"
import { UserContext } from "../Context/Provider"
import { Input } from "../Input"

export const Form = () => {

    const { createNewUser } = useContext(UserContext)

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [hobby, setHobby] = useState("")

    const handleSubmit = () => {
        const newList = {
            name: name,
            age: age,
            hobby: hobby,   
        }
        createNewUser(newList)
    }

    return (
        <div>
            <Input placeholder="Nome" type="text" value={name} label="Nome" onChange={e => setName(e.target.value)} />
            <Input placeholder="Idade" type="number" label="Idade" value={age} onChange={e => setAge(e.target.value)} />
            <Input placeholder="Hooby" type="text" label="Hobby" value={hobby}  onChange={e => setHobby(e.target.value)} />
            <button onClick={handleSubmit}> Enviar </button>
        </div>
    )
}