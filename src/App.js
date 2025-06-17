
import './App.css';
//import Counter from './counter';
//import IncrementCounter from './IncrementCounter';
//import Demo from './FunctionComponent';
//import Demo from './ClassComponent';
import ClassComponent from './ClassComponent';
import LifeCycle from './LifeCycle';
import FunctionComponent from './FunctionComponent';
import CarData from './CarData.js';

function App() {
  
  //alert("welcome to home page")
  
  return (
    <div className="App">
      <h1>Welcome to first react app</h1>
     {/* <Demo tech="MERN STACK"/> */}
     {/* <BindComponent/> */}
       {/* <ClassComponent  id ='25' comp= "react components"/>  */}
        <LifeCycle/> 
      {/* <FunctionComponent/> */} 
      {/* <CarData/> */}
      {/* <Demo/> */}
     {/* <IncrementCounter/> */}
     {/* <Counter/>  */}
  
    </div>
  );
}

export default App; 




