import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from '../components/layout/Sidebar';
import Createrow from '../components/shared/Createrow';
import * as Constants from '../utils/Constants';
import {loadAllData} from "./../actions/dataAction"
import ReactTable from "react-table";
import "react-table/react-table.css";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            productList:[],
        }
    }

    // load all data in store
    componentDidMount = () =>{
        // console.log("tokrn",localStorage.getItem('token'));
        if(!localStorage.getItem('token')){
            this.props.history.push('/');
        }
        this.props.loadAllData({id:12,name:'vikask'});
        fetch(Constants.baseURL + 'product',
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
                        this.setState({productList: response});
                    })
                }
            })
            .catch((error) => {
                console.log("error----", error);
            });
    }

    addProduct = (event) =>{
		event.preventDefault();
        this.props.history.push('/add-product');
    }

    render(){
        let productList
        if(this.state.productList){
            productList = this.state.productList;
        }
          const columns = [
            {
                Header: 'Name',
                accessor: 'name'
            },
            {
                Header: 'Description',
                accessor: 'description'
            },
            {
                Header: 'Price',
                accessor: 'price'
            },
            {
                Header: "View",
                id:'view',
                accessor: str => "view",
                Cell: (row)=> (
                <span style={{cursor:'pointer',color:'blue',textDecoration:'underline'}}
                      onClick={() => {
                              console.log("you can edit");
                                this.props.history.push(`/view-product`,{
                                _id:this.state.productList[row.index]._id,
                                name:this.state.productList[row.index].name,
                                description:this.state.productList[row.index].description,
                                price:this.state.productList[row.index].price
                            })
                        }}>
                          View
                        </span> 
                )},
                {
                Header: "Edit",
                id:'edit',
                accessor: str => "edit",
                Cell: (row)=> (
                <span style={{cursor:'pointer',color:'blue',textDecoration:'underline'}}
                      onClick={() => {
                          let data = this.state.productList;
                          if(localStorage.getItem('token') == this.state.productList[row.index].created_by){
                              console.log("you can edit");
                                this.props.history.push(`/edit-product`,{
                                _id:this.state.productList[row.index]._id,
                                name:this.state.productList[row.index].name,
                                description:this.state.productList[row.index].description,
                                price:this.state.productList[row.index].price
                            })
                          }else{
                              alert("You are not owner,you haven't permission to edit");
                          }
                        }}>
                          Edit
                        </span> 
                )},
                {
                    Header: "Delete",
                    id:'delete',
                    accessor: str => "delete",
                    Cell: (row)=> (
                    <span style={{cursor:'pointer',color:'blue',textDecoration:'underline'}}
                          onClick={() => {
                              let data = this.state.productList;
                              console.log('_id----------',this.state.productList[row.index]._id);
                          if(localStorage.getItem('token') == this.state.productList[row.index].created_by){
                              fetch(Constants.baseURL + 'product',
                                    {
                                        method: `DELETE`,
                                        credentials: `include`,
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                            body: JSON.stringify({ '_id': this.state.productList[row.index]._id})
    
                                    }).then((res) => {
                                        if(res.status === 200) {
                                            res.json().then((response) => {
                                                console.log('response',response);
                                                // this.setState({productList: response});
                                                data.splice(row.index, 1)
                                                  this.setState({data})
                                            })
                                        }
                                    })
                                    .catch((error) => {
                                        console.log("error----", error);
                                    });
                                }else{
                                    alert("You are not owner,you haven't permission to delete");
                                }
                            }}>
                              Delete
                            </span> 
                    )}
             
        ];
        return(
            <div>
              <Sidebar/>
              <h2 className="sub-header">product List<br></br>
              <button onClick={this.addProduct} className="btn btn-primary" type="submit">Add product</button>
              </h2>
              <ReactTable
                    data={productList}
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
)(Home);