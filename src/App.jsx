import SmileList from "./components/SmileList";

function App() {
const smiles=[
    {id:1, smile:'😐'},
    {id:2, smile:'🥺'},
    {id:3, smile:'🤯'},
    {id:4, smile:'🤓'},
    {id:5, smile:'😎'},
    {id:6, smile:'😗'},
    {id:7, smile:'☺️'}
]
  return (
    <div className="container mt-5">
<SmileList smiles={smiles}/>
    </div>
  )
}

export default App
