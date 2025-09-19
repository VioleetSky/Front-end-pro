//Updating the screen
import {useState} from "react";

export default function UpdatingScreen(){
    return (
        <div>
            <h1>Counters</h1>
            <MyButton />
            <MyButton />
        </div>
    );
}

function MyButton(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
