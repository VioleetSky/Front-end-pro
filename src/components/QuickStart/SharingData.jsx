//Sharing data between components
import {useState} from "react";

export default function SharingData(){
    const [count, setCount]=useState(0);
    function handlerClick(){
        setCount(count + 1);
    }
    return (
        <div>
            <h1>
                Counter
            </h1>
            <MyButton count={count} onClick={handlerClick} />
            <MyButton count={count} onClick={handlerClick} />
        </div>
    );
}

function MyButton({count, onClick}) {
return(
    <button onClick={onClick}>
        Click {count}!
    </button>
)
}