// create your App component here
import {useState, useEffect} from "react"

export default function App(){
    
    const [dogImage, setDogImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=>r.json())
        .then(data => {
            setDogImage(data.message)
            setIsLoaded(true)
        })
    }, [])

    if(!isLoaded){
        return(<p>Loading</p>)
    }
    
    return(
        <img src={dogImage} alt="A Random Dog"/>
    )
}