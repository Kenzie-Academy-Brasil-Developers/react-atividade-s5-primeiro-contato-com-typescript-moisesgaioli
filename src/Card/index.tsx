import { useContext } from "react"
import { UserContext } from "../Context/Provider"



const Card = () => {

    const { list } = useContext(UserContext)
 
    return(
        <div>
            {
                list.map((item, index) => {
                    return <div key={index}> 
                            <h2> {item.name} </h2>
                            <p> {item.age} </p>
                            <p> {item.hobby} </p>
                        </div>
                    }    
                )
            }
        </div>
    )
}

export default Card;