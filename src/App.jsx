
import ConditionalRendering from './conditionalRendaring';
import { Map } from './map/Map';
import { Map2 } from './map/Map';
import './App.css'

function App() {
  const person = 
  {
    name : "Asraf",
    age: 20,
    isStudent :true,
    study:'Diploma in CSE'

  }
  const strangers = [
    'Arif', 'Mamun', 'Abdullah', 'Alvi', 'Yousuf' 
  ]
  const singers = [
    {name:'Atif Aslam', age:42 },
    {name:'Honey paji', age:46},
    {name:'Badshah Jihan', age:40},
    {name: 'Pritom Hassan', age:28}
  ]
  return (
    <> 
      
      <h1>React</h1> 
      <p>My name is {person.name}. Age is {person.age}. {person.isStudent? `studying ${person.study}`: 'Not studying'}</p>
      <hr />
      <Employe name = "Abdul Ali" salary = '25k'position = 'Supervisor' />
      <Employe name = 'Abul' salary= {`${20}K`} position = 'Assistant Quality'></Employe>
      <DeclareCssInReact></DeclareCssInReact>
      <Props name = 'Babul' age = '20' study = 'college' />
      <ConditionalRendering person = {person}/>
      {
        strangers.map(stranger => <Map stranger={stranger}/>)
      }
      {
        singers.map(singer => <Map2 singer = {singer}/>)
      }
    </>

  )
}
function Employe (props) {
  console.log(props);
  return(
    <div className='addCss' style={{margin:"10px"}}>
      <h2>Employee of Fakir LTD</h2>
      <div>
        <ul>
            <li>Name :{props.name}</li>
            <li>salary: {props.salary}</li>
            <li>  position : {props.position}</li>
        </ul>
        
      </div>
    </div>
  )
}
function DeclareCssInReact (){
  const style ={
    border : '1px solid red',
    padding : '20px',
    borderRadius: '16px',
    
  }
  return(
    <>
    <h3 className='addCss'>Add css in React</h3>
    <ol style={style}>
      <li style={{
        color : 'green',
        marginBottom :'8px'
      }}>Adding css from css file.By className.</li>
      <li style={{
        color : 'blue',
        marginBottom :'8px'
      }}>added a variable in style dynamically.</li>
      <li style={{
        color : 'yellow',
        marginBottom :'8px'
      }}>add the object directly on style attribute.</li>

    </ol>
    </>
  )
}
function Props ({name, age, study}) {
  
  return(
    <>
    <h2 >Props </h2>
    <hr />
    <p>Props are just the attribute of components. Props are call from components and recieve by component functions parameter.
      Props are immutable / read only it can not change.props are used to pass value or information to component function.
    </p>
    <p>we can send different type of datatypes.String, Numbers, bolean, Variable etc.Also can send component. <br /> 
    <ul>
      <li>String can pass between ""/''/``
        
      </li>
      <li>For other data-types it must pass between curly braces {`{}`}</li>
    </ul>
     </p>
    <ul className='addCss'>
      <li>After recieving props as parameter's. Need to destructure it.
         </li>
      <ol>
        <li>Access with dot or bracket notation.Example:-<br/>Name is:{name}
        
        </li>
        <li>Destructure  the props Example:-<br/>Name is:{name} Age:{age} </li>
        <li>Destructure them on component functions parameter.Example:-<br/>Name is:{name} Age:{age} Studying at:{study} </li>
      </ol>
    </ul>
    </>
  )
}

export default App
