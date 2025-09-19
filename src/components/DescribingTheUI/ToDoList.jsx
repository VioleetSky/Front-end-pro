const person= {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList() {

    return (
     <div style={person.theme}>
         <h1>{person.name}`s Todos</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"/>
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve spectrum technology</li>
            </ul>
        </div>
    );
}