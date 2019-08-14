import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from '../components/layout/Sidebar';
import Createrow from '../components/shared/Createrow';
import * as Constants from '../utils/Constants';
import {loadAllData,loadAllProduct, deleteProduct} from "./../actions/dataAction"
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
        if(!localStorage.getItem('token')){
            this.props.history.push('/');
        }
        // this.props.loadAllData({id:12,name:'vikask'});

        // console.log("------",this.props.allProductData.productList);

        this.props.loadAllProduct();

        // fetch(Constants.baseURL + 'product',
        //     {
        //         method: `GET`,
        //         credentials: `include`,
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             }
        //     }).then((res) => {
        //         if(res.status === 200) {
        //             res.json().then((response) => {
        //                 console.log('response',response);
        //                 this.setState({productList: response});
        //                 // putting all data into store
        //                 this.props.loadAllProduct({productList: response});
        //             })
        //         }
        //     })
        //     .catch((error) => {
        //         console.log("error----", error);
        //     });
    }

    addProduct = (event) =>{
        event.preventDefault();
        // example to fetch allProduct from store
        // console.log("------",this.props.allProductData.productList);
        
        this.props.history.push('/add-product');
    }

    render(){
        console.log('this.props',this.props);
        
        let productList;
        if(this.props.allProductData){
            productList = this.props.allProductData;
        }
          const columns = [
            {
                Header: 'Name',
                accessor: 'name',
                headerClassName:'text-left'
            },
            {
                Header: 'Description',
                accessor: 'description',
                headerClassName:'text-left'
            },
            {
                Header: 'Price',
                accessor: 'price',
                headerClassName:'text-left'
            },
            {
                Header: "View",
                id:'view',
                headerClassName:'text-left',
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
                headerClassName:'text-left',
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
                    headerClassName:'text-left',
                    accessor: str => "delete",
                    Cell: (row)=> (
                    <span style={{cursor:'pointer',color:'blue',textDecoration:'underline'}}
                          onClick={() => {
                              console.log("---",productList[row.index]);
                          if(localStorage.getItem('token') == productList[row.index].created_by){
                                this.props.deleteProduct({productId:productList[row.index]._id,index:row.index});
                                this.props.loadAllProduct();
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
        allData: state.allData,
        allProductData: state.allProductData.allProduct
	}	
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadAllData,
    loadAllProduct,
    deleteProduct
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);