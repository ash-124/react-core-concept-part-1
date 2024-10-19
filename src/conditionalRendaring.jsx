// export default function ConditionalRendering({person}){
//    const {name, age, isStudent, study} =person
// rule:-01 to destructure
//    if(isStudent===true){
//     console.log('Destructuring done');
//    }else{
//     console.log('Destructuring failed.')
//    }
// rule:-02
// if(isStudent){
//     return(
//         <>
//         <p>He is {name}.{name} is now {age} years old.{name} is studying{study}</p>
//         </>
//     )
// }else{
//     return <h2>Invalid info he is not a student.</h2>
// }
// rule:-03
// if(!isStudent){
//         return(
//             <>
//             <p>He is {name}.{name} is now {age} years old.{name} is studying{study}</p>
//             </>
//         )
//     }return(
//      <h2>Invalid info he is not a student.</h2>)
// rule no:-04 Ternary operator
// return(!isStudent? <>
//      <p>He is {name}.{name} is now {age} years old.{name} is studying{study}</p>
//                </>: <h2>Invalid info he is not a student.</h2>)
// }
export default function ConditionalRendering({ person }) {
  const { name, age, isStudent, study } = person;
  return(
    <>
    {isStudent && <p>He is {name}.{name} is now {age} years old.{name} is studying{study}</p>}
    {!isStudent || <h1>Admit him to a school first</h1>}
    </>
  )
}
