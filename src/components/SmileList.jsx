import React from "react";

class SmileList extends React.Component {
    state = {
        smilesWithCount: this.props.smiles.map(smile => ({
            ...smile,
            count: 0
        })),
        bestSmile: {smile:"👀", count:0}
    }
   handleClick = (id) => {
this.setState((prevState) => ({
    smilesWithCount: prevState.smilesWithCount.map(smile=>smile.id===id ? {...smile,count: smile.count+1} : smile)
}))
   }
    createList(){
        return this.state.smilesWithCount.map((smile) => (<li className='mb-4 ms-4 border shadow p-3 rounded-3 w-25 ' key={smile.id}> <button onClick={()=>this.handleClick(smile.id)} className="btn btn-outline-secondary me-5"> {smile.smile}</button>count: {smile.count}</li>))
    }
    render(){
        return (
            <div>
            <ul className="list-unstyled mt-5">
                {this.createList()}
            </ul>
        <button className="btn btn-primary" onClick={()=>this.handlerClickResult()}>
            Show Results
        </button>
                <div><p>
                    Best Smile: {this.state.bestSmile.smile}
                </p></div>
            </div>
        )
    }

    handlerClickResult = () => {
        let countResult = 0;
        let smileBest = null;

        this.state.smilesWithCount.forEach(smile => {
            if (smile.count > countResult) {
                countResult = smile.count;
                smileBest = smile;
            }
        });
        this.setState({bestSmile: smileBest});
    }


}
export default SmileList;