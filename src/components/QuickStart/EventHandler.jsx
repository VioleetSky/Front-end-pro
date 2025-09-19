//Responding to events
function EventHandler() {
function handleClick() {
    alert('clicked');
}
return (
    <button onClick={handleClick}>
        Click me
    </button>
);
}
export default EventHandler;