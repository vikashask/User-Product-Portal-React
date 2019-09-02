import React from 'react';
import { connect } from 'react-redux';
import Header from "../../components/layout/Header";

class ViewProduct extends React.Component { 
    constructor(prpos){
        super(prpos);
        this.state = {
            name:'',
            description:'',
            price:'',
            _id:'',
        }
    }

    // getting all data from store from home component
    componentDidMount = () =>{
        console.log("getting all data from store from home component---",this.props.allData);
        console.log("==================_id",this.props.location.state._id);
        if(this.props.location.state){
            this.setState({
                _id:this.props.location.state._id,
                name:this.props.location.state.name,
                description:this.props.location.state.description,
                price:this.props.location.state.price,
            })
        }else{
            this.props.history.push('/home');
        }
    }
    onGetProduct = () =>{
        this.props.history.push('/home');
    }

    render = () => {
        return(
            <div className="container">
              <Header/>
                <form className="form-signin">
                    <h2 className="sub-header">View Product</h2>
                    <input type="text" value={this.state.name} className="form-control" readOnly />
                    <br></br>
                    <input type="text" value={this.state.description} className="form-control" readOnly />
                    <br></br>
                    <input type="text" value={this.state.price} className="form-control" readOnly />
                    <br></br>
                    <button onClick={this.onGetProduct} className="btn btn-primary" type="submit">See Product List</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        allData:state.allData
    }
};

export default connect(mapStateToProps)(ViewProduct);