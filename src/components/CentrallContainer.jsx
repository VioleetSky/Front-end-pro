import React from 'react'

class CentrallContainer extends React.Component {
    render(){
        const {img}=this.props;
        const {text}=this.props;
return(
    <div className='m-5 d-flex'>
        <img className="img-fluid w-50 me-5" src={img} alt="Image"/>
        <div>
            <h1>Марракеш — серце Марокко</h1>
            <p>{text}</p>
        </div>
    </div>
)
    }
}
export default CentrallContainer;