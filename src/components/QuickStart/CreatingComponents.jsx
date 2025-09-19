//Creating and nesting components
function MyButton() {
    return (
        <button>
            I am a button!
        </button>
    );
}
 function CreatingComponents(){
    return (
        <div>
            <h1>Hello World!</h1>
            <MyButton />
        </div>
    );
}

export default CreatingComponents;
