import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    return(
<div style={{textAlign: 'center', marginTop: '50px'}}>
    <h1>Тестова програма</h1>
    <p>Лічильник {count}</p>
    <button onClick={() => setCount(count + 1)}>
        Натисни
    </button>
</div>
    );
}