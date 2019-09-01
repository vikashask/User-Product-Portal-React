import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Sidebar from './layout/Sidebar';
// import Createrow from './shared/Createrow';
import * as Constants from '../utils/Constants';
import {loadAllData} from "../actions/dataAction"
import ReactTable from "react-table";
import Header from "../components/layout/Header";
import "react-table/react-table.css";

class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            userList:[],
            data:'00000'
        }
    }

    // load all data in store
    componentDidMount = () =>{
        console.log("tokrn",localStorage.getItem('token'));
        if(!localStorage.getItem('token')){
            this.props.history.push('/');
        }
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

    addUser = (event) =>{
		event.preventDefault();
        this.props.history.push('/add-user');
    }

    render(){
        let userList
        if(this.state.userList){
            userList = this.state.userList;
        }
          const columns = [
            {
                Header: 'First Name',
                accessor: 'firstName',
                headerClassName:'text-left'
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
                headerClassName:'text-left'
            },
            {
                Header: 'age',
                accessor: 'age',
                headerClassName:'text-left'
            },
            {
                Header: 'email',
                accessor: 'email',
                headerClassName:'text-left'
            },
            {
                Header: "Edit",
                headerClassName:'text-left',
                id:'edit',
                accessor: str => "edit",
                Cell: (row)=> (
                <span style={{cursor:'pointer',color:'blue',textDecoration:'underline'}}
                      onClick={() => {
                          this.props.history.push(`/edit-user`,{
                            _id:this.state.userList[row.index]._id,
                            email:this.state.userList[row.index].email,
                            firstName:this.state.userList[row.index].firstName,
                            lastName:this.state.userList[row.index].lastName,
                            age:this.state.userList[row.index].age,
                            password:this.state.userList[row.index].password
                        })

                        }}>
                          Edit
                        </span> 
                )},
                {
                    Header: "Delete",
                    id:'delete',
                    headerClassName:'text-left',
                    accessor: str => "delete",
                    Cell: (row)=> (
                    <span style={{cursor:'pointer',color:'blue',textDecoration:'underline'}}
                          onClick={() => {
                              let data = this.state.userList;
                          if(localStorage.getItem('token') === this.state.userList[row.index]._id){
                            alert("You cann't delete your account");
                          }else{
                              fetch(Constants.baseURL + 'user',
                                    {
                                        method: `DELETE`,
                                        credentials: `include`,
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify({ '_id': this.state.userList[row.index]._id})
    
                                    }).then((res) => {
                                        if(res.status === 200) {
                                            res.json().then((response) => {
                                                console.log('response',response);
                                                data.splice(row.index, 1)
                                                  this.setState({data})
                                            })
                                        }
                                    })
                                    .catch((error) => {
                                        console.log("error----", error);
                                    });
                                }
                            }}>
                              Delete
                            </span> 
                    )}
             
        ];
        return(
            <div className="container">
              <Header/>
              <h2 className="sub-header">User List<br></br>
              <button onClick={this.addUser} className="btn btn-primary" type="submit">Add user</button>
              </h2>
              <ReactTable
                    data={userList}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
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
)(User);