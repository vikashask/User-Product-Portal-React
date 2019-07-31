import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Utils from '../../utils/Utils';
import * as Constants from '../../utils/Constants';
import MessageBar from './../shared/MessageBar'

class AddProduct extends React.Component { 
    constructor(prpos){
        super(prpos);
        this.state = {
            name:'',
            description:'',
            price:'',
            _id:'',
            validated:false,
            class:'error',
            errorMsg:''
 
        }
        this.nameChange = this.nameChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
    }

    // getting all data from store from home component
    componentDidMount = () =>{
        console.log("getting all data from store from home component---",this.props.allData);
    }

    nameChange = (event) =>{
        this.setState({name: event.target.value});
    }
    descriptionChange = (event) =>{
        this.setState({description: event.target.value});
    }

    priceChange = (event) =>{
        this.setState({price: event.target.value});
    }
    
    onAddProduct = (event) => {
        event.preventDefault();
        fetch(Constants.baseURL + 'product',
            {
                method: `POST`,
                credentials: `include`,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                     'name': this.state.name,
                     'description':this.state.description, 
                     'price': this.state.price,
                     'created_by':localStorage.getItem('token')
                })
            }).then((res) => {
                if(res.status === 200) {
                    res.json().then((response) => {
                        if(response){
                            this.props.history.push('/home');
                        }else{
                            this.setState({class:'error',errorMsg: 'Unable to Register'});
                        }
                    })
                }
            })
            .catch((error) => {
                console.log("error----", error);
            });
    }

    onCancel = () =>{
        this.props.history.push('/home');
    }

    render = () => {
        let message;
        if(this.state.errorMsg){
          message = <MessageBar errorMsg={this.state.errorMsg} className={this.state.class}/>
        }
        return(
            <div className="container">
                {message}
                <form className="form-signin">
                    <h2 className="form-signin-heading">Add product</h2>
                    <input type="text" value={this.state.name} onChange={this.nameChange} className="form-control" placeholder="Enter name" required autoFocus />
                    <br></br>
                    <input type="text" value={this.state.description} onChange={this.descriptionChange} className="form-control" placeholder="Enter description" required />
                    <br></br>
                    <input type="text" value={this.state.price} onChange={this.priceChange} className="form-control" placeholder="Enter Price" required />
                    <br></br>
                    <button onClick={this.onAddProduct} className="btn btn-primary" type="submit">Add product</button>
                    <button onClick={this.onCancel} className="btn btn-default" type="submit">Cancel</button>
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

export default connect(mapStateToProps)(AddProduct);