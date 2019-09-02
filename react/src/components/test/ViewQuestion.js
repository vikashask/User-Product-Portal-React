import React from 'react';
import { connect } from 'react-redux';
import Header from "../layout/Header";

class ViewQuestion extends React.Component { 
    constructor(prpos){
        super(prpos);
        this.state = {
            question:'',
            answer:'',
            q_type:'',
            _id:'',
        }
    }

    // getting all data from store from home component
    componentDidMount = () =>{
        // console.log("getting all data from store from home component---",this.props.allData);
        // console.log("==================_id",this.props.location.state._id);
        if(this.props.location.state){
            this.setState({
                _id:this.props.location.state._id,
                question:this.props.location.state.question,
                answer:this.props.location.state.answer,
                q_type:this.props.location.state.q_type,

                q_level:this.props.location.state.q_level,
                a:this.props.location.state.a,
                b:this.props.location.state.b,
                c:this.props.location.state.c,
                d:this.props.location.state.d,
                e:this.props.location.state.e,
            })
        }else{
            this.props.history.push('/home');
        }
    }

    onGetProduct = () =>{
        this.props.history.push('/manage-question');
    }

    render = () => {
        return(
            <div className="container">
              <Header/>
                <form className="form-signin">
                    <h2 className="sub-header">View Question : {this.state._id}</h2>
                    <input type="text" value={this.state.q_type} className="form-control" readOnly />
                    <br></br>
                    <input type="text" value={this.state.q_level} className="form-control" readOnly />
                    <br></br>
                    <input type="text" value={this.state.question} className="form-control" readOnly />
                    <br></br>

                    <input type="text" value={this.state.a} className="form-control" readOnly />
                    <br></br>
                    <input type="text" value={this.state.b} className="form-control" readOnly />
                    <br></br>
                    <input type="text" value={this.state.c} className="form-control" readOnly />
                    <br></br>

                    <input type="text" value={this.state.d} className="form-control" readOnly />
                    <br></br>
                    <input type="text" value={this.state.e} className="form-control" readOnly />
                    <br></br>
                    <input type="text" value={this.state.answer} className="form-control" readOnly />
                    <br></br>
                    <button onClick={this.onGetProduct} className="btn btn-primary" type="submit">See Question List</button>
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

export default connect(mapStateToProps)(ViewQuestion);