import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from '../components/layout/Sidebar';
import Createrow from '../components/shared/Createrow';
import * as Constants from '../utils/Constants';

import {loadAllData} from "./../actions/dataAction"

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            userList:[],
            data:'00000'
        }
    }

    // load all data in store
    componentDidMount = () =>{
        this.props.loadAllData({id:12,name:'vikask'});
        fetch(Constants.baseURL + 'user',
            {
                method: `GET`,
                credentials: `include`,
                    headers: {
                        'Content-Type': 'application/json',
                    }
            }).then((res) => {
                if(res.status === 200) {
                    res.json().then((response) => {
                        console.log('response',response);
                        this.setState({userList: response});
                    })
                }
            })
            .catch((error) => {
                console.log("error----", error);
            });
    }

    createTable = () =>{
        return this.state.userList.map((user, index) => {
            const { firstName, lastName, email, age ,_id} = user //destructuring
            return (
               <tr key={_id}>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{email}</td>
                  <td>{age}</td>
               </tr>
            )
         })
    }

    render(){
        let userList
        if(this.state.userList){
            userList = <Createrow userList={this.state.userList}/>

        }
        return(
            <div>
              <Sidebar/>
              <h2 className="sub-header">User List</h2>
              <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
              {userList}
              </tbody>
            </table>
            
          </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		allData: state.allData
	}	
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
	loadAllData
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);