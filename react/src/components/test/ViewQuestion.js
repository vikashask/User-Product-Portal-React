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
                subject:this.props.location.state.subject
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
              <div>
              <h2 className="sub-header">View Question : {this.state._id}</h2>
                <table className="table table-striped table-hover table-responsive">
                    <tbody>
                        <tr>
                            <td className="col-md-3">Question Type</td>
                            <td>{this.state.q_type}</td>
                        </tr>  
                        <tr>
                            <td>Question Level</td>
                            <td>{this.state.q_level}</td>
                        </tr> 
                        <tr>
                            <td>Subject</td>
                            <td>{this.state.subject}</td>
                        </tr> 
                        <tr>
                            <td>Question</td>
                            <td>{this.state.question}</td>
                        </tr> 
                        <tr>
                            <td>Option A</td>
                            <td>{this.state.a}</td>
                        </tr>   
                        <tr>
                            <td>Option B</td>
                            <td>{this.state.b}</td>
                        </tr> 
                        <tr>
                            <td>Option C</td>
                            <td>{this.state.c}</td>
                        </tr> 
                        <tr>
                            <td>Option D</td>
                            <td>{this.state.d}</td>
                        </tr> 
                        <tr>
                            <td>Option E</td>
                            <td>{this.state.e}</td>
                        </tr> 
                        <tr className="text-success">
                            <td><strong> Answer </strong></td>
                            <td>{this.state.answer}</td>
                        </tr> 
                    </tbody>
                </table>
                    <button onClick={this.onGetProduct} className="btn btn-primary" type="submit">See Question List</button>
              </div>
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