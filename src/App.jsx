//import ClassTimer from './ClassComponent'
import FuncTimer from './FuncComponent'
import Button from "react-bootstrap/Button";
import {useState} from "react";

function App() {
    const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="m-3 text-center">
        {isVisible && <FuncTimer/>}   {/*{isVisible && <ClassTimer/>}*/}
        <Button variant="warning" className="m-2" onClick={()=>setIsVisible(!isVisible)}>Unmount Timer</Button>
    </div>
  )
}

export default App
