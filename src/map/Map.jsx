import { MapDetails } from "./MapDetails";


export function Map 
({stranger}) {
   
    return(
        <>
            <h2>Map in React</h2>
           <MapDetails name = {stranger}/>
        </>
    )
}
export function Map2 ({singer}){
    const {name, age} = singer;
    return(
        <>
            <h2>Map method in array of object</h2>
            <p>Singer:{name}</p>
            <p>Age:{age}</p>
        </>
    )
}